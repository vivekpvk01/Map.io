import { ReactFlowRoadmapViewer } from "@/components/roadmap/reactflow-roadmap-viewer"
import { notFound } from "next/navigation"
import { roadmapList } from "@/utils/roadmaps"

interface RoadmapPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getRoadmapData(slug: string) {
  // 1. Check static data first (fastest and reliable for predefined ones)
  const staticRoadmap = roadmapList.find((r) => r.slug === slug)

  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
    const res = await fetch(`${apiUrl}/roadmaps/${slug}`, {
      cache: "no-store",
    })

    if (res.ok) {
      const result = await res.json()
      if (result.success) {
        // Merge static data if available (e.g. description might be better in static)
        return { ...result.data, ...staticRoadmap }
      }
    }
  } catch (e) {
    // API failed, ignore
  }

  // Fallback to static data if API failed or didn't have it
  if (staticRoadmap) {
    return {
      ...staticRoadmap,
      _id: staticRoadmap.slug, // Use slug as ID for static ones
    }
  }

  return null
}

async function getRoadmapNodes(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
    const res = await fetch(`${apiUrl}/roadmaps/${slug}/nodes`, {
      cache: "no-store",
    })
    if (res.ok) {
      const result = await res.json()
      if (result.success && result.data && result.data.length > 0) return result.data
    }
  } catch {
    // API failed
  }

  // Return static nodes if valid slug but no API data
  const staticRoadmap = roadmapList.find((r) => r.slug === slug)
  if (staticRoadmap && staticRoadmap.nodes) {
    return staticRoadmap.nodes
  }

  // Fallback to fake nodes ONLY if no static nodes exist
  if (staticRoadmap) {
    return [
      {
        nodeId: "start",
        title: "Start Logic",
        description: `Begin your journey as a ${staticRoadmap.title}.`,
        difficulty: "beginner",
        position: { x: 0, y: 0 },
        resources: [],
      },
      {
        nodeId: "basics",
        title: "Basics",
        description: "Learn the fundamentals.",
        difficulty: "beginner",
        position: { x: 0, y: 150 },
        resources: [],
      }
    ]
  }

  return []
}

export default async function RoadmapPage({ params }: RoadmapPageProps) {
  const { slug } = await params

  const roadmap = await getRoadmapData(slug)
  if (!roadmap) {
    notFound()
  }

  const nodes = await getRoadmapNodes(slug)

  const roadmapData = {
    id: roadmap._id || roadmap.slug,
    title: roadmap.title,
    description: roadmap.description,
    nodes: nodes.map((node: any) => {
      const nodeData = node.data || {}
      return {
        id: node.nodeId || node.id,
        type: "customNode",
        position: node.position || { x: 200, y: 50 },
        data: {
          label: node.title || node.label || nodeData.label,
          definition: node.description || nodeData.description,
          example: node.example || nodeData.example,
          difficulty: node.difficulty || nodeData.difficulty || "beginner",
          resources: node.resources || nodeData.resources || [],
        },
      }
    }),
    edges: (roadmap.edges || []) as any[],
  }

  // Create simple edges for default nodes if no edges exist and we are using hypothetical nodes
  if (roadmapData.edges.length === 0 && nodes.length > 1 && !roadmap.edges) {
    // Connect sequentially for now as a basic fallback
    for (let i = 0; i < nodes.length - 1; i++) {
      const source = nodes[i].nodeId || nodes[i].id
      const target = nodes[i + 1].nodeId || nodes[i + 1].id
      roadmapData.edges.push({
        id: `e-${source}-${target}`,
        source,
        target,
        style: { stroke: '#64748b', strokeWidth: 2 }
      })
    }
  }

  return <ReactFlowRoadmapViewer roadmap={roadmapData} />
}
