import mongoose from 'mongoose'
import { env } from './env'

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) {
    return
  }

  try {
    await mongoose.connect(env.MONGODB_URI)
    console.log('✅ MongoDB connected')
  } catch (error) {
    console.error('❌ MongoDB connection error:', error)
    throw error
  }
}

