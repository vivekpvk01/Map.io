import { NextRequest, NextResponse } from 'next/server'
import { verifyJwt } from './jwt'

export function getTokenFromRequest(req: NextRequest) {
  const cookie = req.cookies.get('auth-token')?.value
  if (!cookie) return null
  return cookie
}

export function requireAuth(handler: Function) {
  return async (req: NextRequest, ...rest: any[]) => {
    const token = getTokenFromRequest(req)
    if (!token) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 })
    }
    const payload = verifyJwt(token)
    if (!payload) {
      return NextResponse.json({ success: false, error: 'Invalid or expired token' }, { status: 401 })
    }
    return handler(req, ...rest, payload)
  }
}

export function requireAdmin(handler: Function) {
  return async (req: NextRequest, ...rest: any[]) => {
    const token = getTokenFromRequest(req)
    if (!token) {
      return NextResponse.json({ success: false, error: 'Not authenticated' }, { status: 401 })
    }
    const payload = verifyJwt(token)
    if (!payload || (payload as any).role !== 'admin') {
      return NextResponse.json({ success: false, error: 'Admin role required' }, { status: 403 })
    }
    return handler(req, ...rest, payload)
  }
}