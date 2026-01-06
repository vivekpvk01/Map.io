import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    console.log("=== GENAI API CALLED ===")

    const body = await request.json()
    console.log("Request received:", body)

    const { goal, experience, time_commitment } = body

    if (!goal) {
      console.log("❌ Missing goal parameter")
      return NextResponse.json(
        {
          success: false,
          error: "Goal is required",
        },
        { status: 400 },
      )
    }

    // Create a structured roadmap based on the goal
    const createStructuredRoadmap = (goalTitle: string) => {
      const roadmapTemplates: { [key: string]: any } = {
        "frontend developer": {
          title: "Frontend Developer",
          description: "Complete roadmap to become a Frontend Developer using only FREE resources",
          nodes: [
            {
              id: "html",
              position: { x: 200, y: 50 },
              data: {
                label: "HTML",
                description: "Learn HTML fundamentals and semantic markup",
                difficulty: "beginner",
              },
            },
            {
              id: "css",
              position: { x: 200, y: 150 },
              data: {
                label: "CSS",
                description: "Master CSS styling, layouts, and responsive design",
                difficulty: "beginner",
              },
            },
            {
              id: "javascript",
              position: { x: 200, y: 250 },
              data: {
                label: "JavaScript",
                description: "Learn JavaScript fundamentals and DOM manipulation",
                difficulty: "intermediate",
              },
            },
            {
              id: "git",
              position: { x: 100, y: 350 },
              data: {
                label: "Git",
                description: "Version control with Git",
                difficulty: "beginner",
              },
            },
            {
              id: "github",
              position: { x: 300, y: 350 },
              data: {
                label: "GitHub",
                description: "Code hosting and collaboration",
                difficulty: "beginner",
              },
            },
            {
              id: "npm",
              position: { x: 200, y: 450 },
              data: {
                label: "npm",
                description: "Package management with npm",
                difficulty: "intermediate",
              },
            },
            {
              id: "react",
              position: { x: 200, y: 550 },
              data: {
                label: "React",
                description: "Build dynamic UIs with React",
                difficulty: "intermediate",
              },
            },
            {
              id: "tailwind",
              position: { x: 200, y: 650 },
              data: {
                label: "Tailwind",
                description: "Utility-first CSS framework",
                difficulty: "intermediate",
              },
            },
          ],
          edges: [
            { id: "html-css", source: "html", target: "css", animated: true },
            { id: "css-js", source: "css", target: "javascript", animated: true },
            { id: "js-git", source: "javascript", target: "git", animated: true },
            { id: "js-github", source: "javascript", target: "github", animated: true },
            { id: "git-npm", source: "git", target: "npm", animated: true },
            { id: "github-npm", source: "github", target: "npm", animated: true },
            { id: "npm-react", source: "npm", target: "react", animated: true },
            { id: "react-tailwind", source: "react", target: "tailwind", animated: true },
          ],
        },
        "python developer": {
          title: "Python Developer",
          description: "Complete roadmap to become a Python Developer using only FREE resources",
          nodes: [
            {
              id: "python-basics",
              position: { x: 200, y: 50 },
              data: {
                label: "Python Basics",
                description: "Learn Python syntax and fundamentals",
                difficulty: "beginner",
              },
            },
            {
              id: "data-structures",
              position: { x: 200, y: 150 },
              data: {
                label: "Data Structures",
                description: "Lists, dictionaries, sets, and tuples",
                difficulty: "beginner",
              },
            },
            {
              id: "oop",
              position: { x: 200, y: 250 },
              data: {
                label: "OOP",
                description: "Object-Oriented Programming concepts",
                difficulty: "intermediate",
              },
            },
            {
              id: "git",
              position: { x: 100, y: 350 },
              data: {
                label: "Git",
                description: "Version control with Git",
                difficulty: "beginner",
              },
            },
            {
              id: "github",
              position: { x: 300, y: 350 },
              data: {
                label: "GitHub",
                description: "Code hosting and collaboration",
                difficulty: "beginner",
              },
            },
            {
              id: "pip",
              position: { x: 200, y: 450 },
              data: {
                label: "pip",
                description: "Python package management",
                difficulty: "beginner",
              },
            },
            {
              id: "frameworks",
              position: { x: 200, y: 550 },
              data: {
                label: "Frameworks",
                description: "Django or Flask web frameworks",
                difficulty: "advanced",
              },
            },
            {
              id: "testing",
              position: { x: 200, y: 650 },
              data: {
                label: "Testing",
                description: "Unit testing with pytest",
                difficulty: "intermediate",
              },
            },
          ],
          edges: [
            { id: "basics-data", source: "python-basics", target: "data-structures", animated: true },
            { id: "data-oop", source: "data-structures", target: "oop", animated: true },
            { id: "oop-git", source: "oop", target: "git", animated: true },
            { id: "oop-github", source: "oop", target: "github", animated: true },
            { id: "git-pip", source: "git", target: "pip", animated: true },
            { id: "github-pip", source: "github", target: "pip", animated: true },
            { id: "pip-frameworks", source: "pip", target: "frameworks", animated: true },
            { id: "frameworks-testing", source: "frameworks", target: "testing", animated: true },
          ],
        },
      }

      // Check if we have a specific template
      const goalLower = goalTitle.toLowerCase()
      for (const [key, template] of Object.entries(roadmapTemplates)) {
        if (goalLower.includes(key.split(" ")[0])) {
          return template
        }
      }

      // Default generic roadmap
      return {
        title: goalTitle,
        description: `Complete roadmap to become a ${goalTitle} using only FREE resources`,
        nodes: [
          {
            id: "fundamentals",
            position: { x: 200, y: 50 },
            data: {
              label: "Fundamentals",
              description: "Learn the basic concepts and foundations",
              difficulty: "beginner",
            },
          },
          {
            id: "core-concepts",
            position: { x: 200, y: 150 },
            data: {
              label: "Core Concepts",
              description: "Understand essential principles",
              difficulty: "beginner",
            },
          },
          {
            id: "practical-skills",
            position: { x: 200, y: 250 },
            data: {
              label: "Practical Skills",
              description: "Build hands-on experience",
              difficulty: "intermediate",
            },
          },
          {
            id: "tools",
            position: { x: 100, y: 350 },
            data: {
              label: "Tools",
              description: "Essential development tools",
              difficulty: "beginner",
            },
          },
          {
            id: "version-control",
            position: { x: 300, y: 350 },
            data: {
              label: "Version Control",
              description: "Git and GitHub",
              difficulty: "beginner",
            },
          },
          {
            id: "advanced-topics",
            position: { x: 200, y: 450 },
            data: {
              label: "Advanced Topics",
              description: "Master advanced concepts",
              difficulty: "advanced",
            },
          },
          {
            id: "projects",
            position: { x: 200, y: 550 },
            data: {
              label: "Projects",
              description: "Build real-world projects",
              difficulty: "advanced",
            },
          },
          {
            id: "career",
            position: { x: 200, y: 650 },
            data: {
              label: "Career",
              description: "Portfolio and job preparation",
              difficulty: "advanced",
            },
          },
        ],
        edges: [
          { id: "fund-core", source: "fundamentals", target: "core-concepts", animated: true },
          { id: "core-practical", source: "core-concepts", target: "practical-skills", animated: true },
          { id: "practical-tools", source: "practical-skills", target: "tools", animated: true },
          { id: "practical-version", source: "practical-skills", target: "version-control", animated: true },
          { id: "tools-advanced", source: "tools", target: "advanced-topics", animated: true },
          { id: "version-advanced", source: "version-control", target: "advanced-topics", animated: true },
          { id: "advanced-projects", source: "advanced-topics", target: "projects", animated: true },
          { id: "projects-career", source: "projects", target: "career", animated: true },
        ],
      }
    }

    const roadmapData = createStructuredRoadmap(goal)

    console.log("✅ Roadmap generated successfully:", roadmapData.title)
    return NextResponse.json({
      success: true,
      data: roadmapData,
    })
  } catch (error) {
    console.error("💥 GenAI API Error:", error)

    const fallbackRoadmap = {
      success: true,
      title: "Learning Path",
      description: "A comprehensive FREE learning path",
      nodes: [
        {
          id: "start",
          position: { x: 200, y: 50 },
          data: {
            label: "Start Here",
            description: "Begin your learning journey",
            difficulty: "beginner",
          },
        },
        {
          id: "basics",
          position: { x: 200, y: 150 },
          data: {
            label: "Basics",
            description: "Learn fundamental concepts",
            difficulty: "beginner",
          },
        },
        {
          id: "practice",
          position: { x: 200, y: 250 },
          data: {
            label: "Practice",
            description: "Apply what you've learned",
            difficulty: "intermediate",
          },
        },
        {
          id: "advanced",
          position: { x: 200, y: 350 },
          data: {
            label: "Advanced",
            description: "Master advanced topics",
            difficulty: "advanced",
          },
        },
      ],
      edges: [
        { id: "start-basics", source: "start", target: "basics", animated: true },
        { id: "basics-practice", source: "basics", target: "practice", animated: true },
        { id: "practice-advanced", source: "practice", target: "advanced", animated: true },
      ],
    }

    return NextResponse.json({
      success: true,
      data: fallbackRoadmap,
    })
  }
}
