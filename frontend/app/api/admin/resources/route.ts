import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { requireAdmin } from '@/lib/auth'
import { RoadmapNode } from '@/lib/models/roadmapNode'
import { z } from 'zod'

const resourceSchema = z.object({
  roadmapId: z.string(),
  nodeId: z.string(),
  resource: z.object({
    platform: z.string(),
    label: z.string(),
    url: z.string().url(),
    type: z.enum(['free', 'paid'])
  })
})

export const POST = requireAdmin(async (req: NextRequest) => {
  await dbConnect()
  const body = await req.json()
  const parse = resourceSchema.safeParse(body)
  if (!parse.success) return NextResponse.json({ success: false, error: parse.error.flatten() }, { status: 400 })
  const { roadmapId, nodeId, resource } = parse.data
  const node = await RoadmapNode.findOneAndUpdate(
    { roadmapId, nodeId },
    { $push: { resources: resource } },
    { new: true }
  )
  if (!node) return NextResponse.json({ success: false, error: 'Node not found' }, { status: 404 })
  return NextResponse.json({ success: true, data: node })
})

