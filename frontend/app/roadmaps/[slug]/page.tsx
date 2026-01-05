import { ReactFlowRoadmapViewer } from "@/components/roadmap/reactflow-roadmap-viewer"
import { roadmapDataMap } from "@/data/roadmap-data"
import { frontendRoadmapData } from "@/data/sample-roadmaps"
import { notFound } from "next/navigation"

interface RoadmapPageProps {
  params: {
    slug: string
  }
}

export default function RoadmapPage({ params }: RoadmapPageProps) {
  const { slug } = params

  // Get the roadmap data based on the slug
  let roadmapData = roadmapDataMap[slug]

  // If it's the frontend roadmap, use the existing detailed data
  if (slug === "frontend") {
    roadmapData = frontendRoadmapData
  }

  // If no roadmap found, return 404
  if (!roadmapData) {
    notFound()
  }

  return <ReactFlowRoadmapViewer roadmap={roadmapData} />
}

// Generate static params for all available roadmaps
export function generateStaticParams() {
  return Object.keys(roadmapDataMap).map((slug) => ({
    slug,
  }))
}
