"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import ReactFlow, {
  type Node,
  addEdge,
  type Connection,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
  BackgroundVariant,
} from "reactflow"
import "reactflow/dist/style.css"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Download, Share, BookOpen, Circle, X, ExternalLink } from "lucide-react"
import Link from "next/link"
import { CustomNode } from "./custom-node"

const nodeTypes = {
  customNode: CustomNode,
}

interface RoadmapNode {
  id: string
  type: string
  position: { x: number; y: number }
  data: {
    label: string
    definition: string
    example?: string
    links: {
      w3schools: string
      geeksforgeeks: string
      javatpoint: string
    }
    resources?: {
      title: string
      url: string
      type: string
    }[]
  }
}

interface RoadmapEdge {
  id: string
  source: string
  target: string
  style?: {
    strokeDasharray: string
    stroke: string
    strokeWidth: number
  }
}

interface ReactFlowRoadmapViewerProps {
  roadmap: {
    id?: string
    title: string
    description: string
    nodes: RoadmapNode[]
    edges: RoadmapEdge[]
  }
}

export function ReactFlowRoadmapViewer({ roadmap }: ReactFlowRoadmapViewerProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(roadmap.nodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(roadmap.edges)
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null)
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set())
  const [isLoadingProgress, setIsLoadingProgress] = useState(false)

  // Load existing progress on mount
  useEffect(() => {
    const loadProgress = async () => {
      try {
        if (!roadmap.id) return

        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
        const response = await fetch(`${apiUrl}/progress/${roadmap.id}`, {
          credentials: "include",
        })

        if (response.ok) {
          const result = await response.json()
          if (result.success && result.data?.completedNodes) {
            setCompletedNodes(new Set(result.data.completedNodes))
          }
        }
      } catch (error) {
        console.error("Failed to load progress:", error)
      }
    }

    loadProgress()
  }, [roadmap.id])

  const updateProgress = async (nodeId: string) => {
    try {
      if (!roadmap.id) return

      const newCompletedNodes = new Set(completedNodes)
      if (newCompletedNodes.has(nodeId)) {
        newCompletedNodes.delete(nodeId)
      } else {
        newCompletedNodes.add(nodeId)
      }
      setCompletedNodes(newCompletedNodes)

      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
      const response = await fetch(`${apiUrl}/progress/${roadmap.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          completedNodes: Array.from(newCompletedNodes),
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to update progress")
      }

      return await response.json()
    } catch (error) {
      console.error("Failed to update progress:", error)
      throw error
    }
  }

  const onNodeDoubleClick = useCallback(
    async (event: React.MouseEvent, node: Node) => {
      setIsLoadingProgress(true)

      try {
        // Update backend first
        await updateProgress(node.id)

        // Then update local state
        const newCompletedNodes = new Set(completedNodes)
        if (completedNodes.has(node.id)) {
          newCompletedNodes.delete(node.id)
        } else {
          newCompletedNodes.add(node.id)
        }
        setCompletedNodes(newCompletedNodes)
      } catch (error) {
        console.error("Failed to toggle node completion:", error)
        // You could show a toast notification here
      } finally {
        setIsLoadingProgress(false)
      }
    },
    [completedNodes, roadmap],
  )

  const onConnect = useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node as RoadmapNode)
  }, [])

  const completionPercentage = Math.round((completedNodes.size / roadmap.nodes.length) * 100)

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
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Learning Time
                </Button>
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

        {/* ReactFlow Canvas */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onNodeDoubleClick={onNodeDoubleClick}
            nodeTypes={nodeTypes}
            fitView
            className="bg-gray-50"
          >
            <Controls />
            <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
          </ReactFlow>
        </div>

        {/* Tip */}
        <div className="border-t border-border bg-muted/50 px-4 py-2">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">TIP</span>
            <span>Click a topic to learn more • Double-click to mark as done</span>
          </div>
        </div>
      </div>

      {/* Node Info Panel */}
      {selectedNode && (
        <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-lg z-50 px-6 py-4 overflow-y-auto border-l border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">{selectedNode.data.label}</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedNode(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-6">
            {/* Definition */}
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">What you'll learn</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedNode.data.definition}</p>
            </div>

            {/* Example */}
            {selectedNode.data.example && (
              <div>
                <h3 className="font-semibold mb-2 text-gray-900">Example</h3>
                <p className="text-gray-600 text-sm font-mono bg-gray-100 p-2 rounded">{selectedNode.data.example}</p>
              </div>
            )}

            {/* Free Resources */}
            <div>
              <div className="flex items-center mb-3">
                <Badge className="bg-green-100 text-green-800 mr-2">Free Resources</Badge>
              </div>
              <div className="space-y-2">
                {selectedNode.data.resources?.map((resource, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{resource.title}</div>
                      <div className="text-sm text-gray-600 capitalize">{resource.type}</div>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={resource.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                )) || (
                  // Default resources if none provided
                  <>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">GeeksforGeeks</div>
                        <div className="text-sm text-gray-600">Comprehensive tutorials and examples</div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.geeksforgeeks.org/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">W3Schools</div>
                        <div className="text-sm text-gray-600">Interactive learning with examples</div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.w3schools.com/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div>
                        <div className="font-medium text-gray-900">JavaTpoint</div>
                        <div className="text-sm text-gray-600">Detailed tutorials and concepts</div>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://www.javatpoint.com/" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Learning Tips */}
            <div>
              <h3 className="font-semibold mb-2 text-gray-900">💡 Learning Tips</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>• Start with the basics and build your understanding gradually</p>
                <p>• Practice with hands-on examples and projects</p>
                <p>• Join communities and forums for support</p>
                <p>• Don't rush - take time to understand each concept</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
