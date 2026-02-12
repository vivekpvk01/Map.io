"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { EnhancedRoadmapViewer } from "@/components/roadmap/enhanced-roadmap-viewer"
import Link from "next/link"
import { User, BookOpen, Target, TrendingUp, Plus, Eye, LogOut } from "lucide-react"
import { useAuth } from "@/app/providers/auth-provider"
import { useMounted } from "@/hooks/use-mounted"

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [roadmaps, setRoadmaps] = useState<any[]>([])
  const [authChecked, setAuthChecked] = useState(false)
  const router = useRouter()
  const mounted = useMounted()

  const { user: authUser, loading: authLoading, signOut } = useAuth()

  useEffect(() => {
    if (!mounted) return

    if (!authLoading) {
      if (authUser) {
        setUser(authUser)
        setAuthChecked(true)
        fetchData()
      } else {
        router.push("/login")
      }
    }
  }, [authUser, authLoading, router, mounted])

  const fetchData = async () => {
    try {
      setLoading(true)
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"
      const response = await fetch(`${apiUrl}/roadmaps`, {
        credentials: "include",
      })
      if (response.ok) {
        const result = await response.json()
        if (result.success) {
          setRoadmaps(result.data)
        }
      }
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    try {
      await signOut()
      router.push("/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  // Prevent SSR Rendering of loading state to avoid hydration mismatch
  if (!mounted) return null

  // Show loading state ONLY on client
  if (authLoading || (loading && !authChecked)) {
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


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.name || "there"}! 👋</h2>
          <p className="text-gray-600">
            Ready to continue your learning journey? Let's build some amazing skills together.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Roadmaps</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{roadmaps.length}</div>
              <p className="text-xs text-muted-foreground">Official learning paths</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skills Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0</div>
              <p className="text-xs text-muted-foreground">Start learning today!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1 day</div>
              <p className="text-xs text-muted-foreground">Welcome aboard!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">0%</div>
              <p className="text-xs text-muted-foreground">Overall completion</p>
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
              <CardDescription>Create a personalized learning path with AI assistance</CardDescription>
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
                Browse official roadmaps and choose your next goal
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

        {/* Recent Roadmaps */}
        <Card>
          <CardHeader>
            <CardTitle>Your Learning Roadmaps</CardTitle>
            <CardDescription>Continue where you left off</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roadmaps.length > 0 ? (
                roadmaps.slice(0, 3).map((roadmap) => (
                  <div key={roadmap._id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{roadmap.title}</h4>
                        <p className="text-sm text-gray-500">{roadmap.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link href={`/roadmaps/${roadmap.slug}`}>
                        <Button size="sm" variant="outline">
                          Continue Learning
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">No roadmaps available yet.</p>
                  <Link href="/generate">
                    <Button>Create Your First Roadmap</Button>
                  </Link>
                </div>
              )}

              {roadmaps.length > 0 && (
                <div className="text-center py-4 border-t">
                  <Link href="/roadmaps">
                    <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                      View All Roadmaps
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
