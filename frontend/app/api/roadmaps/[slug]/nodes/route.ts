import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Roadmap } from '@/lib/models/roadmap'
import { RoadmapNode } from '@/lib/models/roadmapNode'

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  await dbConnect()
  const roadmap = await Roadmap.findOne({ slug: params.slug })
  if (!roadmap) return NextResponse.json({ success: false, error: 'Roadmap not found' }, { status: 404 })
  const nodes = await RoadmapNode.find({ roadmapId: roadmap._id }).select('-__v -roadmapId -_id')
  return NextResponse.json({ success: true, data: nodes })
}

