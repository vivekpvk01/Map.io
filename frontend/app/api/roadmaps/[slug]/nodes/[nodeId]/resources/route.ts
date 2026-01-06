import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Roadmap } from '@/lib/models/roadmap'
import { RoadmapNode } from '@/lib/models/roadmapNode'

export async function GET(req: NextRequest, { params }: { params: { slug: string, nodeId: string } }) {
  await dbConnect()
  const roadmap = await Roadmap.findOne({ slug: params.slug })
  if (!roadmap) return NextResponse.json({ success: false, error: 'Roadmap not found' }, { status: 404 })
  const node = await RoadmapNode.findOne({ roadmapId: roadmap._id, nodeId: params.nodeId })
  if (!node) return NextResponse.json({ success: false, error: 'Node not found' }, { status: 404 })
  return NextResponse.json({ success: true, data: node.resources || [] })
}

