import { type NextRequest, NextResponse } from "next/server"
import { dbConnect } from "@/lib/db"
import { requireAuth } from "@/lib/auth"
import { UserProgress } from "@/lib/models/userProgress"

export const GET = requireAuth(async (req: NextRequest, _res: any, payload: any) => {
  try {
    await dbConnect()
    const progress = await UserProgress.find({ userId: payload.id }).select("-__v")
    return NextResponse.json({ success: true, data: progress })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ success: false, error: e.message }, { status: 500 })
  }
})

export const POST = requireAuth(async (req: NextRequest, _res: any, payload: any) => {
  try {
    await dbConnect()
    const body = await req.json()
    const progress = await UserProgress.create({ ...body, userId: payload.id })
    return NextResponse.json({ success: true, data: progress })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ success: false, error: e.message }, { status: 500 })
  }
})
