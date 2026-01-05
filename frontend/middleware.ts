import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  console.log("🛡️ Middleware running for:", request.nextUrl.pathname)

  // Get the pathname of the request (e.g. /, /dashboard, /login)
  const path = request.nextUrl.pathname

  // Define paths that require authentication
  const protectedPaths = ["/dashboard"]

  // Define paths that should redirect to dashboard if user is already authenticated
  const authPaths = ["/login", "/signup"]

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some((protectedPath) => path.startsWith(protectedPath))

  // Check if the path is an auth path
  const isAuthPath = authPaths.includes(path)

  // Get the token from cookies or headers
  const token = request.cookies.get("auth-token")?.value || request.headers.get("authorization")?.replace("Bearer ", "")

  console.log("Path:", path)
  console.log("Is protected:", isProtectedPath)
  console.log("Is auth path:", isAuthPath)
  console.log("Has token:", !!token)

  // If it's a protected path and no token, redirect to login
  if (isProtectedPath && !token) {
    console.log("🚫 Redirecting to login - no token for protected path")
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // If it's an auth path and user has token, redirect to dashboard
  if (isAuthPath && token) {
    console.log("🔄 Redirecting to dashboard - already authenticated")
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  console.log("✅ Allowing request to proceed")
  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
