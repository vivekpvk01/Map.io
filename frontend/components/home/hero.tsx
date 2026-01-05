"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Link from "next/link"
import { SearchBar } from "@/components/search/search-bar"

export function Hero() {
  return (
    <section className="py-20 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          Developer Roadmaps
        </h1>

        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          roadmap.sh is a community effort to create roadmaps, guides and other educational content to help guide
          developers in picking up a path and guide their learnings.
        </p>

        {/* Hero Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <SearchBar
            placeholder="Search any roadmap (e.g., Frontend, DevOps, AI Engineer)"
            className="w-full"
            showButton={true}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" asChild>
            <Link href="/generate">
              <Sparkles className="mr-2 h-5 w-5" />
              Generate New Roadmap with AI
            </Link>
          </Button>

          <Button variant="outline" size="lg" asChild>
            <Link href="/roadmaps">Browse All Roadmaps</Link>
          </Button>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-8 text-primary">Role-based Roadmaps</h2>
        </div>
      </div>
    </section>
  )
}

// Also export as default for compatibility
export default Hero
