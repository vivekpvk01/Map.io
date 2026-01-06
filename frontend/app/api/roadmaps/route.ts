import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { Roadmap } from '@/lib/models/roadmap'

export async function GET(_req: NextRequest) {
  await dbConnect()
  const roadmaps = await Roadmap.find({}).select('-__v').sort({ isOfficial: -1, createdAt: 1 })
  return NextResponse.json({ success: true, data: roadmaps })
}

