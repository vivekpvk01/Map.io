import { GoogleGenerativeAI } from "@google/generative-ai"
import { env } from "../../../config/env"

const genAI = new GoogleGenerativeAI(env.GEMINI_API_KEY)

export async function generateRoadmapFromAI(input: {
  goal: string
  experience?: string
  time_commitment?: string
  description?: string
}) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  })

  const prompt = `
You are a professional curriculum architect.

Return STRICT JSON ONLY in this format:

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
    {
      "source": string,
      "target": string
    }
  ]
}

Rules:
- Minimum 6 nodes
- Logical learning order
- Sequential edges
- No markdown
- No explanation
- JSON only

Goal: ${input.goal}
Experience: ${input.experience || "Not specified"}
Time Commitment: ${input.time_commitment || "Not specified"}
Additional Details: ${input.description || "None"}
`

  const result = await model.generateContent(prompt)
  const response = await result.response
  let text = response.text().trim()

  if (text.startsWith("```")) {
    text = text.replace(/```json/g, "")
    text = text.replace(/```/g, "")
    text = text.trim()
  }

  return JSON.parse(text)
}