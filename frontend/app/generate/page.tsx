"use client"

import { useState } from "react"
import { GenerateForm } from "@/components/generate/generate-form"
import { EnhancedRoadmapViewer } from "@/components/roadmap/enhanced-roadmap-viewer"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function GeneratePage() {
  const [roadmap, setRoadmap] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleRoadmapGenerated = (generatedRoadmap: any) => {
    console.log("Roadmap generated:", generatedRoadmap)
    setRoadmap(generatedRoadmap)
  }

  const handleGeneratingChange = (generating: boolean) => {
    setIsGenerating(generating)
  }

  const handleBackToForm = () => {
    setRoadmap(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        {!roadmap ? (
          <>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Generate Custom Roadmap</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Create a personalized learning roadmap tailored to your goals and experience level using AI.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <GenerateForm
                onRoadmapGenerated={handleRoadmapGenerated}
                onGeneratingChange={handleGeneratingChange}
                isGenerating={isGenerating}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-6">
              <Button variant="outline" onClick={handleBackToForm} className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Generate Another Roadmap</span>
              </Button>
            </div>
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-4">🎉 Your Roadmap is Ready!</h1>
              <p className="text-xl text-muted-foreground">
                Here's your personalized learning path for {roadmap.title}
              </p>
            </div>
            <EnhancedRoadmapViewer roadmap={roadmap} />
          </>
        )}
      </main>
    </div>
  )
}
