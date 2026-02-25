import jwt, { SignOptions } from "jsonwebtoken"
import { env } from "../config/env"

/* ---------------------------------- */
/* SIGN JWT                           */
/* ---------------------------------- */
export function signJwt(payload: object) {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined")
  }

  const options: SignOptions = {
    expiresIn: "7d",
  }

  return jwt.sign(payload, env.JWT_SECRET, options)
}

/* ---------------------------------- */
/* VERIFY JWT                         */
/* ---------------------------------- */
export function verifyJwt(token: string) {
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined")
  }

  return jwt.verify(token, env.JWT_SECRET)
}