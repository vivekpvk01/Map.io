import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { User } from '@/lib/models/user'
import { signinSchema } from '@/lib/validators/auth'
import bcrypt from 'bcryptjs'
import { signJwt } from '@/lib/jwt'

export async function POST(req: NextRequest) {
  await dbConnect()
  const body = await req.json()
  const parse = signinSchema.safeParse(body)
  if (!parse.success) {
    return NextResponse.json({ success: false, error: parse.error.flatten() }, { status: 400 })
  }
  const { email, password } = parse.data
  const user = await User.findOne({ email })
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return NextResponse.json({ success: false, error: 'Invalid credentials' }, { status: 401 })
  }
  const token = signJwt({ id: user._id, name: user.name, email: user.email, role: user.role })
  const res = NextResponse.json({ success: true, data: { id: user._id, name: user.name, email: user.email, role: user.role } })
  res.cookies.set('auth-token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
  return res
}
