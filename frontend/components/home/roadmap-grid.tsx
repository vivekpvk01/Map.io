"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Code,
  Server,
  Cloud,
  Layers,
  Brain,
  BarChart3,
  Smartphone,
  Database,
  Shield,
  Palette,
  GamepadIcon,
  FileText,
  Users,
  Briefcase,
  GitBranch,
  Sparkles,
} from "lucide-react"

const roadmaps = [
  {
    title: "Frontend",
    icon: Code,
    description: "Step by step guide to becoming a modern frontend developer",
    difficulty: "Beginner",
    slug: "frontend",
    type: "official",
  },
  {
    title: "Backend",
    icon: Server,
    description: "Step by step guide to becoming a modern backend developer",
    difficulty: "Intermediate",
    slug: "backend",
    type: "official",
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Step by step guide to becoming a DevOps engineer",
    difficulty: "Advanced",
    slug: "devops",
    type: "official",
  },
  {
    title: "Full Stack",
    icon: Layers,
    description: "Step by step guide to becoming a full stack developer",
    difficulty: "Intermediate",
    slug: "full-stack",
    type: "official",
  },
  {
    title: "AI Engineer",
    icon: Brain,
    description: "Step by step guide to becoming an AI engineer",
    difficulty: "Advanced",
    slug: "ai-engineer",
    type: "official",
    isNew: true,
  },
  {
    title: "Data Analyst",
    icon: BarChart3,
    description: "Step by step guide to becoming a data analyst",
    difficulty: "Beginner",
    slug: "data-analyst",
    type: "official",
  },
  {
    title: "AI and Data Scientist",
    icon: Brain,
    description: "Step by step guide to becoming an AI and data scientist",
    difficulty: "Advanced",
    slug: "ai-data-scientist",
    type: "official",
  },
  {
    title: "Android",
    icon: Smartphone,
    description: "Step by step guide to becoming an Android developer",
    difficulty: "Intermediate",
    slug: "android",
    type: "official",
  },
  {
    title: "iOS",
    icon: Smartphone,
    description: "Step by step guide to becoming an iOS developer",
    difficulty: "Intermediate",
    slug: "ios",
    type: "official",
  },
  {
    title: "PostgreSQL",
    icon: Database,
    description: "Step by step guide to learning PostgreSQL",
    difficulty: "Intermediate",
    slug: "postgresql",
    type: "official",
  },
  {
    title: "Blockchain",
    icon: GitBranch,
    description: "Step by step guide to becoming a blockchain developer",
    difficulty: "Advanced",
    slug: "blockchain",
    type: "official",
  },
  {
    title: "QA",
    icon: Shield,
    description: "Step by step guide to becoming a QA engineer",
    difficulty: "Beginner",
    slug: "qa",
    type: "official",
  },
  {
    title: "Software Architect",
    icon: Layers,
    description: "Step by step guide to becoming a software architect",
    difficulty: "Advanced",
    slug: "software-architect",
    type: "official",
  },
  {
    title: "Cyber Security",
    icon: Shield,
    description: "Step by step guide to becoming a cyber security expert",
    difficulty: "Advanced",
    slug: "cyber-security",
    type: "official",
  },
  {
    title: "UX Design",
    icon: Palette,
    description: "Step by step guide to becoming a UX designer",
    difficulty: "Beginner",
    slug: "ux-design",
    type: "official",
  },
  {
    title: "Game Developer",
    icon: GamepadIcon,
    description: "Step by step guide to becoming a game developer",
    difficulty: "Intermediate",
    slug: "game-developer",
    type: "official",
  },
  {
    title: "Technical Writer",
    icon: FileText,
    description: "Step by step guide to becoming a technical writer",
    difficulty: "Beginner",
    slug: "technical-writer",
    type: "official",
  },
  {
    title: "MLOps",
    icon: Brain,
    description: "Step by step guide to becoming an MLOps engineer",
    difficulty: "Advanced",
    slug: "mlops",
    type: "official",
  },
  {
    title: "Product Manager",
    icon: Briefcase,
    description: "Step by step guide to becoming a product manager",
    difficulty: "Intermediate",
    slug: "product-manager",
    type: "official",
  },
  {
    title: "Engineering Manager",
    icon: Users,
    description: "Step by step guide to becoming an engineering manager",
    difficulty: "Advanced",
    slug: "engineering-manager",
    type: "official",
  },
  {
    title: "Developer Relations",
    icon: Users,
    description: "Step by step guide to becoming a developer relations professional",
    difficulty: "Intermediate",
    slug: "developer-relations",
    type: "official",
  },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-500/10 text-green-400 border-green-500/20"
    case "Intermediate":
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
    case "Advanced":
      return "bg-red-500/10 text-red-400 border-red-500/20"
    default:
      return "bg-gray-500/10 text-gray-400 border-gray-500/20"
  }
}

export function RoadmapGrid() {
  return (
    <section className="py-16 px-4 bg-[#0d1117]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmaps.map((roadmap) => {
            const Icon = roadmap.icon
            return (
              <Link key={roadmap.slug} href={`/roadmaps/${roadmap.slug}`}>
                <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-105 roadmap-card group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                          <Icon className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg flex items-center gap-2 text-gray-200">
                            {roadmap.title}
                            {roadmap.isNew && (
                              <Badge
                                variant="secondary"
                                className="text-xs bg-blue-500/10 text-blue-400 border-blue-500/20"
                              >
                                <Sparkles className="h-3 w-3 mr-1" />
                                New
                              </Badge>
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{roadmap.description}</p>

                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className={getDifficultyColor(roadmap.difficulty)}>
                        {roadmap.difficulty}
                      </Badge>

                      <div className="text-xs text-gray-500">
                        {roadmap.type === "official" ? "Official" : "Community"}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}

          {/* Create Custom Roadmap Card */}
          <Link href="/generate">
            <Card className="h-full hover:shadow-lg transition-all duration-200 hover:scale-105 border-2 border-dashed border-blue-500/50 hover:border-blue-500 group roadmap-card">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="p-4 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors mb-4">
                  <Sparkles className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-200">Create your own Roadmap</h3>
                <p className="text-gray-400 text-sm">Generate a personalized learning roadmap with AI</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </section>
  )
}
