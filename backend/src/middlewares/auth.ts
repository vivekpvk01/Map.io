import { Request, Response, NextFunction } from 'express'
import { verifyJwt } from '../utils/jwt'

export interface AuthRequest extends Request {
  user?: {
    id: string
    email: string
    name: string
    role?: string
  }
}

export function requireAuth(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.cookies['auth-token']

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authenticated' })
  }

  const decoded = verifyJwt(token)

  if (typeof decoded === "string") {
    return res.status(401).json({ message: "Invalid token" })
  }

  const payload = decoded as {
    id: string
    email: string
    name: string
    role?: string
  }

  req.user = payload
  next()
}

export function requireAdmin(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.cookies['auth-token']

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authenticated' })
  }

  const decoded = verifyJwt(token)

  if (typeof decoded === "string") {
    return res.status(401).json({ message: "Invalid token" })
  }

  const payload = decoded as {
    id: string
    email: string
    name: string
    role?: string
  }

  req.user = payload
  next()
}

