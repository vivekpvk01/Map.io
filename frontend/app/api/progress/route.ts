import { type NextRequest, NextResponse } from "next/server"
import getClientPromise from "@/lib/mongodb"

export async function GET(request: NextRequest) {
  try {
    const client = await getClientPromise()
    const db = client.db("portfolio")
    const progress = await db.collection("progress").find({}).toArray()

    return NextResponse.json({ progress })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const client = await getClientPromise()
    const db = client.db("portfolio")

    const body = await request.json()

    const progress = await db.collection("progress").insertOne(body)

    return NextResponse.json({ progress })
  } catch (e: any) {
    console.error(e)
    return NextResponse.json({ error: e.message }, { status: 500 })
  }
}
