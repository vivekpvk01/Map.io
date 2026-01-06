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

// Sample roadmap data matching the structure in the images
const sampleRoadmap = {
  id: "frontend-fundamentals",
  title: "Frontend Development Fundamentals",
  description: "Master the core concepts of modern frontend development",
  nodes: [
    {
      id: "fundamentals",
      type: "default",
      position: { x: 200, y: 50 },
      data: {
        label: "Fundamentals",
        description: "Learn the basic building blocks of web development",
        difficulty: "beginner",
      },
    },
    {
      id: "core-concepts",
      type: "default",
      position: { x: 200, y: 180 },
      data: {
        label: "Core Concepts",
        description: "Understand essential programming concepts",
        difficulty: "beginner",
      },
    },
    {
      id: "html-basics",
      type: "default",
      position: { x: 200, y: 310 },
      data: {
        label: "HTML Basics",
        description: "Structure web content with HTML",
        difficulty: "beginner",
      },
    },
    {
      id: "css-styling",
      type: "default",
      position: { x: 200, y: 440 },
      data: {
        label: "CSS Styling",
        description: "Style and layout with CSS",
        difficulty: "beginner",
      },
    },
    {
      id: "javascript-fundamentals",
      type: "default",
      position: { x: 200, y: 570 },
      data: {
        label: "JavaScript Fundamentals",
        description: "Add interactivity with JavaScript",
        difficulty: "intermediate",
      },
    },
  ],
  edges: [
    { id: "fundamentals-core", source: "fundamentals", target: "core-concepts" },
    { id: "core-html", source: "core-concepts", target: "html-basics" },
    { id: "html-css", source: "html-basics", target: "css-styling" },
    { id: "css-js", source: "css-styling", target: "javascript-fundamentals" },
  ],
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showRoadmap, setShowRoadmap] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)
  const router = useRouter()

  const { user: authUser, loading: authLoading, signOut } = useAuth()

  useEffect(() => {
    if (!authLoading) {
      if (authUser) {
        setUser(authUser)
        setAuthChecked(true)
        setLoading(false)
      } else {
        router.push("/login")
      }
    }
  }, [authUser, authLoading, router])

  const handleLogout = async () => {
    await signOut()

    // Clear cookies
    document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT"

    // Redirect to login
    router.push("/login")
  }

  // Show loading state
  if (loading || !authChecked) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  // Show roadmap if requested
  if (showRoadmap) {
    return <EnhancedRoadmapViewer roadmap={sampleRoadmap} />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">AI Roadmaps</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-lg">
                <User className="w-4 h-4 text-gray-500" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{user?.name || "User"}</div>
                  <div className="text-gray-500 text-xs">{user?.email}</div>
                </div>
              </div>
              <p className="text-sm italic text-gray-500"></p>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

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
              <CardTitle className="text-sm font-medium">Roadmaps Created</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">+1 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Skills Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+4 from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7 days</div>
              <p className="text-xs text-muted-foreground">Keep it up!</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Progress</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">68%</div>
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
                View Interactive Roadmap
              </CardTitle>
              <CardDescription>
                Explore your learning path with progress tracking and green completion borders
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full" onClick={() => setShowRoadmap(true)}>
                View Roadmap
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Roadmaps */}
        <Card>
          <CardHeader>
            <CardTitle>Your Learning Roadmaps</CardTitle>
            <CardDescription>Continue where you left off - completed nodes show green borders</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Frontend Development Fundamentals</h4>
                    <p className="text-sm text-gray-500">HTML, CSS, JavaScript basics with visual progress</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    75% Complete
                  </Badge>
                  <Button size="sm" variant="outline" onClick={() => setShowRoadmap(true)}>
                    Continue Learning
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Python Developer Path</h4>
                    <p className="text-sm text-gray-500">Python, Django, APIs with completion tracking</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    45% Complete
                  </Badge>
                  <Button size="sm" variant="outline">
                    Continue Learning
                  </Button>
                </div>
              </div>

              <div className="text-center py-4 border-t">
                <Link href="/generate">
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Roadmap
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
