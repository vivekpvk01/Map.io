"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { User } from "lucide-react"
import LogoutButton from "@/components/auth/logout-button"

interface ClientUser {
  id: string
  email: string
  name: string
}

export default function ClientNavbar() {
  const [mounted, setMounted] = useState(false)
  const [user, setUser] = useState<ClientUser | null>(null)

  useEffect(() => {
    setMounted(true)

    // Check for user in localStorage
    const checkUser = () => {
      try {
        const token = localStorage.getItem("auth_token")
        const userData = localStorage.getItem("user")

        if (token && userData) {
          const parsedUser = JSON.parse(userData)
          setUser(parsedUser)
          console.log("👤 User found:", parsedUser.email)
        } else {
          setUser(null)
          console.log("👤 No user found")
        }
      } catch (error) {
        console.error("Error checking user:", error)
        setUser(null)
      }
    }

    checkUser()

    // Listen for storage changes (logout from other tabs)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "auth_token" || e.key === "user") {
        checkUser()
      }
    }

    window.addEventListener("storage", handleStorageChange)

    // Also listen for manual storage updates
    const handleCustomEvent = () => {
      checkUser()
    }

    window.addEventListener("auth-change", handleCustomEvent)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("auth-change", handleCustomEvent)
    }
  }, [])

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600">
            <span className="text-lg font-bold text-white">⚡</span>
          </div>
          <span className="text-xl font-bold">AI Roadmaps</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/roadmaps" className="text-sm font-medium transition-colors hover:text-primary">
            Roadmaps
          </Link>
          <Link href="/generate" className="text-sm font-medium transition-colors hover:text-primary">
            Generate
          </Link>
          <Link href="/start-here" className="text-sm font-medium transition-colors hover:text-primary">
            Start Here
          </Link>
          <Link href="/teams" className="text-sm font-medium transition-colors hover:text-primary">
            Teams
          </Link>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-4">
          {!mounted ? (
            // Loading state during hydration
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
            </div>
          ) : user ? (
            <div className="flex items-center space-x-3">
              {/* User Info */}
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-blue-100 text-blue-600">
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="hidden sm:block">
                  <p className="text-sm font-medium">{user.name || "Demo User"}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>

              {/* Logout Button */}
              <LogoutButton />
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
