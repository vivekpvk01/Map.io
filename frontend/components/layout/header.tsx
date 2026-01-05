"use client"

import { useRouter } from "next/navigation"
import { LogOut, LayoutDashboard } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/providers/auth-provider"

export default function Header() {
  const router = useRouter()
  const { user, signOut, loading } = useAuth()

  const handleLogout = async () => {
    try {
      console.log("🚪 Logout button clicked")
      await signOut()
      console.log("✅ Logout successful, redirecting...")
      router.push("/login")
    } catch (error) {
      console.error("❌ Logout error:", error)
      // Force logout even if there's an error
      if (typeof window !== "undefined") {
        localStorage.clear()
        document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"
      }
      router.push("/login")
    }
  }

  const handleDashboard = () => {
    console.log("📊 Dashboard button clicked")
    router.push("/dashboard")
  }

  if (loading) {
    return (
      <header className="flex items-center justify-between p-4 bg-white shadow border-b">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">R</span>
          </div>
          <h1 className="text-xl font-semibold">AI Roadmaps</h1>
        </Link>
        <div className="flex items-center gap-4">
          <div className="w-5 h-5 bg-gray-200 animate-pulse rounded"></div>
          <div className="w-5 h-5 bg-gray-200 animate-pulse rounded"></div>
        </div>
      </header>
    )
  }

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow border-b">
      <Link href="/" className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded bg-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <h1 className="text-xl font-semibold">AI Roadmaps</h1>
      </Link>

      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600 hidden sm:block">Welcome, {user.name || user.email}</span>

          <button
            onClick={handleDashboard}
            title="Dashboard"
            className="p-2 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <LayoutDashboard className="w-5 h-5" />
          </button>

          <button
            onClick={handleLogout}
            title="Logout"
            className="p-2 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      )}

      {!user && (
        <div className="flex items-center gap-2">
          <Link href="/login" className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors">
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  )
}
