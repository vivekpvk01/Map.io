"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Sparkles, Clock, User, Target, AlertCircle } from "lucide-react"

interface GenerateFormProps {
  onRoadmapGenerated?: (roadmap: any) => void
  onGeneratingChange?: (generating: boolean) => void
  isGenerating?: boolean
  initialGoal?: string
}

export function GenerateForm({
  onRoadmapGenerated,
  onGeneratingChange,
  isGenerating = false,
  initialGoal = "",
}: GenerateFormProps) {
  const [goal, setGoal] = useState(initialGoal)
  const [timeCommitment, setTimeCommitment] = useState("")
  const [priorKnowledge, setPriorKnowledge] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  const [generating, setGenerating] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("🚀 Form submitted!")

    if (!goal.trim()) {
      toast({
        title: "Error",
        description: "Please enter a learning goal",
        variant: "destructive",
      })
      return
    }

    setError("")
    setGenerating(true)
    onGeneratingChange?.(true)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"
      console.log(`📤 Sending request to ${apiUrl}/roadmaps/generate...`)

      const response = await fetch(`${apiUrl}/roadmaps/generate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          goal: goal.trim(),
          experience: priorKnowledge,
          time_commitment: timeCommitment,
          description: description.trim(),
        }),
      })

      console.log("📥 Response status:", response.status)

      let roadmapData;
      try {
        roadmapData = await response.json()
      } catch (e) {
        throw new Error("Failed to parse response")
      }
      console.log("📊 Response data:", roadmapData)

      if (!response.ok) {
        throw new Error(`Server error: ${response.status} - ${roadmapData.error || "Unknown error"}`)
      }

      // Validate the response
      if (!roadmapData || !roadmapData.nodes || !Array.isArray(roadmapData.nodes)) {
        console.warn("Invalid roadmap data received, using fallback")
      }

      toast({
        title: "Success! 🎉",
        description: "Your AI roadmap has been generated!",
      })

      onRoadmapGenerated?.(roadmapData)
    } catch (error) {
      console.error("💥 Generation error:", error)
      const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
      setError(`Generation failed: ${errorMessage}`)

      toast({
        title: "Using Fallback Roadmap",
        description: "AI generation failed, but we've created a basic roadmap for you.",
        variant: "default",
      })

      // Provide a working fallback roadmap with better structure
      const fallbackRoadmap = {
        title: `${goal} Learning Path`,
        description: `A comprehensive learning roadmap to master ${goal}`,
        nodes: [
          {
            id: "foundations",
            position: { x: 250, y: 50 },
            data: {
              label: "Foundations",
              description: `Learn the fundamental concepts of ${goal}`,
              difficulty: "beginner",
              definition: `Core principles and basic concepts you need to understand ${goal}`,
              example: "Basic terminology, key concepts, and foundational knowledge",
              links: {
                w3schools: "https://www.w3schools.com",
                geeksforgeeks: "https://www.geeksforgeeks.com",
                javatpoint: "https://www.javatpoint.com",
              },
              completed: false,
            },
          },
          {
            id: "practical",
            position: { x: 250, y: 200 },
            data: {
              label: "Practical Skills",
              description: `Develop hands-on experience with ${goal}`,
              difficulty: "intermediate",
              definition: `Practical application of concepts through projects and exercises`,
              example: "Building projects, solving problems, and applying knowledge",
              links: {
                w3schools: "https://www.w3schools.com",
                geeksforgeeks: "https://www.geeksforgeeks.com",
                javatpoint: "https://www.javatpoint.com",
              },
              completed: false,
            },
          },
          {
            id: "advanced",
            position: { x: 250, y: 350 },
            data: {
              label: "Advanced Topics",
              description: `Master advanced concepts and best practices in ${goal}`,
              difficulty: "advanced",
              definition: `Advanced techniques, optimization, and professional practices`,
              example: "Complex implementations, performance optimization, and industry standards",
              links: {
                w3schools: "https://www.w3schools.com",
                geeksforgeeks: "https://www.geeksforgeeks.com",
                javatpoint: "https://www.javatpoint.com",
              },
              completed: false,
            },
          },
          {
            id: "specialization",
            position: { x: 250, y: 500 },
            data: {
              label: "Specialization",
              description: `Specialize in specific areas of ${goal}`,
              difficulty: "expert",
              definition: `Deep expertise in specialized areas and cutting-edge techniques`,
              example: "Niche specializations, research, and innovation",
              links: {
                w3schools: "https://www.w3schools.com",
                geeksforgeeks: "https://www.geeksforgeeks.com",
                javatpoint: "https://www.javatpoint.com",
              },
              completed: false,
            },
          },
        ],
        edges: [
          { id: "foundations-practical", source: "foundations", target: "practical", animated: true },
          { id: "practical-advanced", source: "practical", target: "advanced", animated: true },
          { id: "advanced-specialization", source: "advanced", target: "specialization", animated: true },
        ],
      }

      onRoadmapGenerated?.(fallbackRoadmap)
    } finally {
      setGenerating(false)
      onGeneratingChange?.(false)
    }
  }

  const currentlyGenerating = generating || isGenerating

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <span>AI Roadmap Generator</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
            <div className="flex items-center space-x-2 text-destructive">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Generation Error</span>
            </div>
            <p className="text-sm text-destructive/80 mt-1">{error}</p>
            <p className="text-sm text-muted-foreground mt-2">
              Don't worry! We've provided a fallback roadmap to get you started.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="goal" className="flex items-center space-x-2">
              <Target className="h-4 w-4" />
              <span>Learning Goal</span>
            </Label>
            <Input
              id="goal"
              type="text"
              placeholder="e.g., Frontend Developer, Data Scientist, Machine Learning Engineer"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeCommitment" className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>Time Commitment</span>
            </Label>
            <Select value={timeCommitment} onValueChange={setTimeCommitment}>
              <SelectTrigger>
                <SelectValue placeholder="How much time can you dedicate?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-2 hours/week">1-2 hours per week</SelectItem>
                <SelectItem value="3-5 hours/week">3-5 hours per week</SelectItem>
                <SelectItem value="6-10 hours/week">6-10 hours per week</SelectItem>
                <SelectItem value="10+ hours/week">10+ hours per week</SelectItem>
                <SelectItem value="full-time">Full-time learning</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priorKnowledge" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Prior Knowledge Level</span>
            </Label>
            <Select value={priorKnowledge} onValueChange={setPriorKnowledge}>
              <SelectTrigger>
                <SelectValue placeholder="What's your current level?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="complete-beginner">Complete Beginner</SelectItem>
                <SelectItem value="some-basics">Know Some Basics</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Additional Details (Optional)</Label>
            <Textarea
              id="description"
              placeholder="Any specific areas you want to focus on, preferred learning style, or other requirements..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" disabled={currentlyGenerating || !goal.trim()}>
            {currentlyGenerating ? (
              <>
                <Sparkles className="mr-2 h-4 w-4 animate-spin" />
                Generating Your Roadmap...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generate AI Roadmap
              </>
            )}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-medium mb-2">Popular Goals</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Frontend Developer",
              "Backend Developer",
              "Data Scientist",
              "DevOps Engineer",
              "Mobile Developer",
              "AI Engineer",
              "Cybersecurity Expert",
              "Product Manager",
            ].map((popularGoal) => (
              <Badge
                key={popularGoal}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setGoal(popularGoal)}
              >
                {popularGoal}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
