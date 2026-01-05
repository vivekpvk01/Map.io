"use client"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Zap } from "lucide-react"
import Link from "next/link"
import { useSafeAuth } from "@/hooks/use-safe-auth"

function Navbar() {
  const { user, logout } = useSafeAuth()

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">AI Roadmaps</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/roadmaps" className="text-foreground/80 hover:text-foreground transition-colors">
              Roadmaps
            </Link>
            <Link href="/generate" className="text-foreground/80 hover:text-foreground transition-colors">
              Generate
            </Link>
            <Link href="/start-here" className="text-foreground/80 hover:text-foreground transition-colors">
              Start Here
            </Link>
            <Link href="/teams" className="text-foreground/80 hover:text-foreground transition-colors">
              Teams
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {user ? (
              <div className="flex items-center space-x-4">
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button variant="outline" onClick={logout}>
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link href="/signup">
                  <Button>Sign Up</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
