import { NextResponse } from "next/server"

export async function POST() {
  try {
    console.log("🔄 Processing logout request...")

    const response = NextResponse.json({
      success: true,
      message: "Logged out successfully",
    })

    // Clear the auth cookie
    response.cookies.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0, // This expires the cookie immediately
      path: "/",
    })

    // Also clear any other auth-related cookies
    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 0,
      path: "/",
    })

    console.log("✅ Logout API completed")
    return response
  } catch (error) {
    console.error("❌ Logout API error:", error)
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
