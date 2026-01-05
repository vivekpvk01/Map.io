"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => void
}

const defaultAuthContext: AuthContextType = {
  user: null,
  loading: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: () => {},
}

export const AuthContext = createContext<AuthContextType>(defaultAuthContext)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || typeof window === "undefined") return

    const checkAuth = async () => {
      setLoading(true)
      try {
        const token = localStorage.getItem("token")
        if (token) {
          const response = await fetch("/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (response.ok) {
            const data = await response.json()
            if (data.user) {
              setUser(data.user)
            } else {
              localStorage.removeItem("token")
            }
          } else {
            localStorage.removeItem("token")
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        if (typeof window !== "undefined") {
          localStorage.removeItem("token")
        }
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [mounted])

  const signIn = async (email: string, password: string) => {
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Sign in failed")
    }

    const data = await response.json()
    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token)
    }
    setUser(data.user)
  }

  const signUp = async (email: string, password: string, name: string) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Sign up failed")
    }

    const data = await response.json()
    if (typeof window !== "undefined") {
      localStorage.setItem("token", data.token)
    }
    setUser(data.user)
  }

  const signOut = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("token")
    }
    setUser(null)
  }

  return <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
