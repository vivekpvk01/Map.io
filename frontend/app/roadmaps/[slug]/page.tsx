import { ReactFlowRoadmapViewer } from "@/components/roadmap/reactflow-roadmap-viewer"
import { notFound } from "next/navigation"

interface RoadmapPageProps {
  params: {
    slug: string
  }
}

async function getRoadmapData(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
    const res = await fetch(`${apiUrl}/roadmaps/${slug}`, {
      cache: "no-store",
    })
    if (!res.ok) return null
    const result = await res.json()
    return result.success ? result.data : null
  } catch {
    return null
  }
}

async function getRoadmapNodes(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'
    const res = await fetch(`${apiUrl}/roadmaps/${slug}/nodes`, {
      cache: "no-store",
    })
    if (!res.ok) return []
    const result = await res.json()
    return result.success ? result.data : []
  } catch {
    return []
  }
}

export default async function RoadmapPage({ params }: RoadmapPageProps) {
  const { slug } = params

  const roadmap = await getRoadmapData(slug)
  if (!roadmap) {
    notFound()
  }

  const nodes = await getRoadmapNodes(slug)

  const roadmapData = {
    id: roadmap._id || roadmap.slug,
    title: roadmap.title,
    description: roadmap.description,
    nodes: nodes.map((node: any) => ({
      id: node.nodeId,
      type: "customNode",
      position: node.position || { x: 200, y: 50 },
      data: {
        label: node.title,
        description: node.description,
        difficulty: node.difficulty || "beginner",
        resources: node.resources || [],
      },
    })),
    edges: [],
  }

  return <ReactFlowRoadmapViewer roadmap={roadmapData} />
}
