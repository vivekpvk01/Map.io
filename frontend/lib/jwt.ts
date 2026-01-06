import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET as string
if (!JWT_SECRET) throw new Error('JWT_SECRET must be set')

export function signJwt(payload: object, expiresIn = '7d') {
  return jwt.sign(payload, JWT_SECRET, { expiresIn })
}

export function verifyJwt(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET)
  } catch {
    return null
  }
}
