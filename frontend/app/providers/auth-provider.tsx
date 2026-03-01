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

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

  // 🔥 Always resolve user from backend using token
  const fetchCurrentUser = async () => {
    try {
      const response = await fetch(`${apiUrl}/auth/me`, {
        credentials: "include",
      })

      if (!response.ok) {
        setUser(null)
        return
      }

      const result = await response.json()

      if (result.success && result.data) {
        setUser({
          id: result.data._id || result.data.id,
          email: result.data.email,
          name: result.data.name,
          role: result.data.role,
        })
      } else {
        setUser(null)
      }
    } catch (error) {
      console.error("Auth check failed:", error)
      setUser(null)
    }
  }

  // 🔹 On initial load
  useEffect(() => {
    if (!mounted) return

    const initAuth = async () => {
      await fetchCurrentUser()
      setLoading(false)
    }

    initAuth()
  }, [mounted])

  // 🔐 SIGN IN
  const signIn = async (email: string, password: string) => {
    setLoading(true)   // 🔥 prevent dashboard redirect race

    const loginRes = await fetch(`${apiUrl}/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password,
      }),
    })

    if (!loginRes.ok) {
      setLoading(false)
      const error = await loginRes.json()
      throw new Error(error.error || "Sign in failed")
    }

    await fetchCurrentUser()

    setLoading(false)  // 🔥 now safe
  }

  // 📝 SIGN UP
  const signUp = async (email: string, password: string, name: string) => {
    const signupRes = await fetch(`${apiUrl}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password,
        name,
      }),
    })

    if (!signupRes.ok) {
      const error = await signupRes.json()
      throw new Error(error.error || "Sign up failed")
    }

    // ✅ Always re-fetch correct user
    await fetchCurrentUser()
  }

  // 🚪 SIGN OUT
  const signOut = async () => {
    try {
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

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
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