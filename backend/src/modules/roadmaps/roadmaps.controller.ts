import { Request, Response } from "express"
import { z } from "zod"
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
  model: "gemini-2.0-flash"
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
   EXISTING ROADMAP CONTROLLERS (UNCHANGED)
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
   GEMINI AI ROADMAP GENERATION
========================================================= */

export async function generateRoadmap(req: Request, res: Response) {
  try {
    console.log("=== GENERATE ROADMAP CALLED ===")
    console.log("Body:", req.body)

    const parsed = GenerateSchema.safeParse(req.body)

    if (!parsed.success) {
      return res.status(400).json({ success: false, error: "Invalid input" })
    }

    const { goal, experience, time_commitment, description } = parsed.data

    const prompt = `
Generate a structured learning roadmap in STRICT JSON format.

Structure:
{
  "title": string,
  "description": string,
  "nodes": [
    {
      "id": string,
      "label": string,
      "description": string,
      "difficulty": "beginner" | "intermediate" | "advanced"
    }
  ],
  "edges": [
    { "source": string, "target": string }
  ]
}

Rules:
- Minimum 6 nodes
- Logical progression
- No markdown
- JSON only

Goal: ${goal}
Experience: ${experience || "Not specified"}
Time Commitment: ${time_commitment || "Not specified"}
Details: ${description || "None"}
`

    console.log("Sending prompt to Gemini...")

    const result = await model.generateContent(prompt)
    const response = await result.response
    let text = response.text().trim()

    console.log("Gemini raw response:", text)

    // Remove markdown if present
    text = text.replace(/```json/g, "")
    text = text.replace(/```/g, "").trim()

    let parsedJSON
    try {
      parsedJSON = JSON.parse(text)
    } catch (err) {
      console.error("Invalid JSON from Gemini:", text)
      throw new Error("AI returned invalid JSON")
    }

    /* ================= NORMALIZE NODES ================= */

    /* ================= STRUCTURED LAYOUT ENGINE ================= */

    const slug = goal.toLowerCase().replace(/\s+/g, "-")

    const BASE_X = 400
    const LEFT_X = 200
    const RIGHT_X = 600
    const Y_GAP = 140

    const structuredNodes = (parsedJSON.nodes || []).map(
      (node: any, index: number) => {

        // Layout logic:
        // First 2 nodes centered (foundation)
        // Then alternate left/right branches
        let x = BASE_X

        if (index >= 2) {
          x = index % 2 === 0 ? LEFT_X : RIGHT_X
        }

        return {
          roadmapId: slug,
          id: node.id || `node-${index}`,
          position: {
            x,
            y: index * Y_GAP,
          },
          data: {
            label: node.label || "Untitled",
            description: node.description || "",
            difficulty: node.difficulty || "beginner",
            resources: [], // maintain structure like predefined
          },
        }
      }
    )

    /* ================= STRUCTURED EDGES ================= */

    const structuredEdges =
      parsedJSON.edges?.map((edge: any, index: number) => ({
        roadmapId: slug,
        id: `e${index + 1}`,
        source: edge.source,
        target: edge.target,
      })) || []

    if (structuredNodes.length === 0) {
      throw new Error("AI returned empty roadmap")
    }

    /* ================= NORMALIZE EDGES ================= */

    const edges =
      parsedJSON.edges?.map((edge: any, index: number) => ({
        id: `edge-${index}`,
        source: edge.source,
        target: edge.target,
        animated: true,
      })) || []

    if (structuredNodes.length === 0) {
      throw new Error("AI returned empty roadmap")
    }

    return res.json({
      success: true,
      id: slug,
      title: parsedJSON.title || `${goal} Learning Path`,
      description:
        parsedJSON.description || `A roadmap to master ${goal}`,
      isOfficial: false,
      nodes: structuredNodes,
      edges: structuredEdges,
    })
  } catch (error) {
    console.error("Generate roadmap error:", error)

    return res.status(500).json({
      success: false,
      error: "AI roadmap generation failed",
    })
  }
}