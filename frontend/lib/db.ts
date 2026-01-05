import getClientPromise from "./mongodb"
import type { MongoClient, Db } from "mongodb"

let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null

export async function connectDB(): Promise<Db> {
  if (cachedClient && cachedDb) {
    return cachedDb
  }

  try {
    const client = await getClientPromise()
    const db = client.db("roadmap-app") // You can change this database name

    cachedClient = client
    cachedDb = db

    return db
  } catch (error) {
    console.error("Failed to connect to database:", error)
    throw error
  }
}

export async function getCollection(collectionName: string) {
  const db = await connectDB()
  return db.collection(collectionName)
}
