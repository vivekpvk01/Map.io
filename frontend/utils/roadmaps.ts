export interface Roadmap {
  title: string
  slug: string
  description: string
  difficulty: string
  type: string
}

export const roadmapList: Roadmap[] = [
  {
    title: "Frontend Developer",
    slug: "frontend",
    description: "Step by step guide to becoming a modern frontend developer",
    difficulty: "Beginner",
    type: "official",
  },
  {
    title: "Backend Developer",
    slug: "backend",
    description: "Step by step guide to becoming a modern backend developer",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "DevOps Engineer",
    slug: "devops",
    description: "Step by step guide to becoming a DevOps engineer",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "Full Stack Developer",
    slug: "full-stack",
    description: "Step by step guide to becoming a full stack developer",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "AI Engineer",
    slug: "ai-engineer",
    description: "Step by step guide to becoming an AI engineer",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "Data Scientist",
    slug: "ai-data-scientist",
    description: "Step by step guide to becoming a data scientist",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "Data Analyst",
    slug: "data-analyst",
    description: "Step by step guide to becoming a data analyst",
    difficulty: "Beginner",
    type: "official",
  },
  {
    title: "Android Developer",
    slug: "android",
    description: "Step by step guide to becoming an Android developer",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "iOS Developer",
    slug: "ios",
    description: "Step by step guide to becoming an iOS developer",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Blockchain Developer",
    slug: "blockchain",
    description: "Step by step guide to becoming a blockchain developer",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "QA Engineer",
    slug: "qa",
    description: "Step by step guide to becoming a QA engineer",
    difficulty: "Beginner",
    type: "official",
  },
  {
    title: "PostgreSQL",
    slug: "postgresql",
    description: "Step by step guide to learning PostgreSQL",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Software Architect",
    slug: "software-architect",
    description: "Step by step guide to becoming a software architect",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "Cyber Security",
    slug: "cyber-security",
    description: "Step by step guide to becoming a cyber security expert",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "UX Design",
    slug: "ux-design",
    description: "Step by step guide to becoming a UX designer",
    difficulty: "Beginner",
    type: "official",
  },
  {
    title: "Game Developer",
    slug: "game-developer",
    description: "Step by step guide to becoming a game developer",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Technical Writer",
    slug: "technical-writer",
    description: "Step by step guide to becoming a technical writer",
    difficulty: "Beginner",
    type: "official",
  },
  {
    title: "MLOps",
    slug: "mlops",
    description: "Step by step guide to becoming an MLOps engineer",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "Product Manager",
    slug: "product-manager",
    description: "Step by step guide to becoming a product manager",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Engineering Manager",
    slug: "engineering-manager",
    description: "Step by step guide to becoming an engineering manager",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "Developer Relations",
    slug: "developer-relations",
    description: "Step by step guide to becoming a developer relations professional",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "React Developer",
    slug: "react",
    description: "Master React.js for building modern web applications",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Vue.js Developer",
    slug: "vue",
    description: "Learn Vue.js framework for progressive web applications",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Angular Developer",
    slug: "angular",
    description: "Build enterprise applications with Angular framework",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Node.js Developer",
    slug: "nodejs",
    description: "Server-side JavaScript development with Node.js",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Python Developer",
    slug: "python",
    description: "Master Python programming for various applications",
    difficulty: "Beginner",
    type: "official",
  },
  {
    title: "Java Developer",
    slug: "java",
    description: "Enterprise application development with Java",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "C# Developer",
    slug: "csharp",
    description: "Microsoft .NET development with C#",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Go Developer",
    slug: "golang",
    description: "Modern backend development with Go programming language",
    difficulty: "Intermediate",
    type: "official",
  },
  {
    title: "Rust Developer",
    slug: "rust",
    description: "Systems programming with Rust for performance and safety",
    difficulty: "Advanced",
    type: "official",
  },
  {
    title: "Flutter Developer",
    slug: "flutter",
    description: "Cross-platform mobile development with Flutter",
    difficulty: "Intermediate",
    type: "official",
  },
]

export function searchRoadmaps(query: string): Roadmap[] {
  const keyword = query.trim().toLowerCase()
  if (!keyword) return []

  return roadmapList.filter(
    (roadmap) =>
      roadmap.title.toLowerCase().includes(keyword) ||
      roadmap.slug.toLowerCase().includes(keyword) ||
      roadmap.description.toLowerCase().includes(keyword),
  )
}

export function findRoadmapByQuery(query: string): Roadmap | null {
  const keyword = query.trim().toLowerCase()
  if (!keyword) return null

  // First try exact match on slug
  let match = roadmapList.find((roadmap) => roadmap.slug.toLowerCase() === keyword)
  if (match) return match

  // Then try exact match on title
  match = roadmapList.find((roadmap) => roadmap.title.toLowerCase() === keyword)
  if (match) return match

  // Then try partial match on title
  match = roadmapList.find((roadmap) => roadmap.title.toLowerCase().includes(keyword))
  if (match) return match

  // Finally try partial match on slug
  match = roadmapList.find((roadmap) => roadmap.slug.toLowerCase().includes(keyword))
  if (match) return match

  return null
}
