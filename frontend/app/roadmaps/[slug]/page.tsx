import { ReactFlowRoadmapViewer } from "@/components/roadmap/reactflow-roadmap-viewer"
import { notFound } from "next/navigation"

interface RoadmapPageProps {
  params: Promise<{
    slug: string
  }>
}

async function getRoadmapData(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

    const res = await fetch(`${apiUrl}/roadmaps/${slug}`, {
      cache: "no-store",
    })

    if (!res.ok) return null

    const result = await res.json()

    if (!result.success) return null

    return result.data
  } catch {
    return null
  }
}

async function getRoadmapNodes(slug: string) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

    const res = await fetch(`${apiUrl}/roadmaps/${slug}/nodes`, {
      cache: "no-store",
    })

    if (!res.ok) return []

    const result = await res.json()

    if (!result.success) return []

    return result.data
  } catch {
    return []
  }
}

export default async function RoadmapPage({ params }: RoadmapPageProps) {
  const { slug } = await params

  const roadmap = await getRoadmapData(slug)
  if (!roadmap) {
    notFound()
  }

  const nodes = await getRoadmapNodes(slug)
  if (!nodes || nodes.length === 0) {
    notFound()
  }

  const roadmapData = {
    id: roadmap.id,
    title: roadmap.title,
    description: roadmap.description,
    nodes: nodes.map((node: any) => ({
      id: node.id,
      type: "customNode",
      position: node.position,
      data: {
        label: node.data?.label,
        definition: node.data?.description,
        example: node.data?.example,
        difficulty: node.data?.difficulty || "beginner",
        resources: node.data?.resources || [],
      },
    })),
    edges: roadmap.edges || [],
  }

  return <ReactFlowRoadmapViewer roadmap={roadmapData} />
}
