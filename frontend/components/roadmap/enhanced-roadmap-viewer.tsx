"use client"
import { ExternalLink } from "lucide-react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import { useRef, useState, useCallback, useEffect } from "react"

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
import { ArrowLeft, Download, Share, Circle, X } from "lucide-react"
import Link from "next/link"
import { CustomNode } from "./custom-node"

const nodeTypes = {
  customNode: CustomNode,
}

interface RoadmapNode {
  id: string
  position: { x: number; y: number }
  data: {
    label: string
    description: string
    difficulty: string
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
}

interface EnhancedRoadmapViewerProps {
  roadmap: {
    id?: string
    title: string
    description: string
    nodes: RoadmapNode[]
    edges: RoadmapEdge[]
  }
}

export function EnhancedRoadmapViewer({ roadmap }: EnhancedRoadmapViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [selectedNode, setSelectedNode] = useState<RoadmapNode | null>(null)
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set())

  /* ---------------------------------------------------- */
  /*  FIX 1: Properly format AI nodes for ReactFlow     */
  /* ---------------------------------------------------- */
  useEffect(() => {
    if (!roadmap?.nodes) return

    const formattedNodes = roadmap.nodes.map((n) => ({
      ...n,
      type: "customNode",
    }))

    setNodes(formattedNodes)
    setEdges(roadmap.edges || [])
  }, [roadmap, setNodes, setEdges])

  /* ---------------------------------------------------- */
  /*  Local Progress                                     */
  /* ---------------------------------------------------- */
  useEffect(() => {
    if (!roadmap?.id) return
    const saved = localStorage.getItem(`roadmap-progress-${roadmap.id}`)
    if (saved) {
      const parsed = JSON.parse(saved)
      setCompletedNodes(new Set(parsed.completedNodes || []))
    }
  }, [roadmap?.id])

  useEffect(() => {
    if (!roadmap?.id) return
    localStorage.setItem(
      `roadmap-progress-${roadmap.id}`,
      JSON.stringify({ completedNodes: Array.from(completedNodes) })
    )
  }, [completedNodes, roadmap?.id])

  const onNodeClick = useCallback((_: any, node: Node) => {
    setSelectedNode(node as any)
  }, [])

  const onNodeDoubleClick = useCallback(
    (_: any, node: Node) => {
      const updated = new Set(completedNodes)
      updated.has(node.id) ? updated.delete(node.id) : updated.add(node.id)
      setCompletedNodes(updated)
    },
    [completedNodes]
  )

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  )

  /* ---------------------------------------------------- */
  /*  Share & Download                                   */
  /* ---------------------------------------------------- */
  const handleShare = async () => {
    const url = window.location.href
    if (navigator.share) {
      await navigator.share({
        title: roadmap.title,
        text: roadmap.description,
        url,
      })
    } else {
      await navigator.clipboard.writeText(url)
      alert("Link copied")
    }
  }

  const handleDownloadPDF = async () => {
    if (!containerRef.current) return

    const canvas = await html2canvas(containerRef.current, {
      scale: 2,
      useCORS: true,
    })

    const imgData = canvas.toDataURL("image/png")
    const pdf = new jsPDF("landscape", "mm", "a4")

    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
    pdf.save(`${roadmap.title.replace(/\s+/g, "-")}.pdf`)
  }

  /* ---------------------------------------------------- */
  /*  FIX 2: Safe Progress Calculation                   */
  /* ---------------------------------------------------- */
  const totalNodes = nodes.length
  const completionPercentage =
    totalNodes === 0
      ? 0
      : Math.round((completedNodes.size / totalNodes) * 100)

  return (
    <div className="flex flex-col min-h-screen">

      {/* HEADER */}
      <div className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>

              <div>
                <h1 className="text-2xl font-bold">{roadmap.title}</h1>
                <p className="text-muted-foreground">
                  {roadmap.description}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button size="sm" onClick={handleDownloadPDF}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>

              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <div className="flex justify-end mt-4 space-x-4 items-center">
            <Badge>
              {completionPercentage}% DONE
            </Badge>
            <span className="text-sm text-muted-foreground">
              {completedNodes.size} of {totalNodes}
            </span>
            <Button variant="outline" size="sm">
              <Circle className="h-4 w-4 mr-2" />
              Progress
            </Button>
          </div>
        </div>
      </div>

      {/* FULL WIDTH REACTFLOW */}
      {/* FULL WIDTH REACTFLOW */}
      <div
        className="w-full"
        style={{ height: "calc(100vh - 160px)" }}
        ref={containerRef}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          onNodeDoubleClick={onNodeDoubleClick}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          className="bg-gray-50"
        >
          <Controls />
          <Background variant={BackgroundVariant.Dots} gap={20} size={1} />
        </ReactFlow>
      </div>

      {/* FULL HEIGHT SIDE PANEL */}
      {selectedNode && (
        <div className="fixed top-0 right-0 h-screen w-[420px] bg-background shadow-2xl z-50 overflow-y-auto border-l">
          <div className="p-8">

            {/* Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedNode.data.label}
                </h2>
                <p className="text-muted-foreground mt-2">
                  {selectedNode.data.description}
                </p>
              </div>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedNode(null)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* WHAT YOU'LL LEARN */}
            <div className="mb-8">
              <h3 className="font-semibold text-lg mb-2">
                What you'll learn
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedNode.data.description}
              </p>
            </div>

            {/* FREE RESOURCES BADGE */}
            <div className="mb-6">
              <Badge className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                Free Resources
              </Badge>
            </div>

            {/* RESOURCE LIST STYLE LIKE 2ND IMAGE */}
            <div className="space-y-4 mb-10">

              {/* FREE */}
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <span className="text-sm font-medium">Free Resource</span>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={selectedNode.data.resources?.[0]?.url || "#"}
                    target="_blank"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* PAID */}
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <span className="text-sm font-medium">Paid Course</span>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={selectedNode.data.resources?.[1]?.url || "#"}
                    target="_blank"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* YOUTUBE */}
              <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                <span className="text-sm font-medium">
                  YouTube Playlist / Channel
                </span>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={selectedNode.data.resources?.[2]?.url || "#"}
                    target="_blank"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

            </div>

            {/* LEARNING TIPS */}
            <div>
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                💡 Learning Tips
              </h3>

              <ul className="space-y-3 text-muted-foreground text-sm">
                <li>• Start with the basics and build your understanding gradually</li>
                <li>• Practice with hands-on examples and projects</li>
                <li>• Join communities and forums for support</li>
                <li>• Don't rush — take time to understand each concept</li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}