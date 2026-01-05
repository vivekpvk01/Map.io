import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key"

// Temporary in-memory user storage (for demo purposes)
// In production, this would be your MongoDB database
const tempUsers = new Map()

export async function POST(req: Request) {
  try {
    console.log("=== SIGNIN API CALLED ===")

    const body = await req.json()
    console.log("Request body received:", { ...body, password: "[HIDDEN]" })

    const { email, password } = body

    // Validate input
    if (!email || !password) {
      console.log("❌ Validation failed: missing fields")
      return NextResponse.json(
        {
          success: false,
          error: "Email and password are required",
        },
        { status: 400 },
      )
    }

    console.log("✅ Input validation passed")

    // For demo purposes, create a test user if it doesn't exist
    const testEmail = email.toLowerCase()
    if (!tempUsers.has(testEmail)) {
      console.log("🧪 Creating demo user for testing...")
      const hashedPassword = await bcrypt.hash("password123", 12)
      tempUsers.set(testEmail, {
        id: "demo_" + Date.now(),
        name: "Demo User",
        email: testEmail,
        password: hashedPassword,
        createdAt: new Date(),
      })
    }

    // Find user in temporary storage
    console.log("🔍 Looking for user in demo storage...")
    const user = tempUsers.get(testEmail)
    if (!user) {
      console.log("❌ User not found")
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email or password",
        },
        { status: 401 },
      )
    }
    console.log("✅ User found")

    // For demo, accept any password or check against "password123"
    console.log("🔐 Verifying password...")
    const isValidPassword = password === "password123" || (await bcrypt.compare(password, user.password))
    if (!isValidPassword) {
      console.log("❌ Invalid password")
      return NextResponse.json(
        {
          success: false,
          error: "Invalid email or password. Try 'password123' for demo.",
        },
        { status: 401 },
      )
    }
    console.log("✅ Password verified")

    // Generate JWT token
    console.log("🎫 Generating JWT token...")
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        name: user.name,
      },
      JWT_SECRET,
      { expiresIn: "7d" },
    )
    console.log("✅ JWT token generated")

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: "Sign in successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
        token,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("💥 SIGNIN ERROR:", error)

    if (error instanceof Error) {
      console.error("Error name:", error.name)
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }

    return NextResponse.json(
      {
        success: false,
        error: `Server error: ${error instanceof Error ? error.message : "Unknown error"}`,
      },
      { status: 500 },
    )
  }
}
