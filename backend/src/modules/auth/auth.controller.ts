import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { User } from '../../models/User'
import { signJwt } from '../../utils/jwt'
import { signupSchema, signinSchema } from '../../utils/validators'
import { env } from '../../config/env'
import type { AuthRequest } from '../../middlewares/auth'
import { sendWelcomeEmail } from '../../utils/email'

export async function signup(req: Request, res: Response) {
  try {
    const parse = signupSchema.safeParse(req.body)
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.flatten() })
    }

    const { name, email, password } = parse.data
    const existing = await User.findOne({ email })
    if (existing) {
      return res.status(400).json({ success: false, error: 'Email already in use' })
    }

    const passwordHash = await bcrypt.hash(password, 12)
    const user = await User.create({ name, email, passwordHash })
    await sendWelcomeEmail(user.email, user.name)
    const token = signJwt({ id: user._id.toString(), name: user.name, email: user.email, role: user.role })

    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      domain: ".getatlas.tech",   // 🔥 VERY IMPORTANT
      maxAge: 60 * 60 * 24 * 7 * 1000,
      path: "/",
    })

    return res.status(201).json({
      success: true,
      data: { id: user._id, name, email, role: user.role },
    })
  } catch (error) {
    console.error('Signup error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function signin(req: Request, res: Response) {
  try {
    const parse = signinSchema.safeParse(req.body)
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.flatten() })
    }

    const { email, password } = parse.data
    const user = await User.findOne({ email })
    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' })
    }

    const token = signJwt({ id: user._id.toString(), name: user.name, email: user.email, role: user.role })

    res.cookie("auth-token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      domain: ".getatlas.tech",   // 🔥 VERY IMPORTANT
      maxAge: 60 * 60 * 24 * 7 * 1000,
      path: "/",
    })
    return res.json({
      success: true,
      data: { id: user._id, name: user.name, email: user.email, role: user.role },
    })
  } catch (error) {
    console.error('Signin error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function logout(req: Request, res: Response) {
  res.clearCookie("auth-token", {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    domain: ".getatlas.tech",
    path: "/",
  })

  return res.json({ success: true, message: 'Logged out successfully' })
}

export async function me(req: Request, res: Response) {
  try {
    const authReq = req as AuthRequest

    if (!authReq.user) {
      return res.status(401).json({ success: false, error: 'Not authenticated' })
    }

    const user = await User.findById(authReq.user.id).select('name email role createdAt')
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' })
    }

    return res.json({ success: true, data: user })
  } catch (error) {
    console.error('Me error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

