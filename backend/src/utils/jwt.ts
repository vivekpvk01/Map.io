import jwt from 'jsonwebtoken'
import { env } from '../config/env'

export interface JwtPayload {
  id: string
  email: string
  name: string
  role?: string
}

export function signJwt(payload: Omit<JwtPayload, 'iat' | 'exp'>, expiresIn = '7d'): string {
  return jwt.sign(payload, env.JWT_SECRET, { expiresIn })
}

export function verifyJwt(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, env.JWT_SECRET) as JwtPayload
  } catch {
    return null
  }
}

