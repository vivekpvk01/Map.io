"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Calendar,
  Share,
  BookOpen,
  Circle,
  FileDown,
  FileText,
  ZoomIn,
  ZoomOut,
  Maximize,
} from "lucide-react"
import Link from "next/link"
import NodeInfoPanel from "./node-info-panel"
import { exportToPDF, exportToMarkdown, exportToJSON } from "@/lib/export-utils"

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
    highlighted?: boolean
  }
}

interface Edge {
  id: string
  source: string
  target: string
  animated?: boolean
}

interface ProfessionalRoadmapViewerProps {
  roadmap: {
    id?: string
    title: string
    description: string
    nodes: Node[]
    edges: Edge[]
  }
}

export function ProfessionalRoadmapViewer({ roadmap }: ProfessionalRoadmapViewerProps) {
  const [selectedNode, setSelectedNode] = useState<Node | null>(null)
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set())
  const [isExporting, setIsExporting] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [activeTab, setActiveTab] = useState("roadmap")

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

  const getNodeClass = (node: Node, completed: boolean) => {
    let className = "roadmap-node"

    if (completed) {
      className += " completed"
    } else if (node.data.highlighted) {
      className += " highlighted"
    } else {
      className += ` ${node.data.difficulty}`
    }

    return className
  }

  const handleExport = async (format: "pdf" | "markdown" | "json") => {
    setIsExporting(true)
    try {
      switch (format) {
        case "pdf":
          await exportToPDF(roadmap)
          break
        case "markdown":
          exportToMarkdown(roadmap)
          break
        case "json":
          exportToJSON(roadmap)
          break
      }
    } catch (error) {
      console.error("Export failed:", error)
    } finally {
      setIsExporting(false)
    }
  }

  const handleZoomIn = () => {
    setZoom(Math.min(zoom * 1.2, 2))
  }

  const handleZoomOut = () => {
    setZoom(Math.max(zoom / 1.2, 0.5))
  }

  const handleResetZoom = () => {
    setZoom(1)
  }

  // Sample related roadmaps
  const relatedRoadmaps = ["Backend Roadmap", "DevOps Roadmap", "Full Stack Roadmap"]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Professional Header */}
      <div className="roadmap-header-professional">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <Button variant="ghost" size="sm" asChild className="text-gray-600 hover:text-gray-900">
              <Link href="/roadmaps">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Roadmaps
              </Link>
            </Button>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Learning Time
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleExport("pdf")} disabled={isExporting}>
                <FileDown className="h-4 w-4 mr-2" />
                PDF
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleExport("markdown")} disabled={isExporting}>
                <FileText className="h-4 w-4 mr-2" />
                MD
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <h1 className="roadmap-title">{roadmap.title}</h1>
          <p className="roadmap-description">{roadmap.description}</p>

          <div className="roadmap-tabs">
            <div
              className={`roadmap-tab ${activeTab === "roadmap" ? "active" : ""}`}
              onClick={() => setActiveTab("roadmap")}
            >
              <BookOpen className="h-4 w-4 mr-2 inline" />
              Roadmap
            </div>
            <div
              className={`roadmap-tab ${activeTab === "courses" ? "active" : ""}`}
              onClick={() => setActiveTab("courses")}
            >
              Courses
              <Badge variant="secondary" className="ml-2 bg-yellow-100 text-yellow-800 text-xs">
                New
              </Badge>
            </div>
          </div>

          <div className="progress-section">
            <div className="flex items-center space-x-4">
              <span className="progress-badge">{completionPercentage}% DONE</span>
              <span className="text-sm text-gray-600">
                {completedNodes.size} of {roadmap.nodes.length} Done
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-sm text-blue-600 hover:text-blue-800">Suggest Changes</button>
              <button className="track-progress-btn">
                <Circle className="h-4 w-4 mr-2 inline" />
                Track Progress
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="related-roadmaps">
              <h3>Related Roadmaps</h3>
              {relatedRoadmaps.map((roadmap, index) => (
                <div key={index} className="related-roadmap-item">
                  {roadmap}
                </div>
              ))}
            </div>
          </div>

          {/* Main Roadmap Area */}
          <div className="flex-1 relative">
            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 z-10 flex flex-col space-y-2">
              <Button variant="outline" size="sm" onClick={handleZoomIn} className="w-10 h-10 p-0 bg-white shadow-sm">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={handleZoomOut} className="w-10 h-10 p-0 bg-white shadow-sm">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleResetZoom}
                className="w-10 h-10 p-0 bg-white shadow-sm"
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>

            {/* Roadmap Canvas */}
            <div className="bg-white rounded-lg border border-gray-200 min-h-[800px] relative overflow-hidden">
              <div className="absolute inset-0 p-8">
                <div
                  className="relative min-h-full min-w-full transition-transform duration-200 ease-in-out origin-center"
                  style={{ transform: `scale(${zoom})` }}
                >
                  {/* SVG for connections */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                    <defs>
                      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3B82F6" />
                      </marker>
                    </defs>
                    {roadmap.edges.map((edge) => {
                      const sourceNode = roadmap.nodes.find((n) => n.id === edge.source)
                      const targetNode = roadmap.nodes.find((n) => n.id === edge.target)

                      if (!sourceNode || !targetNode) return null

                      const x1 = sourceNode.position.x + 90
                      const y1 = sourceNode.position.y + 40
                      const x2 = targetNode.position.x + 90
                      const y2 = targetNode.position.y

                      return (
                        <line
                          key={edge.id}
                          x1={x1}
                          y1={y1}
                          x2={x2}
                          y2={y2}
                          className="roadmap-connection"
                          markerEnd="url(#arrowhead)"
                        />
                      )
                    })}
                  </svg>

                  {/* Render Nodes */}
                  {roadmap.nodes.map((node) => (
                    <div
                      key={node.id}
                      className={getNodeClass(node, completedNodes.has(node.id))}
                      style={{
                        position: "absolute",
                        left: node.position.x,
                        top: node.position.y,
                        transform: selectedNode?.id === node.id ? "scale(1.05)" : "scale(1)",
                        zIndex: 2,
                      }}
                      onClick={() => onNodeClick(node)}
                      onDoubleClick={() => onNodeDoubleClick(node)}
                    >
                      {node.data.label}
                      {completedNodes.has(node.id) && (
                        <div className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-4 text-center">
              <div className="inline-flex items-center space-x-2 text-sm text-gray-600 bg-blue-50 px-4 py-2 rounded-lg">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-medium">TIP</span>
                <span>Right-click a topic to mark it as done</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="promo-box">
              <h4>Find the detailed version of this roadmap</h4>
              <p>along with other similar roadmaps</p>
              <button className="promo-btn">roadmap.sh</button>
            </div>
          </div>
        </div>
      </div>

      {/* Node Info Panel */}
      {selectedNode && (
        <NodeInfoPanel
          node={selectedNode}
          onClose={() => setSelectedNode(null)}
          isCompleted={completedNodes.has(selectedNode.id)}
          onToggleComplete={() => onNodeDoubleClick(selectedNode)}
        />
      )}
    </div>
  )
}
