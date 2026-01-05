import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  retryWrites: true,
  w: "majority" as const,
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

function createMongoClient(): Promise<MongoClient> {
  if (!uri) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
  }

  if (process.env.NODE_ENV === "development") {
    // In development mode, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    const globalWithMongo = global as typeof globalThis & {
      _mongoClientPromise?: Promise<MongoClient>
    }

    if (!globalWithMongo._mongoClientPromise) {
      client = new MongoClient(uri, options)
      globalWithMongo._mongoClientPromise = client.connect().catch((error) => {
        console.error("MongoDB connection failed:", error)
        throw error
      })
    }
    return globalWithMongo._mongoClientPromise
  } else {
    // In production mode, it's best to not use a global variable.
    if (!clientPromise) {
      client = new MongoClient(uri, options)
      clientPromise = client.connect().catch((error) => {
        console.error("MongoDB connection failed:", error)
        throw error
      })
    }
    return clientPromise
  }
}

// Export a function that creates the connection lazily
export default function getClientPromise(): Promise<MongoClient> {
  return createMongoClient()
}

// Named export for backward compatibility
export async function connectMongoDB(): Promise<MongoClient> {
  return getClientPromise()
}
