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
      await signOut()

      if (typeof window !== "undefined") {
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith("roadmap-progress-")) {
            localStorage.removeItem(key)
          }
        })
      }

      toast.success("You've been logged out successfully.")

      setTimeout(() => {
        router.push("/login")
      }, 800)
    } catch (error) {
      toast.error("Logout failed. Please try again.")
    }
  }

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 transition-transform duration-200 hover:scale-105"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-blue-700">
            <span className="text-lg font-bold text-white">🌐</span>
          </div>
          <span className="text-xl font-bold tracking-tight hover:text-blue-600 transition-colors duration-200">
            ATLAS
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {[
            { name: "Start Here", href: "/start-here" },
            { name: "Roadmaps", href: "/roadmaps" },
            { name: "Generate", href: "/generate" },
            { name: "Teams", href: "/teams" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-2 py-1 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground

                 before:absolute before:bottom-0 before:right-0
                 before:w-0 before:h-0
                 before:border-b-2 before:border-r-2
                 before:border-transparent
                 before:transition-all before:duration-300

                 after:absolute after:top-0 after:left-0
                 after:w-0 after:h-0
                 after:border-t-2 after:border-l-2
                 after:border-transparent
                 after:transition-all after:duration-300

                 hover:before:w-[10px] hover:before:h-[10px]
                 hover:after:w-[10px] hover:after:h-[10px]
                 hover:before:border-gray-400
                 hover:after:border-gray-400"
            >
              {item.name}
            </Link>
          ))}
        </div>


        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {loading ? (
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200"></div>
              <div className="h-4 w-20 animate-pulse rounded bg-gray-200"></div>
            </div>
          ) : user ? (
            <div className="flex items-center space-x-4">

              {/* User Info */}
              <Link href="/dashboard">
                <div className="flex items-center space-x-2 cursor-pointer rounded-lg px-2 py-1 transition-all duration-200 hover:bg-gray-100 hover:shadow-sm">
                  <Avatar className="h-8 w-8 transition-transform duration-200 hover:scale-105">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="hidden sm:block">
                    <p className="text-sm font-medium transition-colors duration-200 hover:text-blue-600">
                      {user.name || "Demo User"}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Logout */}
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-1 text-muted-foreground transition-all duration-200 hover:text-red-600 hover:bg-red-50"
              >
                <LogOut className="h-4 w-4 transition-transform duration-200 hover:scale-110" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild className="hover:bg-gray-100">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild className="hover:shadow-md transition-all duration-200">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
