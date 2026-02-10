"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { useMounted } from "@/hooks/use-mounted"

interface User {
  id: string
  email: string
  name: string
  role?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const mounted = useMounted()

  useEffect(() => {
    if (!mounted) return

    const checkAuth = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
        const response = await fetch(`${apiUrl}/auth/me`, {
          credentials: "include",
        })

        if (response.ok) {
          const result = await response.json()
          if (result.success && result.data) {
            setUser({
              id: result.data._id || result.data.id,
              email: result.data.email,
              name: result.data.name,
              role: result.data.role,
            })
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [mounted])

  const signIn = async (email: string, password: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
    const response = await fetch(`${apiUrl}/auth/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Sign in failed")
    }

    const result = await response.json()
    if (result.success && result.data) {
      setUser({
        id: result.data.id,
        email: result.data.email,
        name: result.data.name,
        role: result.data.role,
      })
    } else {
      throw new Error("Sign in failed")
    }
  }

  const signUp = async (email: string, password: string, name: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
    const response = await fetch(`${apiUrl}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password, name }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || "Sign up failed")
    }

    const result = await response.json()
    if (result.success && result.data) {
      setUser({
        id: result.data.id,
        email: result.data.email,
        name: result.data.name,
        role: result.data.role,
      })
    } else {
      throw new Error("Sign up failed")
    }
  }

  const signOut = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
      await fetch(`${apiUrl}/auth/logout`, {
        method: "POST",
        credentials: "include",
      })
    } catch (error) {
      console.error("Logout API call failed:", error)
    } finally {
      setUser(null)
    }
  }

  // Prevent hydration mismatch by returning children only after client-side hydration
  // However, for AuthContext, we want to provide the context but maybe delay children that depend on it
  // Better to let children render but they will see loading=true initially
  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

