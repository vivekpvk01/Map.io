import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI as string

if (!MONGODB_URI) throw new Error('Please provide a valid MONGODB_URI in your environment variables.')

export async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return
  await mongoose.connect(MONGODB_URI, { dbName: undefined })
}