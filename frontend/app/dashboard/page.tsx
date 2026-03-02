"use client"

import { useEffect, useState } from "react"
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
import { useMounted } from "@/hooks/use-mounted"

interface DashboardData {
  availableRoadmaps: number
  skillsCompleted: number
  overallProgress: number
  recentActivity: any[]
}

export default function DashboardPage() {
  const mounted = useMounted()
  const { user: authUser, loading: authLoading } = useAuth()

  const [loading, setLoading] = useState(true)

  // ✅ Always initialize with safe defaults (no null)
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    availableRoadmaps: 0,
    skillsCompleted: 0,
    overallProgress: 0,
    recentActivity: [],
  })

  useEffect(() => {
    if (!mounted) return
    if (authLoading) return
    if (!authUser) return

    fetchDashboardData()
  }, [authUser, authLoading, mounted])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)

      const apiUrl =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

      const response = await fetch(`${apiUrl}/dashboard`, {
        credentials: "include",
      })

      if (!response.ok) {
        // New users might not have data yet
        return
      }

      const result = await response.json()

      if (result.success && result.data) {
        setDashboardData(result.data)
      }
    } catch (error) {
      console.error("Dashboard fetch error:", error)
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  // ✅ Only depend on authLoading + loading
  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Welcome */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {authUser?.name || "there"}! 👋
          </h2>
          <p className="text-gray-600">
            Ready to continue your learning journey?
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Available Roadmaps
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.availableRoadmaps}
              </div>
              <p className="text-xs text-muted-foreground">
                Official learning paths
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Skills Completed
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.skillsCompleted}
              </div>
              <p className="text-xs text-muted-foreground">
                Fully completed roadmaps
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Overall Progress
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {dashboardData.overallProgress}%
              </div>
              <p className="text-xs text-muted-foreground">
                Across all roadmaps
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Generate New Roadmap
              </CardTitle>
              <CardDescription>
                Create a personalized learning path
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/generate">
                <Button className="w-full">Start Creating</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Explore Roadmaps
              </CardTitle>
              <CardDescription>
                Browse official roadmaps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/roadmaps">
                <Button variant="outline" className="w-full">
                  Explore Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>
              Your latest roadmap interactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {dashboardData.recentActivity.length > 0 ? (
                dashboardData.recentActivity.map((activity: any) => (
                  <Link
                    key={activity._id}
                    href={`/roadmaps/${activity.roadmapId}`}
                  >
                    <div className="flex justify-between items-center p-4 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div>
                        <h4 className="font-medium capitalize">
                          {activity.roadmapId.replace(/-/g, " ")}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Updated on{" "}
                          {new Date(
                            activity.updatedAt
                          ).toLocaleDateString()}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-500 text-center">
                  No recent activity yet.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

      </main>
    </div>
  )
}