import { NextRequest, NextResponse } from 'next/server'

export async function POST(_req: NextRequest) {
  const res = NextResponse.json({ success: true, message: 'Logged out successfully' })
  res.cookies.set('auth-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return res
}
