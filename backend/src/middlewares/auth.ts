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

  const payload = verifyJwt(token)
  if (!payload) {
    return res.status(401).json({ success: false, error: 'Invalid or expired token' })
  }

  req.user = payload
  next()
}

export function requireAdmin(req: AuthRequest, res: Response, next: NextFunction) {
  const token = req.cookies['auth-token']

  if (!token) {
    return res.status(401).json({ success: false, error: 'Not authenticated' })
  }

  const payload = verifyJwt(token)
  if (!payload || payload.role !== 'admin') {
    return res.status(403).json({ success: false, error: 'Admin role required' })
  }

  req.user = payload
  next()
}

