"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { X, ExternalLink, CheckCircle2, Circle, BookOpen, Video, FileText } from "lucide-react"

interface Node {
  id: string
  data: {
    label: string
    description: string
    difficulty: string
    resources: Array<{
      title: string
      url: string
      type: string
    }>
  }
}

interface ResourcePanelProps {
  node: Node
  onClose: () => void
  isCompleted: boolean
  onToggleComplete: () => void
}

export function ResourcePanel({ node, onClose, isCompleted, onToggleComplete }: ResourcePanelProps) {
  const getResourceIcon = (type: string) => {
    switch (type) {
      case "Video":
        return <Video className="h-4 w-4" />
      case "Article":
        return <FileText className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500/10 text-green-500 border-green-500/20"
      case "intermediate":
        return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
      case "advanced":
        return "bg-red-500/10 text-red-500 border-red-500/20"
      default:
        return "bg-gray-500/10 text-gray-500 border-gray-500/20"
    }
  }

  return (
    <div className="w-96 border-l border-border bg-background h-full overflow-y-auto">
      <Card className="h-full rounded-none border-0">
        <CardHeader className="border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="text-sm font-medium">Resources</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Node Title and Status */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-bold">{node.data.label}</h2>
              <Button
                variant={isCompleted ? "default" : "outline"}
                size="sm"
                onClick={onToggleComplete}
                className="flex items-center space-x-2"
              >
                {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
                <span>{isCompleted ? "Completed" : "Mark as Done"}</span>
              </Button>
            </div>

            {node.data.difficulty && (
              <Badge variant="outline" className={getDifficultyColor(node.data.difficulty)}>
                {node.data.difficulty.charAt(0).toUpperCase() + node.data.difficulty.slice(1)}
              </Badge>
            )}
          </div>

          <Separator />

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{node.data.description}</p>
          </div>

          <Separator />

          {/* Resources */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">Free Resources</span>
            </div>

            <div className="space-y-3">
              {node.data.resources?.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="text-muted-foreground">{getResourceIcon(resource.type)}</div>
                    <div>
                      <div className="font-medium text-sm">{resource.title}</div>
                      <div className="text-xs text-muted-foreground">{resource.type}</div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Additional Info */}
          <div className="text-xs text-muted-foreground">
            <div className="flex items-center justify-center">
              <span>Help us improve this content</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
