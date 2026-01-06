"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { LogOut, User } from "lucide-react"
import { useAuth } from "@/app/providers/auth-provider"
import { toast } from "sonner"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function Navbar() {
  const router = useRouter()
  const { user, signOut, loading } = useAuth()

  const handleLogout = async () => {
    try {
      console.log("🚪 Starting logout process...")

      // Clear client-side session/auth state
      await signOut()

      // Clear any roadmap progress data from localStorage (non-auth data)
      if (typeof window !== "undefined") {
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith("roadmap-progress-")) {
            localStorage.removeItem(key)
          }
        })
      }

      // Show logout success toast
      toast.success("You've been logged out successfully.")

      // Redirect to signin after a short delay
      setTimeout(() => {
        router.push("/login")
      }, 1000)
    } catch (error) {
      console.error("❌ Logout error:", error)
      toast.error("Logout failed. Please try again.")
    }
  }

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

        {/* Right side: Theme toggle + Auth */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {loading ? (
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
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-1 text-muted-foreground hover:text-red-600"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
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
