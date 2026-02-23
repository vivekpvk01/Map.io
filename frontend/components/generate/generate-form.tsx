"use client"

import type React from "react"
import { useRouter } from "next/navigation"
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
  const router = useRouter()

  const [goal, setGoal] = useState(initialGoal)
  const [timeCommitment, setTimeCommitment] = useState("")
  const [priorKnowledge, setPriorKnowledge] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  const [generating, setGenerating] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

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

      const response = await fetch(`${apiUrl}/roadmaps/generate`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          goal: goal.trim(),
          experience: priorKnowledge,
          time_commitment: timeCommitment,
          description: description.trim(),
        }),
      })

      let roadmapData = await response.json()

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`)
      }

      toast({
        title: "Success! 🎉",
        description: "Your AI roadmap has been generated!",
      })

      onRoadmapGenerated?.(roadmapData)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred"

      setError(`Generation failed: ${errorMessage}`)

      toast({
        title: "Using Fallback Roadmap",
        description:
          "AI generation failed, but we've created a basic roadmap for you.",
      })

      const fallbackRoadmap = {
        title: `${goal} Learning Path`,
        description: `A comprehensive learning roadmap to master ${goal}`,
        nodes: [],
        edges: [],
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
          </div>
        )}

        {/* FORM — UNCHANGED */}
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
            <Label className="flex items-center space-x-2">
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
            <Label className="flex items-center space-x-2">
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
            <Label>Additional Details (Optional)</Label>
            <Textarea
              placeholder="Any specific areas you want to focus on..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full" disabled={currentlyGenerating}>
            {currentlyGenerating ? "Generating..." : "Generate AI Roadmap"}
          </Button>
        </form>

        {/* ✅ ONLY THIS SECTION CHANGED */}
        <div className="mt-6 p-4 bg-muted/50 rounded-lg">
          <h3 className="font-medium mb-2">Popular Goals</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Full Stack Developer", slug: "full-stack" },
              { label: "Frontend Developer", slug: "react" },
              { label: "Backend Developer", slug: "backend" },
              { label: "AI Engineer", slug: "ai-engineer" },
              { label: "Data Scientist", slug: "data-scientist" },
              { label: "Cyber Security", slug: "cyber-security" },
              { label: "DevOps Engineer", slug: "devops" },
              { label: "Android Developer", slug: "android" },
            ].map((goal) => (
              <Badge
                key={goal.slug}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => router.push(`/roadmaps/${goal.slug}`)}
              >
                {goal.label}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}