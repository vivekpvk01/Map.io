import { NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

export async function GET(req: Request) {
  try {
    console.log("=== AUTH VERIFY API CALLED ===")

    // Get token from Authorization header
    const authHeader = req.headers.get("authorization")
    const token = authHeader?.replace("Bearer ", "")

    console.log("Token received:", token ? "✅ Present" : "❌ Missing")

    if (!token) {
      console.log("❌ No token provided")
      return NextResponse.json(
        {
          success: false,
          error: "No token provided",
        },
        { status: 401 },
      )
    }

    try {
      // Verify JWT token
      console.log("🔍 Verifying JWT token...")
      const decoded = jwt.verify(token, JWT_SECRET) as any
      console.log("✅ Token verified successfully")
      console.log("Decoded user:", { id: decoded.id, email: decoded.email, name: decoded.name })

      // Return user data
      return NextResponse.json(
        {
          success: true,
          user: {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name,
          },
        },
        { status: 200 },
      )
    } catch (jwtError) {
      console.log("❌ JWT verification failed:", jwtError)
      return NextResponse.json(
        {
          success: false,
          error: "Invalid token",
        },
        { status: 401 },
      )
    }
  } catch (error) {
    console.error("💥 VERIFY ERROR:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Server error during verification",
      },
      { status: 500 },
    )
  }
}
