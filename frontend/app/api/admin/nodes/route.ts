import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { requireAdmin } from '@/lib/auth'
import { RoadmapNode } from '@/lib/models/roadmapNode'
import { createNodeSchema } from '@/lib/validators/node'

export const POST = requireAdmin(async (req: NextRequest) => {
  await dbConnect()
  const body = await req.json()
  const parse = createNodeSchema.safeParse(body)
  if (!parse.success) return NextResponse.json({ success: false, error: parse.error.flatten() }, { status: 400 })
  const node = await RoadmapNode.create(parse.data)
  return NextResponse.json({ success: true, data: node })
})

