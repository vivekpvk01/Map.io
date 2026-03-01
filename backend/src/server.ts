import { createApp } from "./app"
import { connectDB } from "./config/db"
import { env } from "./config/env"

async function startServer() {
  try {
    await connectDB()

    const app = createApp()

    const port = process.env.PORT || env.PORT || 5000

    app.listen(port, () => {
      console.log(`🚀 Server running on port ${port}`)
      console.log(`📡 API available at /api`)
    })
  } catch (error) {
    console.error("❌ Failed to start server:", error)
    process.exit(1)
  }
}

startServer()