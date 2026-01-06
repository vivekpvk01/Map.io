import { NextResponse, type NextRequest } from 'next/server'

const protectedPaths = ['/dashboard']
const authPaths = ['/login', '/signup']

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // AUTH PROTECTION for frontend routes only
  // Backend API handles its own auth
  const isProtected = protectedPaths.some(prefix => path.startsWith(prefix))
  const isAuthPath = authPaths.includes(path)

  if (isProtected) {
    const token = request.cookies.get('auth-token')?.value
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Redirect authenticated users away from auth pages
  if (isAuthPath) {
    const token = request.cookies.get('auth-token')?.value
    if (token) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/signup'],
}
