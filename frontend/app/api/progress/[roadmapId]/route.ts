import { NextRequest, NextResponse } from 'next/server'
import { dbConnect } from '@/lib/db'
import { requireAuth } from '@/lib/auth'
import { UserProgress } from '@/lib/models/userProgress'
import { updateProgressSchema } from '@/lib/validators/progress'

// GET: Fetch progress for current user/roadmap
export const GET = requireAuth(async (req, { params }, payload) => {
  await dbConnect()
  const progress = await UserProgress.findOne({ userId: payload.id, roadmapId: params.roadmapId })
  if (!progress) return NextResponse.json({ success: true, data: { completedNodes: [] } })
  return NextResponse.json({ success: true, data: progress })
})

// POST: Update progress for a roadmap (overwrite completed nodes)
export const POST = requireAuth(async (req, { params }, payload) => {
  await dbConnect()
  const body = await req.json()
  const parse = updateProgressSchema.safeParse(body)
  if (!parse.success) return NextResponse.json({ success: false, error: parse.error.flatten() }, { status: 400 })
  const result = await UserProgress.findOneAndUpdate(
    { userId: payload.id, roadmapId: params.roadmapId },
    { completedNodes: parse.data.completedNodes, updatedAt: new Date() },
    { new: true, upsert: true }
  )
  return NextResponse.json({ success: true, data: result })
})

