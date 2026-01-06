// This route is now handled by the backend API
// Frontend should call /api/roadmaps/search?q=query
// This file can be removed after confirming backend works
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
  const { searchParams } = new URL(request.url)
  const query = searchParams.get("q")

  if (!query) {
    return NextResponse.json({ success: false, error: "Query parameter 'q' is required" }, { status: 400 })
  }

  try {
    const response = await fetch(`${apiUrl}/roadmaps/search?q=${encodeURIComponent(query)}`)
    const data = await response.json()
    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Search API Error:", error)
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
