import { createApp } from "./app"
import { connectDB } from "./config/db"

async function startServer() {
  try {
    await connectDB()

    const app = createApp()

    const PORT = process.env.PORT || 5000

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Server running on port ${PORT}`)
    })
  } catch (error) {
    console.error("❌ Failed to start server:", error)
    process.exit(1)
  }
}

startServer()