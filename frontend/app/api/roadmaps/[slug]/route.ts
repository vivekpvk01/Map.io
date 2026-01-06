import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Roadmap } from '@/lib/models/roadmap'

export async function GET(_req: NextRequest, { params }: { params: { slug: string } }) {
  await dbConnect()
  const roadmap = await Roadmap.findOne({ slug: params.slug }).select('-__v')
  if (!roadmap) return NextResponse.json({ success: false, error: 'Roadmap not found' }, { status: 404 })
  return NextResponse.json({ success: true, data: roadmap })
}

