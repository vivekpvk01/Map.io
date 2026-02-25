import { Request, Response } from "express"
import { z } from "zod"
import slugify from "slugify"
import { GoogleGenerativeAI } from "@google/generative-ai"
import { env } from "../../config/env"

import { Roadmap } from "../../models/Roadmap"
import { RoadmapNode } from "../../models/RoadmapNode"
import { RoadmapEdge } from "../../models/RoadmapEdge"

/* =========================================================
   GEMINI INIT
========================================================= */

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY)

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
})

/* =========================================================
   ZOD VALIDATION
========================================================= */

const GenerateSchema = z.object({
  goal: z.string().min(2),
  experience: z.string().optional(),
  time_commitment: z.string().optional(),
  description: z.string().optional(),
})

/* =========================================================
   EXISTING CONTROLLERS (UNCHANGED)
========================================================= */

export async function getRoadmaps(req: Request, res: Response) {
  try {
    const roadmaps = await Roadmap.find({})
      .select("-_id id title description isOfficial")
      .sort({ isOfficial: -1, createdAt: 1 })

    const data = roadmaps.map((r) => ({
      ...r.toObject(),
      slug: r.id,
    }))

    return res.json({ success: true, data })
  } catch (error) {
    console.error("Get roadmaps error:", error)
    return res.status(500).json({ success: false })
  }
}

export async function getRoadmapBySlug(req: Request, res: Response) {
  try {
    const { slug } = req.params

    const roadmap = await Roadmap.findOne({ id: slug }).select("-_id -__v")

    if (!roadmap) {
      return res.status(404).json({ success: false })
    }

    const edges = await RoadmapEdge.find({ roadmapId: slug }).select(
      "-_id -__v -roadmapId -createdAt"
    )

    return res.json({
      success: true,
      data: {
        ...roadmap.toObject(),
        slug: roadmap.id,
        edges,
      },
    })
  } catch (error) {
    console.error("Get roadmap error:", error)
    return res.status(500).json({ success: false })
  }
}

export async function getRoadmapNodes(req: Request, res: Response) {
  try {
    const { slug } = req.params

    const nodes = await RoadmapNode.find({ roadmapId: slug }).select(
      "-_id -__v -roadmapId -createdAt -updatedAt"
    )

    return res.json({ success: true, data: nodes })
  } catch (error) {
    console.error("Get nodes error:", error)
    return res.status(500).json({ success: false })
  }
}

export async function getNodeResources(req: Request, res: Response) {
  try {
    const { slug, nodeId } = req.params

    const node = await RoadmapNode.findOne({
      roadmapId: slug,
      id: nodeId,
    })

    if (!node) {
      return res.status(404).json({ success: false })
    }

    return res.json({
      success: true,
      data: node.data?.resources || [],
    })
  } catch (error) {
    console.error("Get resources error:", error)
    return res.status(500).json({ success: false })
  }
}

export async function searchRoadmaps(req: Request, res: Response) {
  try {
    const { q } = req.query

    if (!q || typeof q !== "string") {
      return res.status(400).json({ success: false })
    }

    const keyword = q.trim()

    const roadmaps = await Roadmap.find({
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { id: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    }).select("-_id id title description")

    const data = roadmaps.map((r) => ({
      ...r.toObject(),
      slug: r.id,
    }))

    return res.json({ success: true, data })
  } catch (error) {
    console.error("Search error:", error)
    return res.status(500).json({ success: false })
  }
}

/* =========================================================
   AI ROADMAP GENERATION (PRODUCTION GRADE)
========================================================= */

export async function generateRoadmap(req: Request, res: Response) {
  try {
    const parsed = GenerateSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ success: false })
    }

    const { goal } = parsed.data

    const prompt = `
You are a senior curriculum architect.

Create a professional roadmap for:

GOAL: ${goal}

Return STRICT JSON.

Structure:
{
  "title": string,
  "description": string,
  "nodes": [
    {
      "label": string,
      "description": string,
      "difficulty": "beginner" | "intermediate" | "advanced",
      "resources": [
        { "label": string, "url": string, "type": "free" | "paid" }
      ]
    }
  ],
  "edges": [
    { "sourceIndex": number, "targetIndex": number }
  ]
}

Rules:
- Minimum 8 nodes
- Logical vertical progression
- JSON only
`

    const result = await model.generateContent(prompt)
    const response = await result.response
    let text = response.text().trim()

    text = text.replace(/```json/g, "").replace(/```/g, "").trim()

    let parsedJSON
    try {
      parsedJSON = JSON.parse(text)
    } catch {
      return res.status(500).json({
        success: false,
        error: "AI returned invalid JSON",
      })
    }

    const slug = slugify(parsedJSON.title || goal, {
      lower: true,
      strict: true,
    })

    /* ================= PROFESSIONAL LAYOUT ================= */

    const CENTER_X = 500
    const LEFT_X = 350
    const RIGHT_X = 650
    const Y_GAP = 150

    const rawNodes = parsedJSON.nodes || []

    // Normalize IDs cleanly like predefined roadmaps
    const normalizedNodes = rawNodes.map((node: any, index: number) => {
      const id = `node-${index}`

      let x = CENTER_X
      let y = index * Y_GAP

      // Create structured branching similar to official roadmaps
      if (index === 3) x = LEFT_X
      if (index === 4) x = RIGHT_X
      if (index >= 5) x = CENTER_X

      return {
        roadmapId: slug,
        id,
        position: { x, y },
        data: {
          label: node.label || "Untitled",
          description: node.description || "",
          difficulty: node.difficulty || "beginner",
          resources: node.resources || [],
        },
      }
    })

    // Build edges safely using index mapping
    const edges =
      parsedJSON.edges?.map((edge: any, index: number) => ({
        roadmapId: slug,
        id: `e${index}`,
        source: `node-${edge.sourceIndex}`,
        target: `node-${edge.targetIndex}`,
      })) || []

    return res.json({
      success: true,
      id: slug,
      slug,
      title: parsedJSON.title || goal,
      description: parsedJSON.description || "",
      isOfficial: false,
      isAIGenerated: true,
      nodes: normalizedNodes,
      edges,
    })
  } catch (error) {
    console.error("AI roadmap generation error:", error)

    return res.status(500).json({
      success: false,
      error: "AI roadmap generation failed",
    })
  }
}