"use client"
import Navbar from "@/components/layout/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Star, Clock, TrendingUp } from "lucide-react"

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Teams & Collaboration</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join learning teams, share progress, and achieve your goals together with like-minded professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Frontend Masters
                </CardTitle>
                <Badge variant="secondary">12 members</Badge>
              </div>
              <CardDescription>Learn modern frontend development together</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  4.8
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Active
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Growing
                </div>
              </div>
              <Button className="w-full">Join Team</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Backend Builders
                </CardTitle>
                <Badge variant="secondary">8 members</Badge>
              </div>
              <CardDescription>Master backend development and system design</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  4.9
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Active
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Hot
                </div>
              </div>
              <Button className="w-full">Join Team</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  AI Enthusiasts
                </CardTitle>
                <Badge variant="secondary">15 members</Badge>
              </div>
              <CardDescription>Explore AI, ML, and data science together</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  4.7
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Active
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Trending
                </div>
              </div>
              <Button className="w-full">Join Team</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  DevOps Warriors
                </CardTitle>
                <Badge variant="secondary">6 members</Badge>
              </div>
              <CardDescription>Learn cloud, containers, and automation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  4.6
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Active
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  New
                </div>
              </div>
              <Button className="w-full">Join Team</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Mobile Makers
                </CardTitle>
                <Badge variant="secondary">10 members</Badge>
              </div>
              <CardDescription>Build amazing mobile apps together</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  4.8
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  Active
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  Popular
                </div>
              </div>
              <Button className="w-full">Join Team</Button>
            </CardContent>
          </Card>

          <Card className="border-dashed border-2">
            <CardHeader>
              <CardTitle className="text-center">Create New Team</CardTitle>
              <CardDescription className="text-center">Start your own learning community</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">
                + Create Team
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Why Join a Team?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Learn Together</h3>
              <p className="text-muted-foreground">
                Share knowledge, ask questions, and learn from peers on the same journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Stay Motivated</h3>
              <p className="text-muted-foreground">
                Keep each other accountable and motivated to reach your learning goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Build Network</h3>
              <p className="text-muted-foreground">
                Connect with professionals and build lasting relationships in your field.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
