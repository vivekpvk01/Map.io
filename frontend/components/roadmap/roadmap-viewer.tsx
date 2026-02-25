"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Download, Share, BookOpen, Circle } from "lucide-react"
import Link from "next/link"
import { ResourcePanel } from "./resource-panel"

interface Node {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    label: string
    description: string
    difficulty: string
    resources: Array<{
      title: string
      url: string
      type: string
    }>
    completed?: boolean
  }
}

interface Edge {
  id: string
  source: string
  target: string
  animated?: boolean
}

interface RoadmapViewerProps {
  roadmap: {
    id?: string
    title: string
    description: string
    nodes: Node[]
    edges: Edge[]
  }
}

export function RoadmapViewer({ roadmap }: RoadmapViewerProps) {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set())

  const onNodeClick = useCallback((node: Node) => {
    setSelectedNode(node)
  }, [])

  const onNodeDoubleClick = useCallback(
    (node: Node) => {
      const newCompletedNodes = new Set(completedNodes)
      if (completedNodes.has(node.id)) {
        newCompletedNodes.delete(node.id)
      } else {
        newCompletedNodes.add(node.id)
      }
      setCompletedNodes(newCompletedNodes)
    },
    [completedNodes],
  )

  const completionPercentage = Math.round((completedNodes.size / roadmap.nodes.length) * 100)

  const getDifficultyClass = (difficulty: string, completed: boolean) => {
    const baseClass =
      "roadmap-node cursor-pointer transition-all duration-200 hover:scale-105 rounded-xl shadow-md font-semibold text-sm min-w-[120px] text-center px-4 py-3"

    if (completed) {
      return `${baseClass} bg-green-500 text-white border-2 border-green-600`
    }

    return `${baseClass} bg-[#FFEA8A] text-gray-800 border-2 border-gray-300 hover:border-primary hover:shadow-lg`
  }

  return (
    <div className="flex h-screen">
      {/* Main Roadmap Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/roadmaps">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    All Roadmaps
                  </Link>
                </Button>

                <div>
                  <h1 className="text-2xl font-bold">{roadmap.title}</h1>
                  <p className="text-muted-foreground">{roadmap.description}</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="text-sm font-medium">Roadmap</span>
                </div>
                <Badge variant="secondary">Official</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-sm text-muted-foreground">Suggest Changes</div>
                <div className="flex items-center space-x-2">
                  <Badge variant={completedNodes.size === 0 ? "secondary" : "default"}>
                    {completionPercentage}% DONE
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {completedNodes.size} of {roadmap.nodes.length} Done
                  </span>
                  <Button variant="outline" size="sm">
                    <Circle className="h-4 w-4 mr-2" />
                    Track Progress
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Roadmap Visualization */}
        <div className="flex-1 relative overflow-auto bg-[#0E1525] dark:bg-[#0E1525]">
          <div className="absolute inset-0 p-8">
            <div className="relative min-h-full min-w-full">
              {/* SVG for connections */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                {roadmap.edges.map((edge) => {
                  const sourceNode = roadmap.nodes.find((n) => n.id === edge.source)
                  const targetNode = roadmap.nodes.find((n) => n.id === edge.target)

                  if (!sourceNode || !targetNode) return null

                  const x1 = sourceNode.position.x + 60 // Center of node
                  const y1 = sourceNode.position.y + 25
                  const x2 = targetNode.position.x + 60
                  const y2 = targetNode.position.y + 25

                  return (
                    <line
                      key={edge.id}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#6B7280"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      className={edge.animated ? "animate-pulse" : ""}
                    />
                  )
                })}
              </svg>

              {/* Render Nodes */}
              {roadmap.nodes.map((node) => (
                <div
                  key={node.id}
                  className={getDifficultyClass(node.data.difficulty, completedNodes.has(node.id))}
                  style={{
                    position: "absolute",
                    left: node.position.x,
                    top: node.position.y,
                    transform: selectedNode?.id === node.id ? "scale(1.1)" : "scale(1)",
                    zIndex: 2,
                  }}
                  onClick={() => onNodeClick(node)}
                  onDoubleClick={() => onNodeDoubleClick(node)}
                >
                  {node.data.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tip */}
        <div className="border-t border-border bg-muted/50 px-4 py-2">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">TIP</span>
            <span>Double-click a topic to mark it as done</span>
          </div>
        </div>
      </div>

      {/* Resource Panel */}
      {selectedNode && (
        <ResourcePanel
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          isCompleted={completedNodes.has(selectedNode.id)}
          onToggleComplete={() => onNodeDoubleClick(selectedNode)}
        />
      )}
    </div>
  )
}
