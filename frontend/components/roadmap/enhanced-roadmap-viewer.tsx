"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, Download, Share, ExternalLink, CheckCircle2, X } from "lucide-react"
import Link from "next/link"

interface Node {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    label: string
    description: string
    difficulty: string
    highlighted?: boolean
    resources?: Array<{
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

interface EnhancedRoadmapViewerProps {
  roadmap: {
    id?: string
    title: string
    description: string
    nodes: Node[]
    edges: Edge[]
  }
}

export function EnhancedRoadmapViewer({ roadmap }: EnhancedRoadmapViewerProps) {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set())
  const [showResourcePanel, setShowResourcePanel] = useState(false)

  // Load progress from localStorage on mount
  useEffect(() => {
    const savedProgress = localStorage.getItem(`roadmap-progress-${roadmap.id}`)
    if (savedProgress) {
      try {
        const progressData = JSON.parse(savedProgress)
        setCompletedNodes(new Set(progressData.completedNodes || []))
      } catch (error) {
        console.error("Failed to load progress:", error)
      }
    }
  }, [roadmap.id])

  // Save progress to localStorage whenever completedNodes changes
  useEffect(() => {
    const progressData = {
      completedNodes: Array.from(completedNodes),
      lastUpdated: new Date().toISOString(),
    }
    localStorage.setItem(`roadmap-progress-${roadmap.id}`, JSON.stringify(progressData))
  }, [completedNodes, roadmap.id])

  const onNodeClick = useCallback((node: Node) => {
    setSelectedNode(node)
    setShowResourcePanel(true)
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-900">
                <Link href="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500"
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="bg-yellow-400 text-black border-yellow-400 hover:bg-yellow-500"
              >
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{roadmap.title}</h1>
            <p className="text-gray-600 text-lg mb-6">{roadmap.description}</p>
          </div>

          {/* Progress */}
          {/* Progress + Track Button */}
          <div className="flex items-center justify-end space-x-4">
            <Badge className="bg-green-100 text-green-800 font-semibold">
              {completionPercentage}% DONE
            </Badge>

            <span className="text-sm text-gray-600">
              {completedNodes.size} of {roadmap.nodes.length} Done
            </span>

            <Button variant="outline" size="sm" className="text-gray-700">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Track Progress
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content - Full Width Canvas Like Predefined */}
      <div className="w-full h-[1800px] relative bg-[radial-gradient(circle,#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">

        {/* SVG Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8" />
            </marker>
          </defs>

          {roadmap.edges.map((edge) => {
            const sourceNode = roadmap.nodes.find((n) => n.id === edge.source)
            const targetNode = roadmap.nodes.find((n) => n.id === edge.target)

            if (!sourceNode || !targetNode) return null

            const x1 = sourceNode.position.x + 75
            const y1 = sourceNode.position.y + 40
            const x2 = targetNode.position.x + 75
            const y2 = targetNode.position.y

            return (
              <line
                key={edge.id}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#94a3b8"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
            )
          })}
        </svg>

        {/* Nodes */}
        {roadmap.nodes.map((node) => (
          <div
            key={node.id}
            className={`
        absolute cursor-pointer transition-all duration-300 hover:scale-105 z-10
        ${completedNodes.has(node.id)
                ? "bg-white border-2 border-green-500 shadow-md"
                : "bg-white border border-gray-300 hover:border-gray-400"
              }
        rounded-md px-5 py-3 font-medium text-sm text-center min-w-[160px]
      `}
            style={{
              left: node.position.x,
              top: node.position.y,
            }}
            onClick={() => onNodeClick(node)}
            onDoubleClick={() => onNodeDoubleClick(node)}
          >
            <div className="text-gray-900">{node.data.label}</div>
            <div className="text-xs text-gray-500 mt-1">
              {node.data.difficulty}
            </div>
          </div>
        ))}
      </div>

      {/* Resource Panel */}
      {showResourcePanel && selectedNode && (
        <div className="fixed right-0 top-0 h-full w-96 bg-white border-l border-gray-200 shadow-xl z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{selectedNode.data.label}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowResourcePanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <p className="text-gray-600 mb-6">{selectedNode.data.description}</p>

            <div className="space-y-6">
              {/* Free Resources */}
              <div>
                <div className="flex items-center mb-3">
                  <Badge className="bg-green-100 text-green-800 mr-2">🆓 Free Resources</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">FreeCodeCamp</div>
                      <div className="text-sm text-gray-600">Interactive tutorials</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://www.freecodecamp.org" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">MDN Web Docs</div>
                      <div className="text-sm text-gray-600">Official documentation</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <div className="font-medium text-gray-900">YouTube Tutorials</div>
                      <div className="text-sm text-gray-600">Video lessons</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={`https://www.youtube.com/results?search_query=${selectedNode.data.label}+tutorial`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Completion Status */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {completedNodes.has(selectedNode.id) ? "✅ Completed!" : "📚 In Progress"}
                </h3>
                <p className="text-sm text-gray-600">
                  {completedNodes.has(selectedNode.id)
                    ? "Great job! You've marked this topic as complete. Keep up the momentum!"
                    : "Double-click this node to mark it as complete when you're done learning."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
