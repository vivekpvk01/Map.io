import { type NextRequest, NextResponse } from "next/server"
import { searchRoadmaps } from "@/utils/roadmaps"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")

    if (!query) {
      return NextResponse.json({ error: "Query parameter 'q' is required" }, { status: 400 })
    }

    const results = searchRoadmaps(query)

    return NextResponse.json({
      query,
      results,
      total: results.length,
    })
  } catch (error) {
    console.error("Search API Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
