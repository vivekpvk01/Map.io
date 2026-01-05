import type { RoadmapData } from "./roadmap-data" // Assuming RoadmapData is declared in another file

// Additional roadmaps for comprehensive coverage

export const technicalWriterRoadmap: RoadmapData = {
  id: "technical-writer",
  title: "Technical Writer",
  description: "Step by step guide to becoming a technical writer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Writing Skills",
        description: "Master grammar, tone, clarity, and technical communication",
        difficulty: "beginner",
        resources: [
          { title: "Technical Writing", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Writing Tutorial", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Writing Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Documentation Tools",
        description: "Learn Markdown, AsciiDoc, LaTeX, and MS Word for documentation",
        difficulty: "intermediate",
        resources: [
          { title: "Markdown Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Documentation Tools", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Markdown Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Version Control",
        description: "Master Git and GitHub for collaborative documentation",
        difficulty: "intermediate",
        resources: [
          { title: "Git Tutorial", url: "https://www.w3schools.com/git/", type: "w3schools" },
          { title: "Git Tutorial", url: "https://www.geeksforgeeks.org/git-tutorial/", type: "geeksforgeeks" },
          { title: "Git Guide", url: "https://www.javatpoint.com/git", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "4",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Style Guides",
        description: "Learn Microsoft, Google, and industry style guides",
        difficulty: "intermediate",
        resources: [
          { title: "Style Guides", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Writing Style", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Style Tutorial", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "5",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "API Documentation",
        description: "Create API docs using Swagger, Postman, and OpenAPI",
        difficulty: "advanced",
        resources: [
          { title: "API Documentation", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "API Docs Tutorial", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Swagger Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "6",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "User Manuals",
        description: "Write user manuals, tutorials, and help documentation",
        difficulty: "intermediate",
        resources: [
          { title: "User Manuals", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Manual Writing", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Tutorial Writing", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "7",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "CMS Tools",
        description: "Master Confluence, Notion, and content management systems",
        difficulty: "intermediate",
        resources: [
          { title: "CMS Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Content Management", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "CMS Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "8",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Collaboration",
        description: "Work effectively with development teams and stakeholders",
        difficulty: "advanced",
        resources: [
          { title: "Team Collaboration", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Collaboration Tools", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Teamwork Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-3", source: "2", target: "3", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-4", source: "2", target: "4", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e3-5", source: "3", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e4-5", source: "4", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-6", source: "5", target: "6", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-7", source: "5", target: "7", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e6-8", source: "6", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e7-8", source: "7", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
  ],
}

export const mlopsRoadmap: RoadmapData = {
  id: "mlops",
  title: "MLOps Engineer",
  description: "Step by step guide to becoming an MLOps engineer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Machine Learning",
        description: "Strong foundation in ML algorithms and concepts",
        difficulty: "intermediate",
        resources: [
          {
            title: "Machine Learning",
            url: "https://www.w3schools.com/python/python_ml_getting_started.asp",
            type: "w3schools",
          },
          { title: "ML Tutorial", url: "https://www.geeksforgeeks.org/machine-learning/", type: "geeksforgeeks" },
          { title: "ML Guide", url: "https://www.javatpoint.com/machine-learning", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "DevOps Basics",
        description: "Learn CI/CD, GitOps, and containerization fundamentals",
        difficulty: "intermediate",
        resources: [
          { title: "DevOps Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "DevOps Guide", url: "https://www.geeksforgeeks.org/devops-tutorial/", type: "geeksforgeeks" },
          { title: "DevOps Tutorial", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Docker & Kubernetes",
        description: "Containerization and orchestration for ML models",
        difficulty: "advanced",
        resources: [
          { title: "Docker Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Docker Guide", url: "https://www.geeksforgeeks.org/docker-tutorial/", type: "geeksforgeeks" },
          { title: "Docker Tutorial", url: "https://www.javatpoint.com/docker-tutorial", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "4",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "ML Pipelines",
        description: "Build automated ML pipelines with Kubeflow, MLflow, TFX",
        difficulty: "advanced",
        resources: [
          { title: "ML Pipelines", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Pipeline Tutorial", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "MLOps Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "5",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Data Versioning",
        description: "Learn DVC for data version control and experiment tracking",
        difficulty: "intermediate",
        resources: [
          { title: "Data Versioning", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "DVC Tutorial", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Version Control", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "6",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Model Monitoring",
        description: "Monitor model performance and deployment in production",
        difficulty: "advanced",
        resources: [
          { title: "Model Monitoring", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "ML Monitoring", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Monitoring Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "7",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Cloud Platforms",
        description: "Deploy ML models on GCP, AWS, Azure ML platforms",
        difficulty: "advanced",
        resources: [
          { title: "Cloud ML", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Cloud Platforms", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Cloud Tutorial", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "8",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Infrastructure as Code",
        description: "Use Terraform for ML infrastructure automation",
        difficulty: "advanced",
        resources: [
          { title: "Infrastructure as Code", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Terraform Tutorial", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "IaC Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-3", source: "2", target: "3", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-4", source: "2", target: "4", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-5", source: "2", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e3-6", source: "3", target: "6", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e4-6", source: "4", target: "6", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-7", source: "5", target: "7", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e6-8", source: "6", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e7-8", source: "7", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
  ],
}

export const productManagerRoadmap: RoadmapData = {
  id: "product-manager",
  title: "Product Manager",
  description: "Step by step guide to becoming a product manager",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Product Strategy",
        description: "Learn product vision, strategy development, and market analysis",
        difficulty: "intermediate",
        resources: [
          { title: "Product Strategy", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Product Management", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Strategy Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "User Research",
        description: "Master market research, user interviews, and customer insights",
        difficulty: "intermediate",
        resources: [
          { title: "User Research", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Market Research", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Research Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Roadmapping Tools",
        description: "Use Jira, Aha!, and other tools for product roadmapping",
        difficulty: "intermediate",
        resources: [
          { title: "Roadmapping", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Product Tools", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Jira Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "4",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Analytics",
        description: "Master Google Analytics, Mixpanel, and data analysis",
        difficulty: "intermediate",
        resources: [
          { title: "Analytics Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Data Analytics", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Analytics Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "5",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Agile & Scrum",
        description: "Master agile methodologies and scrum frameworks",
        difficulty: "intermediate",
        resources: [
          { title: "Agile Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Scrum Guide", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Agile Methodology", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "6",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Wireframing",
        description: "Create wireframes and prototypes using Figma, Balsamiq",
        difficulty: "intermediate",
        resources: [
          { title: "Wireframing", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Prototyping", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Design Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "7",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "A/B Testing",
        description: "Design and run experiments for product optimization",
        difficulty: "advanced",
        resources: [
          { title: "A/B Testing", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Experimentation", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Testing Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "8",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Product Launch",
        description: "Plan and execute successful product launches",
        difficulty: "advanced",
        resources: [
          { title: "Product Launch", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Launch Strategy", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Launch Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-3", source: "2", target: "3", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-4", source: "2", target: "4", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e3-5", source: "3", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e4-5", source: "4", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-6", source: "5", target: "6", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-7", source: "5", target: "7", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e6-8", source: "6", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e7-8", source: "7", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
  ],
}

export const engineeringManagerRoadmap: RoadmapData = {
  id: "engineering-manager",
  title: "Engineering Manager",
  description: "Step by step guide to becoming an engineering manager",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Technical Leadership",
        description: "Strong technical background and leadership skills",
        difficulty: "advanced",
        resources: [
          { title: "Technical Leadership", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Leadership Guide", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Management Tutorial", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Team Management",
        description: "Learn to manage, hire, and mentor engineering teams",
        difficulty: "advanced",
        resources: [
          { title: "Team Management", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "People Management", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Team Building", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Agile Process",
        description: "Master agile processes and project management",
        difficulty: "intermediate",
        resources: [
          { title: "Agile Management", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Process Management", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Agile Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "4",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Performance Reviews",
        description: "Conduct performance reviews and provide feedback",
        difficulty: "advanced",
        resources: [
          { title: "Performance Management", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Review Process", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Feedback Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "5",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Project Management",
        description: "Use Jira, Asana for project planning and execution",
        difficulty: "intermediate",
        resources: [
          { title: "Project Management", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "PM Tools", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Jira Tutorial", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "6",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Mentorship",
        description: "Mentor team members and support career development",
        difficulty: "advanced",
        resources: [
          { title: "Mentorship", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Career Development", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Mentoring Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "7",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Budgeting",
        description: "Manage budgets and resource allocation",
        difficulty: "advanced",
        resources: [
          { title: "Budget Management", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Resource Planning", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Finance Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "8",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Conflict Resolution",
        description: "Handle conflicts and maintain team harmony",
        difficulty: "advanced",
        resources: [
          { title: "Conflict Resolution", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Team Dynamics", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Resolution Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-3", source: "2", target: "3", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-4", source: "2", target: "4", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e3-5", source: "3", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e4-5", source: "4", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-6", source: "5", target: "6", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-7", source: "5", target: "7", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e6-8", source: "6", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e7-8", source: "7", target: "8", style: { strokeDasharray: "5,5", stroke: "#999" } },
  ],
}

export const developerRelationsRoadmap: RoadmapData = {
  id: "developer-relations",
  title: "Developer Relations",
  description: "Step by step guide to becoming a developer relations professional",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Technical Background",
        description: "Strong programming and technical knowledge foundation",
        difficulty: "intermediate",
        resources: [
          { title: "Programming Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          {
            title: "Programming Languages",
            url: "https://www.geeksforgeeks.org/programming-languages/",
            type: "geeksforgeeks",
          },
          { title: "Coding Guide", url: "https://www.javatpoint.com/programming-language", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Community Building",
        description: "Learn to build and engage developer communities",
        difficulty: "intermediate",
        resources: [
          { title: "Community Building", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Community Management", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Engagement Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Content Creation",
        description: "Create technical blogs, videos, and educational content",
        difficulty: "intermediate",
        resources: [
          { title: "Content Creation", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Technical Writing", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Content Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "4",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Public Speaking",
        description: "Develop presentation skills and conference engagement",
        difficulty: "intermediate",
        resources: [
          { title: "Public Speaking", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Presentation Skills", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Speaking Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "5",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Documentation",
        description: "Create comprehensive documentation and tutorials",
        difficulty: "intermediate",
        resources: [
          { title: "Documentation", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "API Documentation", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Docs Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "6",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Feedback Loop",
        description: "Create feedback channels between users and product teams",
        difficulty: "advanced",
        resources: [
          { title: "Feedback Systems", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "User Feedback", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Feedback Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "7",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Social Media",
        description: "Engage developers through social media platforms",
        difficulty: "intermediate",
        resources: [
          { title: "Social Media", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Digital Marketing", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Social Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-3", source: "2", target: "3", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e2-4", source: "2", target: "4", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e3-5", source: "3", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e4-5", source: "4", target: "5", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-6", source: "5", target: "6", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e5-7", source: "5", target: "7", style: { strokeDasharray: "5,5", stroke: "#999" } },
  ],
}
