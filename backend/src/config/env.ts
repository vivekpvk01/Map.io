import dotenv from "dotenv"

dotenv.config()

export const env = {
  MONGODB_URI: process.env.MONGODB_URI as string,
  JWT_SECRET: process.env.JWT_SECRET as string,

  // 🔹 Gemini
  GEMINI_API_KEY: process.env.GEMINI_API_KEY as string,

  NODE_ENV: process.env.NODE_ENV || "development",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:3000",
  PORT: parseInt(process.env.PORT || "5000", 10),
}

// Validate required environment variables
if (!env.MONGODB_URI) {
  throw new Error("MONGODB_URI is required")
}

if (!env.JWT_SECRET) {
  throw new Error("JWT_SECRET is required")
}

if (!env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is required")
}