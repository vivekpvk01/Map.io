"use client"

import Navbar from "@/components/layout/navbar"
import { RoadmapGrid } from "@/components/home/roadmap-grid"
import { Footer } from "@/components/footer"

export default function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">All Roadmaps</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of learning roadmaps designed to guide your professional development
            journey.
          </p>
        </div>
        <RoadmapGrid />
      </main>
      <Footer />
    </div>
  )
}
