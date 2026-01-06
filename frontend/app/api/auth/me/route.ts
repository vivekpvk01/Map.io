import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { requireAuth } from '@/lib/auth'
import { User } from '@/lib/models/user'

export const GET = requireAuth(async (req: NextRequest, _res: any, payload: any) => {
  await dbConnect()
  const user = await User.findById(payload.id).select('name email role createdAt')
  if (!user) return NextResponse.json({ success: false, error: 'User not found' }, { status: 404 })
  return NextResponse.json({ success: true, data: user })
})

