import { NextRequest, NextResponse } from "next/server"
import { getTokenFromRequest, verifyJwt } from "@/lib/auth"

export async function GET(req: NextRequest) {
  try {
    const token = getTokenFromRequest(req)

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          error: "No token provided",
        },
        { status: 401 },
      )
    }

    const payload = verifyJwt(token)
    if (!payload) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid token",
        },
        { status: 401 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        data: {
          id: (payload as any).id,
          email: (payload as any).email,
          name: (payload as any).name,
        },
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("VERIFY ERROR:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Server error during verification",
      },
      { status: 500 },
    )
  }
}
