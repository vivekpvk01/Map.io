import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { requireAdmin } from '@/lib/auth'
import { Roadmap } from '@/lib/models/roadmap'
import { createRoadmapSchema } from '@/lib/validators/roadmap'

export const POST = requireAdmin(async (req: NextRequest) => {
  await dbConnect()
  const body = await req.json()
  const parse = createRoadmapSchema.safeParse(body)
  if (!parse.success) return NextResponse.json({ success: false, error: parse.error.flatten() }, { status: 400 })
  const { slug, title, description, isOfficial } = parse.data
  const existing = await Roadmap.findOne({ slug })
  if (existing) return NextResponse.json({ success: false, error: 'Roadmap slug already exists' }, { status: 400 })
  const roadmap = await Roadmap.create({ slug, title, description, isOfficial })
  return NextResponse.json({ success: true, data: roadmap })
})

