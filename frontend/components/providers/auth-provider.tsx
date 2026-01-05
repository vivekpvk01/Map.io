"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, name: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signInWithGithub: () => Promise<void>
  signOut: () => Promise<void>
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check for existing session
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("auth_token")
        if (token) {
          // Verify token with backend
          const response = await fetch("/api/auth/verify", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })

          if (response.ok) {
            const userData = await response.json()
            setUser(userData)
            console.log("✅ User authenticated:", userData.email)
          } else {
            console.log("❌ Token invalid, clearing...")
            localStorage.removeItem("auth_token")
            localStorage.removeItem("user")
          }
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        localStorage.removeItem("auth_token")
        localStorage.removeItem("user")
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

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

    const { user, token } = await response.json()
    localStorage.setItem("auth_token", token)
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
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

    const { user, token } = await response.json()
    localStorage.setItem("auth_token", token)
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
  }

  const signInWithGoogle = async () => {
    // Mock implementation - in real app, use Firebase or NextAuth
    const mockUser = {
      id: "google-user",
      email: "user@gmail.com",
      name: "Google User",
    }
    localStorage.setItem("auth_token", "mock-google-token")
    localStorage.setItem("user", JSON.stringify(mockUser))
    setUser(mockUser)
  }

  const signInWithGithub = async () => {
    // Mock implementation - in real app, use Firebase or NextAuth
    const mockUser = {
      id: "github-user",
      email: "user@github.com",
      name: "GitHub User",
    }
    localStorage.setItem("auth_token", "mock-github-token")
    localStorage.setItem("user", JSON.stringify(mockUser))
    setUser(mockUser)
  }

  const signOut = async () => {
    console.log("🚪 Starting logout process...")

    // Clear localStorage completely
    if (typeof window !== "undefined") {
      localStorage.clear()
      console.log("🧹 LocalStorage cleared completely")
    }

    // Clear cookies by calling logout API
    try {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      })
      console.log("🍪 Cookies cleared")
    } catch (apiError) {
      console.log("⚠️ API logout failed, but continuing...")
    }

    // Clear user state
    setUser(null)
    console.log("✅ User state cleared")
  }

  const value = {
    user,
    signIn,
    signUp,
    signInWithGoogle,
    signInWithGithub,
    signOut,
    loading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
