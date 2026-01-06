import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { User } from '@/lib/models/user'
import { signupSchema } from '@/lib/validators/auth'
import bcrypt from 'bcryptjs'
import { signJwt } from '@/lib/jwt'

export async function POST(req: NextRequest) {
  await dbConnect()
  const body = await req.json()
  const parse = signupSchema.safeParse(body)
  if (!parse.success) {
    return NextResponse.json({ success: false, error: parse.error.flatten() }, { status: 400 })
  }
  const { name, email, password } = parse.data
  const existing = await User.findOne({ email })
  if (existing) {
    return NextResponse.json({ success: false, error: 'Email already in use' }, { status: 400 })
  }
  const passwordHash = await bcrypt.hash(password, 12)
  const user = await User.create({ name, email, passwordHash })
  const token = signJwt({ id: user._id, name: user.name, email: user.email, role: user.role })
  const res = NextResponse.json({ success: true, data: { id: user._id, name, email, role: user.role } })
  res.cookies.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return res
}
