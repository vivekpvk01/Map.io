"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Target, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function StartHerePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Start Your Learning Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            New to learning roadmaps? We'll help you get started with the right path for your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center">
            <CardHeader>
              <BookOpen className="h-12 w-12 mx-auto text-blue-500 mb-4" />
              <CardTitle>Explore Roadmaps</CardTitle>
              <CardDescription>Browse our collection of curated learning paths</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/roadmaps">
                <Button className="w-full">Browse All</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 mx-auto text-green-500 mb-4" />
              <CardTitle>Generate Custom</CardTitle>
              <CardDescription>Create personalized learning paths powered by AI</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/generate">
                <Button className="w-full">Generate Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 mx-auto text-orange-500 mb-4" />
              <CardTitle>Set Goals</CardTitle>
              <CardDescription>Define your learning objectives and timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/dashboard">
                <Button className="w-full">Get Started</Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Users className="h-12 w-12 mx-auto text-purple-500 mb-4" />
              <CardTitle>Join Community</CardTitle>
              <CardDescription>Connect with other learners and share progress</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/teams">
                <Button className="w-full">Join Teams</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Choose Your Path</h3>
              <p className="text-muted-foreground">
                Select from our curated roadmaps or generate a custom one based on your goals.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
              <p className="text-muted-foreground">
                Mark completed topics, save resources, and monitor your learning journey.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Achieve Goals</h3>
              <p className="text-muted-foreground">
                Complete your roadmap and advance your career with new skills and knowledge.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
