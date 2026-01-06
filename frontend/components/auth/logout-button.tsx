"use client"

import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { useAuth } from "@/app/providers/auth-provider"

export default function LogoutButton() {
  const router = useRouter()
  const { signOut } = useAuth()

  const handleLogout = async () => {
    try {
      await signOut()
      toast.success("You've been logged out successfully")
      setTimeout(() => {
        router.push("/login")
      }, 1000)
    } catch (error) {
      console.error("Logout error:", error)
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
