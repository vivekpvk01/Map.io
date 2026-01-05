"use client"

import { Hero } from "@/components/home/hero"
import { RoadmapGrid } from "@/components/home/roadmap-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <RoadmapGrid />
      </main>
    </div>
  )
}
