"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Target,
  TrendingUp,
  Plus,
  Eye,
  ArrowRight,
} from "lucide-react"
import { useAuth } from "@/app/providers/auth-provider"

interface DashboardData {
  availableRoadmaps: number
  skillsCompleted: number
  overallProgress: number
  recentActivity: any[]
}

export default function DashboardPage() {
  const router = useRouter()
  const { user, loading: authLoading } = useAuth()

  const [loading, setLoading] = useState(true)
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    availableRoadmaps: 0,
    skillsCompleted: 0,
    overallProgress: 0,
    recentActivity: [],
  })

  useEffect(() => {
    if (authLoading) return

    if (!user) {
      router.replace("/login")
      return
    }

    fetchDashboard()
  }, [user, authLoading])

  const fetchDashboard = async () => {
    try {
      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

      const response = await fetch(`${apiUrl}/dashboard`, {
        credentials: "include",
      })

      if (response.ok) {
        const result = await response.json()
        if (result.success && result.data) {
          setDashboardData(result.data)
        }
      }
    } catch (err) {
      console.error("Dashboard fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-6 py-8">

        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Welcome back, {user?.name}! 👋
          </h2>
          <p className="text-gray-600">
            Ready to continue your learning journey?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <Card>
            <CardHeader>
              <CardTitle>Available Roadmaps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.availableRoadmaps}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skills Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.skillsCompleted}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Overall Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.overallProgress}%
              </div>
            </CardContent>
          </Card>

        </div>
      </main>
    </div>
  )
}