import { NextResponse } from "next/server"
import bcrypt from "bcryptjs"

// Temporary in-memory user storage (for demo purposes)
const tempUsers = new Map()

export async function POST(req: Request) {
  try {
    console.log("=== SIGNUP API CALLED ===")

    // Parse request body
    const body = await req.json()
    console.log("Request body received:", { ...body, password: "[HIDDEN]" })

    const { name, email, password } = body

    // Validate input
    if (!name || !email || !password) {
      console.log("❌ Validation failed: missing fields")
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and password are required",
        },
        { status: 400 },
      )
    }

    if (password.length < 6) {
      console.log("❌ Validation failed: password too short")
      return NextResponse.json(
        {
          success: false,
          error: "Password must be at least 6 characters long",
        },
        { status: 400 },
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      console.log("❌ Validation failed: invalid email format")
      return NextResponse.json(
        {
          success: false,
          error: "Please enter a valid email address",
        },
        { status: 400 },
      )
    }

    console.log("✅ Input validation passed")

    const testEmail = email.toLowerCase()

    // Check if user already exists in temporary storage
    if (tempUsers.has(testEmail)) {
      console.log("❌ User already exists in demo storage")
      return NextResponse.json(
        {
          success: false,
          error: "An account with this email already exists",
        },
        { status: 400 },
      )
    }

    // Hash password
    console.log("🔐 Hashing password...")
    const hashedPassword = await bcrypt.hash(password, 12)
    console.log("✅ Password hashed")

    // Create user in temporary storage
    const newUser = {
      id: "user_" + Date.now(),
      name: name.trim(),
      email: testEmail,
      password: hashedPassword,
      createdAt: new Date(),
    }

    tempUsers.set(testEmail, newUser)
    console.log("✅ User created successfully in demo storage:", newUser.id)

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully!",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("💥 SIGNUP ERROR:", error)

    // Log more details about the error
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
