import { createApp } from './app'
import { connectDB } from './config/db'
import { env } from './config/env'

async function startServer() {
  try {
    // Connect to database
    await connectDB()

    // Create Express app
    const app = createApp()

    // Start server
    app.listen(env.PORT, () => {
      console.log(`🚀 Backend server running on http://localhost:${env.PORT}`)
      console.log(`📡 API available at http://localhost:${env.PORT}/api`)
    })
  } catch (error) {
    console.error('❌ Failed to start server:', error)
    process.exit(1)
  }
}

startServer()

