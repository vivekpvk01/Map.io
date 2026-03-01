import express, { Express } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import routes from './routes'
import { env } from './config/env'

export function createApp(): Express {
  const app = express()

  // Middleware

  app.use(
    cors({
      origin: env.FRONTEND_URL,
      credentials: true,
    }),
  )
  app.use(express.json())
  app.use(cookieParser())

  // Routes
  app.use('/api', routes)

  // Health check
  app.get('/health', (req, res) => {
    res.json({ success: true, message: 'Backend is running' })
  })

  return app
}

