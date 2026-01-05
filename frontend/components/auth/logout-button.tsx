"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    try {
      console.log("🚪 Logout button clicked")

      // Clear all localStorage data
      if (typeof window !== "undefined") {
        localStorage.removeItem("auth_token")
        localStorage.removeItem("user")
        localStorage.removeItem("token")

        // Clear any roadmap progress data
        Object.keys(localStorage).forEach((key) => {
          if (key.startsWith("roadmap_progress_")) {
            localStorage.removeItem(key)
          }
        })

        console.log("🧹 LocalStorage cleared")
      }

      // Call logout API to clear cookies
      try {
        await fetch("/api/auth/logout", {
          method: "POST",
          credentials: "include",
        })
        console.log("🍪 API logout called")
      } catch (apiError) {
        console.log("⚠️ API logout failed, but continuing...")
      }

      // Show success toast
      toast.success("You've been logged out successfully")
      console.log("✅ Toast shown")

      // Redirect after delay
      setTimeout(() => {
        console.log("🔄 Redirecting to login...")
        router.push("/login")
      }, 1000)
    } catch (error) {
      console.error("❌ Logout error:", error)
      toast.error("Logout failed. Please try again.")
    }
  }

  return (
    <Button
      onClick={handleLogout}
      variant="ghost"
      size="sm"
      className="flex items-center space-x-1 text-muted-foreground hover:text-red-600"
      title="Logout"
    >
      <LogOut className="h-4 w-4" />
      <span className="hidden sm:inline">Logout</span>
    </Button>
  )
}
