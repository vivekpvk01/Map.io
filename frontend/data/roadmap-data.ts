export interface RoadmapData {
  id: string
  title: string
  description: string
  nodes: any[]
  edges: any[]
}

const defaultNodeStyle = {
  background: "#1E1E2F",
  color: "#fff",
}

const defaultEdgeStyle = {
  strokeDasharray: "5,5",
  stroke: "#999",
}

export const webDeveloperRoadmap: RoadmapData = {
  id: "web-developer",
  title: "Web Developer",
  description: "Step by step guide to becoming a web developer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "HTML",
        description: "Learn the basics of HTML",
        difficulty: "beginner",
        resources: [
          { title: "HTML Tutorial", url: "https://www.w3schools.com/html/", type: "w3schools" },
          { title: "HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "CSS",
        description: "Learn the basics of CSS",
        difficulty: "beginner",
        resources: [
          { title: "CSS Tutorial", url: "https://www.w3schools.com/css/", type: "w3schools" },
          { title: "CSS Guide", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 400, y: 250 },
      data: {
        label: "JavaScript",
        description: "Learn the basics of JavaScript",
        difficulty: "beginner",
        resources: [
          { title: "JavaScript Tutorial", url: "https://www.w3schools.com/js/", type: "w3schools" },
          { title: "JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: defaultEdgeStyle },
    { id: "e2-3", source: "2", target: "3", style: defaultEdgeStyle },
  ],
}

export const reactDeveloperRoadmap: RoadmapData = {
  id: "react-developer",
  title: "React Developer",
  description: "Step by step guide to becoming a React developer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "HTML",
        description: "Learn the basics of HTML",
        difficulty: "beginner",
        resources: [
          { title: "HTML Tutorial", url: "https://www.w3schools.com/html/", type: "w3schools" },
          { title: "HTML Guide", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "CSS",
        description: "Learn the basics of CSS",
        difficulty: "beginner",
        resources: [
          { title: "CSS Tutorial", url: "https://www.w3schools.com/css/", type: "w3schools" },
          { title: "CSS Guide", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 400, y: 250 },
      data: {
        label: "JavaScript",
        description: "Learn the basics of JavaScript",
        difficulty: "beginner",
        resources: [
          { title: "JavaScript Tutorial", url: "https://www.w3schools.com/js/", type: "w3schools" },
          { title: "JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
    {
      id: "4",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "React",
        description: "Learn the basics of React",
        difficulty: "beginner",
        resources: [
          { title: "React Tutorial", url: "https://www.w3schools.com/react/", type: "w3schools" },
          { title: "React Guide", url: "https://reactjs.org/docs/getting-started.html", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: defaultEdgeStyle },
    { id: "e2-3", source: "2", target: "3", style: defaultEdgeStyle },
    { id: "e3-4", source: "3", target: "4", style: defaultEdgeStyle },
  ],
}

export const backendDeveloperRoadmap: RoadmapData = {
  id: "backend-developer",
  title: "Backend Developer",
  description: "Step by step guide to becoming a backend developer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Data Structures and Algorithms",
        description: "Learn the basics of Data Structures and Algorithms",
        difficulty: "beginner",
        resources: [
          { title: "Data Structures Tutorial", url: "https://www.w3schools.com/data-structures/", type: "w3schools" },
          { title: "Algorithms Guide", url: "https://www.geeksforgeeks.org/data-structures/", type: "geeksforgeeks" },
        ],
      },
      style: defaultNodeStyle,
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Databases",
        description: "Learn the basics of Databases",
        difficulty: "beginner",
        resources: [
          { title: "Databases Tutorial", url: "https://www.w3schools.com/sql/", type: "w3schools" },
          { title: "Databases Guide", url: "https://www.geeksforgeeks.org/databases/", type: "geeksforgeeks" },
        ],
      },
      style: defaultNodeStyle,
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 400, y: 250 },
      data: {
        label: "Backend Frameworks",
        description: "Learn the basics of Backend Frameworks",
        difficulty: "beginner",
        resources: [
          { title: "Node.js Tutorial", url: "https://www.w3schools.com/nodejs/", type: "w3schools" },
          { title: "Express.js Guide", url: "https://expressjs.com/", type: "mdn" },
        ],
      },
      style: defaultNodeStyle,
    },
  ],
  edges: [
    { id: "e1-2", source: "1", target: "2", style: defaultEdgeStyle },
    { id: "e2-3", source: "2", target: "3", style: defaultEdgeStyle },
  ],
}

export const qaRoadmap: RoadmapData = {
  id: "qa",
  title: "QA Engineer",
  description: "Step by step guide to becoming a QA engineer",
  nodes: [
    {
      id: "testing-fundamentals",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Testing Fundamentals",
        description: "Learn basic testing concepts, methodologies, and SDLC",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/software-testing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/software-testing-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/software-testing-tutorial" },
        ],
      },
      position: { x: 400, y: 50 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "manual-testing",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Manual Testing",
        description: "Master manual testing techniques and test case design",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/manual-testing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/manual-testing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/manual-testing" },
        ],
      },
      position: { x: 400, y: 150 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "test-cases",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Test Cases",
        description: "Write effective test cases, test plans, and test scenarios",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/test-cases/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/test-case-in-software-testing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/test-case" },
        ],
      },
      position: { x: 200, y: 250 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "bug-reporting",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Bug Reporting",
        description: "Learn bug lifecycle, reporting tools, and defect management",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/bug-reporting/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/defect-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/bug-lifecycle" },
        ],
      },
      position: { x: 600, y: 250 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "automation-testing",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Automation Testing",
        description: "Learn automated testing frameworks and tools",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/automation-testing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/automation-testing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/automation-testing" },
        ],
      },
      position: { x: 400, y: 350 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "selenium",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Selenium",
        description: "Master Selenium WebDriver for web application testing",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/selenium/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/selenium-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/selenium-tutorial" },
        ],
      },
      position: { x: 200, y: 450 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "api-testing",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "API Testing",
        description: "Test REST APIs using Postman, REST Assured, and other tools",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/api-testing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/rest-api-testing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/postman-tutorial" },
        ],
      },
      position: { x: 600, y: 450 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "performance-testing",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Performance Testing",
        description: "Learn performance testing with JMeter and LoadRunner",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/performance-testing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/load-testing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/jmeter-tutorial" },
        ],
      },
      position: { x: 400, y: 550 },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "testing-fundamentals-to-manual-testing",
      source: "testing-fundamentals",
      target: "manual-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "manual-testing-to-test-cases",
      source: "manual-testing",
      target: "test-cases",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "manual-testing-to-bug-reporting",
      source: "manual-testing",
      target: "bug-reporting",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "test-cases-to-automation-testing",
      source: "test-cases",
      target: "automation-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "bug-reporting-to-automation-testing",
      source: "bug-reporting",
      target: "automation-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "automation-testing-to-selenium",
      source: "automation-testing",
      target: "selenium",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "automation-testing-to-api-testing",
      source: "automation-testing",
      target: "api-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "selenium-to-performance-testing",
      source: "selenium",
      target: "performance-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "api-testing-to-performance-testing",
      source: "api-testing",
      target: "performance-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const devopsRoadmap: RoadmapData = {
  id: "devops",
  title: "DevOps Engineer",
  description: "Step by step guide to becoming a DevOps engineer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Linux",
        description: "Master Linux operating system and command line interface",
        difficulty: "beginner",
        resources: [
          { title: "Linux Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Linux Commands", url: "https://www.geeksforgeeks.org/linux-tutorial/", type: "geeksforgeeks" },
          { title: "Linux Guide", url: "https://www.javatpoint.com/linux-tutorial", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Networking",
        description: "Understanding network protocols, DNS, and infrastructure",
        difficulty: "beginner",
        resources: [
          { title: "Networking", url: "https://www.w3schools.com/", type: "w3schools" },
          {
            title: "Computer Networks",
            url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
            type: "geeksforgeeks",
          },
          {
            title: "Networking Tutorial",
            url: "https://www.javatpoint.com/computer-network-tutorial",
            type: "javatpoint",
          },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Git",
        description: "Version control system for tracking code changes",
        difficulty: "beginner",
        resources: [
          { title: "Git Tutorial", url: "https://www.w3schools.com/git/", type: "w3schools" },
          { title: "Git Commands", url: "https://www.geeksforgeeks.org/git-tutorial/", type: "geeksforgeeks" },
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
        label: "Docker",
        description: "Containerization platform for application deployment",
        difficulty: "intermediate",
        resources: [
          { title: "Docker Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Docker Guide", url: "https://www.geeksforgeeks.org/docker-tutorial/", type: "geeksforgeeks" },
          { title: "Docker Tutorial", url: "https://www.javatpoint.com/docker-tutorial", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "5",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Kubernetes",
        description: "Container orchestration platform for scalable deployments",
        difficulty: "advanced",
        resources: [
          { title: "Kubernetes", url: "https://www.w3schools.com/", type: "w3schools" },
          {
            title: "Kubernetes Tutorial",
            url: "https://www.geeksforgeeks.org/kubernetes-tutorial/",
            type: "geeksforgeeks",
          },
          { title: "K8s Guide", url: "https://www.javatpoint.com/kubernetes", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "6",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "AWS",
        description: "Amazon Web Services cloud platform and services",
        difficulty: "intermediate",
        resources: [
          { title: "AWS Tutorial", url: "https://www.w3schools.com/aws/", type: "w3schools" },
          { title: "AWS Guide", url: "https://www.geeksforgeeks.org/aws-tutorial/", type: "geeksforgeeks" },
          { title: "AWS Tutorial", url: "https://www.javatpoint.com/aws-tutorial", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "7",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "CI/CD",
        description: "Continuous Integration and Continuous Deployment pipelines",
        difficulty: "advanced",
        resources: [
          { title: "CI/CD Tutorial", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "CI/CD Pipeline", url: "https://www.geeksforgeeks.org/what-is-ci-cd/", type: "geeksforgeeks" },
          { title: "DevOps Pipeline", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "8",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Monitoring",
        description: "Application and infrastructure monitoring with Prometheus, Grafana",
        difficulty: "advanced",
        resources: [
          { title: "Monitoring", url: "https://www.w3schools.com/", type: "w3schools" },
          {
            title: "System Monitoring",
            url: "https://www.geeksforgeeks.org/system-monitoring/",
            type: "geeksforgeeks",
          },
          { title: "Monitoring Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "9",
      type: "customNode",
      position: { x: 200, y: 650 },
      data: {
        label: "Infrastructure as Code",
        description: "Terraform and Ansible for infrastructure automation",
        difficulty: "advanced",
        resources: [
          { title: "Infrastructure as Code", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Terraform Tutorial", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "IaC Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "10",
      type: "customNode",
      position: { x: 600, y: 650 },
      data: {
        label: "Security",
        description: "DevSecOps practices and security automation",
        difficulty: "advanced",
        resources: [
          { title: "DevSecOps", url: "https://www.w3schools.com/", type: "w3schools" },
          { title: "Security Automation", url: "https://www.geeksforgeeks.org/", type: "geeksforgeeks" },
          { title: "Security Guide", url: "https://www.javatpoint.com/", type: "javatpoint" },
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
    { id: "e8-9", source: "8", target: "9", style: { strokeDasharray: "5,5", stroke: "#999" } },
    { id: "e8-10", source: "8", target: "10", style: { strokeDasharray: "5,5", stroke: "#999" } },
  ],
}

export const technicalWriterRoadmap: RoadmapData = {
  id: "technical-writer",
  title: "Technical Writer",
  description: "Step by step guide to becoming a technical writer",
  nodes: [
    {
      id: "writing-skills",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Writing Skills",
        description: "Master grammar, tone, clarity, and technical communication",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/writing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/technical-writing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/writing-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "documentation-tools",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Documentation Tools",
        description: "Learn Markdown, AsciiDoc, LaTeX, and MS Word for documentation",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/markdown/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/markdown/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/markdown-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "version-control",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Version Control",
        description: "Master Git and GitHub for collaborative documentation",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/git/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/git-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/git" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "style-guides",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Style Guides",
        description: "Learn Microsoft, Google, and industry style guides",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/style-guides/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/writing-style/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/style-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "api-documentation",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "API Documentation",
        description: "Create API docs using Swagger, Postman, and OpenAPI",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/api-documentation/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/api-documentation/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/swagger-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "user-manuals",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "User Manuals",
        description: "Write user manuals, tutorials, and help documentation",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/user-manuals/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/manual-writing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/tutorial-writing" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "ux-understanding",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "UX Understanding",
        description: "Learn UI/UX principles for better documentation design",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/ux/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/ux-design/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/ux-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "team-collaboration",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Team Collaboration",
        description: "Work effectively with development teams and stakeholders",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/collaboration/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/team-collaboration/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/teamwork-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "cms-tools",
      type: "customNode",
      position: { x: 200, y: 650 },
      data: {
        label: "CMS Tools",
        description: "Master Confluence, Notion, and content management systems",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/cms/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/content-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/cms-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "certifications",
      type: "customNode",
      position: { x: 600, y: 650 },
      data: {
        label: "Certifications",
        description: "Get freelancing or tech writing certifications",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/certifications/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/technical-writing-certification/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/certification-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "writing-skills-to-documentation-tools",
      source: "writing-skills",
      target: "documentation-tools",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "documentation-tools-to-version-control",
      source: "documentation-tools",
      target: "version-control",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "documentation-tools-to-style-guides",
      source: "documentation-tools",
      target: "style-guides",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "version-control-to-api-documentation",
      source: "version-control",
      target: "api-documentation",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "style-guides-to-api-documentation",
      source: "style-guides",
      target: "api-documentation",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "api-documentation-to-user-manuals",
      source: "api-documentation",
      target: "user-manuals",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "api-documentation-to-ux-understanding",
      source: "api-documentation",
      target: "ux-understanding",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "user-manuals-to-team-collaboration",
      source: "user-manuals",
      target: "team-collaboration",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "ux-understanding-to-team-collaboration",
      source: "ux-understanding",
      target: "team-collaboration",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "team-collaboration-to-cms-tools",
      source: "team-collaboration",
      target: "cms-tools",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "team-collaboration-to-certifications",
      source: "team-collaboration",
      target: "certifications",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const mlopsRoadmap: RoadmapData = {
  id: "mlops",
  title: "MLOps",
  description: "Step by step guide to becoming an MLOps engineer",
  nodes: [
    {
      id: "ml-foundations",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "ML Foundations",
        description: "Strong foundation in machine learning algorithms and concepts",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/python/python_ml_getting_started.asp" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/machine-learning/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/machine-learning" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "devops-basics",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "DevOps Basics",
        description: "Learn CI/CD, GitOps, and containerization fundamentals",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/devops/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/devops-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/devops-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "docker-kubernetes",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Docker & Kubernetes",
        description: "Containerization and orchestration for ML models",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/docker/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/docker-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/docker-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "ml-pipelines",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "ML Pipelines",
        description: "Build automated ML pipelines with Kubeflow, MLflow, TFX",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/ml-pipelines/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/ml-pipeline/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/mlops-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "data-versioning",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Data Versioning",
        description: "Learn DVC for data version control and experiment tracking",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/data-versioning/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/dvc-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/version-control-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "model-monitoring",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Model Monitoring",
        description: "Monitor model performance and deployment in production",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/model-monitoring/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/ml-monitoring/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/monitoring-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "cloud-providers",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Cloud Providers",
        description: "Deploy ML models on GCP, AWS, Azure ML platforms",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/aws/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/aws-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/aws-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "infrastructure-as-code",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Infrastructure as Code",
        description: "Use Terraform for ML infrastructure automation",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/terraform/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/terraform-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/terraform-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "logging-monitoring",
      type: "customNode",
      position: { x: 400, y: 650 },
      data: {
        label: "Logging & Monitoring",
        description: "Implement logging and monitoring with Prometheus, Grafana",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/monitoring/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/system-monitoring/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/monitoring-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "ml-foundations-to-devops-basics",
      source: "ml-foundations",
      target: "devops-basics",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "devops-basics-to-docker-kubernetes",
      source: "devops-basics",
      target: "docker-kubernetes",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "devops-basics-to-ml-pipelines",
      source: "devops-basics",
      target: "ml-pipelines",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "devops-basics-to-data-versioning",
      source: "devops-basics",
      target: "data-versioning",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "docker-kubernetes-to-model-monitoring",
      source: "docker-kubernetes",
      target: "model-monitoring",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "ml-pipelines-to-model-monitoring",
      source: "ml-pipelines",
      target: "model-monitoring",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "data-versioning-to-cloud-providers",
      source: "data-versioning",
      target: "cloud-providers",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "model-monitoring-to-infrastructure-as-code",
      source: "model-monitoring",
      target: "infrastructure-as-code",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "cloud-providers-to-infrastructure-as-code",
      source: "cloud-providers",
      target: "infrastructure-as-code",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "infrastructure-as-code-to-logging-monitoring",
      source: "infrastructure-as-code",
      target: "logging-monitoring",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const productManagerRoadmap: RoadmapData = {
  id: "product-manager",
  title: "Product Manager",
  description: "Step by step guide to becoming a Product Manager",
  nodes: [
    {
      id: "product-strategy",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Product Strategy",
        description: "Develop product strategy and vision for market success",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/product-strategy/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/product-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/product-strategy-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "market-research",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Market Research",
        description: "Conduct market and user research for informed decisions",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/market-research/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/market-research/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/research-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "roadmapping-tools",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Roadmapping Tools",
        description: "Master roadmapping tools like Jira and Aha!",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/jira/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/jira-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/jira-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "analytics",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Analytics",
        description: "Use Google Analytics, Mixpanel for data-driven decisions",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/analytics/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/google-analytics/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/analytics-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "agile-scrum",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Agile & Scrum",
        description: "Master Agile and Scrum methodologies for product development",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/agile/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/agile-methodology/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/agile-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "wireframing-prototyping",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Wireframing & Prototyping",
        description: "Create wireframes and prototypes using Figma, Balsamiq",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/figma/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/wireframing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/figma-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "stakeholder-communication",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Stakeholder Communication",
        description: "Effectively communicate with stakeholders and teams",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/communication/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/communication-skills/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/communication-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "ab-testing",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "A/B Testing",
        description: "Design and run A/B testing and experimentation",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/ab-testing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/ab-testing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/testing-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "product-launch",
      type: "customNode",
      position: { x: 400, y: 650 },
      data: {
        label: "Product Launch",
        description: "Plan and execute successful product launches",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/product-launch/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/product-launch/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/launch-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "product-strategy-to-market-research",
      source: "product-strategy",
      target: "market-research",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "market-research-to-roadmapping-tools",
      source: "market-research",
      target: "roadmapping-tools",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "market-research-to-analytics",
      source: "market-research",
      target: "analytics",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "roadmapping-tools-to-agile-scrum",
      source: "roadmapping-tools",
      target: "agile-scrum",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "analytics-to-agile-scrum",
      source: "analytics",
      target: "agile-scrum",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "agile-scrum-to-wireframing-prototyping",
      source: "agile-scrum",
      target: "wireframing-prototyping",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "agile-scrum-to-stakeholder-communication",
      source: "agile-scrum",
      target: "stakeholder-communication",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "wireframing-prototyping-to-ab-testing",
      source: "wireframing-prototyping",
      target: "ab-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "stakeholder-communication-to-ab-testing",
      source: "stakeholder-communication",
      target: "ab-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "ab-testing-to-product-launch",
      source: "ab-testing",
      target: "product-launch",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const engineeringManagerRoadmap: RoadmapData = {
  id: "engineering-manager",
  title: "Engineering Manager",
  description: "Step by step guide to becoming an Engineering Manager",
  nodes: [
    {
      id: "technical-leadership",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Technical Leadership",
        description: "Develop technical leadership and architectural decision skills",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/leadership/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/technical-leadership/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/leadership-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "team-management",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Team Management",
        description: "Master team management and hiring best practices",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/team-management/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/team-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/management-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "agile-process",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Agile Process",
        description: "Master Agile process and methodology implementation",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/agile/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/agile-methodology/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/agile-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "performance-reviews",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Performance Reviews",
        description: "Conduct effective performance reviews and feedback sessions",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/performance-reviews/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/performance-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/feedback-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "project-management",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Project Management",
        description: "Use project management tools like Jira and Asana effectively",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/project-management/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/project-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/jira-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "mentorship",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Mentorship",
        description: "Provide mentorship and career development guidance",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/mentorship/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/mentorship/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/career-development-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "budgeting",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Budgeting",
        description: "Handle budgeting and resource allocation effectively",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/budgeting/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/resource-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/budgeting-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "conflict-resolution",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Conflict Resolution",
        description: "Develop conflict resolution and communication skills",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/conflict-resolution/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/conflict-management/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/communication-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "technical-leadership-to-team-management",
      source: "technical-leadership",
      target: "team-management",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "team-management-to-agile-process",
      source: "team-management",
      target: "agile-process",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "team-management-to-performance-reviews",
      source: "team-management",
      target: "performance-reviews",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "agile-process-to-project-management",
      source: "agile-process",
      target: "project-management",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "performance-reviews-to-project-management",
      source: "performance-reviews",
      target: "project-management",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "project-management-to-mentorship",
      source: "project-management",
      target: "mentorship",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "project-management-to-budgeting",
      source: "project-management",
      target: "budgeting",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "mentorship-to-conflict-resolution",
      source: "mentorship",
      target: "conflict-resolution",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "budgeting-to-conflict-resolution",
      source: "budgeting",
      target: "conflict-resolution",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const developerRelationsRoadmap: RoadmapData = {
  id: "developer-relations",
  title: "Developer Relations",
  description: "Step by step guide to becoming a Developer Relations Engineer",
  nodes: [
    {
      id: "technical-background",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Technical Background",
        description: "Build strong coding and open source contribution skills",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/programming/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/open-source/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/programming-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "community-building",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Community Building",
        description: "Learn community building and outreach strategies",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/community/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/community-building/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/community-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "content-creation",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Content Creation",
        description: "Create engaging blogs, videos, and technical talks",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/content-creation/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/technical-writing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/blogging-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "public-speaking",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Public Speaking",
        description: "Master public speaking and conference engagement",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/public-speaking/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/public-speaking/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/communication-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "documentation",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Documentation",
        description: "Write comprehensive documentation and tutorials",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/documentation/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/technical-documentation/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/documentation-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "feedback-loop",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Feedback Loop",
        description: "Create feedback loops between users and product teams",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/feedback/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/feedback-systems/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/feedback-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "social-media",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Social Media",
        description: "Engage effectively on social media platforms",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/social-media/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/social-media-marketing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/social-media-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "technical-background-to-community-building",
      source: "technical-background",
      target: "community-building",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "community-building-to-content-creation",
      source: "community-building",
      target: "content-creation",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "community-building-to-public-speaking",
      source: "community-building",
      target: "public-speaking",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "content-creation-to-documentation",
      source: "content-creation",
      target: "documentation",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "public-speaking-to-documentation",
      source: "public-speaking",
      target: "documentation",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "documentation-to-feedback-loop",
      source: "documentation",
      target: "feedback-loop",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "documentation-to-social-media",
      source: "documentation",
      target: "social-media",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const cyberSecurityRoadmap: RoadmapData = {
  id: "cyber-security",
  title: "Cyber Security",
  description: "Step by step guide to becoming a cyber security expert",
  nodes: [
    {
      id: "networking-fundamentals",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Networking Fundamentals",
        description: "Learn TCP/IP, firewalls, VPNs, and network protocols",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/networking/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/computer-network-tutorials/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/computer-network-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "operating-systems",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Operating Systems",
        description: "Master Windows and Linux internals for security",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/operating-systems/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/linux-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/operating-system" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "cryptography",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Cryptography",
        description: "Understand AES, RSA, hashing, and encryption methods",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/cryptography/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/cryptography/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/cryptography-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "ethical-hacking",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Ethical Hacking",
        description: "Learn penetration testing with Nmap, Metasploit, Burp Suite",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/ethical-hacking/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/ethical-hacking/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/ethical-hacking-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "secure-coding",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Secure Coding",
        description: "Master secure coding practices and vulnerability prevention",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/secure-coding/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/secure-coding/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/security-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "web-security",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Web Security",
        description: "Learn OWASP Top 10 and web application security",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/web-security/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/web-security/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/owasp-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "incident-response",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Incident Response",
        description: "Handle incident response and digital forensics",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/incident-response/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/incident-response/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/forensics-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "security-certifications",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Security Certifications",
        description: "Obtain security certifications like CEH, OSCP, CISSP",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/security-certifications/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/cybersecurity-certifications/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/certification-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "networking-fundamentals-to-operating-systems",
      source: "networking-fundamentals",
      target: "operating-systems",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "operating-systems-to-cryptography",
      source: "operating-systems",
      target: "cryptography",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "operating-systems-to-ethical-hacking",
      source: "operating-systems",
      target: "ethical-hacking",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "cryptography-to-secure-coding",
      source: "cryptography",
      target: "secure-coding",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "ethical-hacking-to-secure-coding",
      source: "ethical-hacking",
      target: "secure-coding",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "secure-coding-to-web-security",
      source: "secure-coding",
      target: "web-security",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "secure-coding-to-incident-response",
      source: "secure-coding",
      target: "incident-response",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "web-security-to-security-certifications",
      source: "web-security",
      target: "security-certifications",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "incident-response-to-security-certifications",
      source: "incident-response",
      target: "security-certifications",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const uxDesignRoadmap: RoadmapData = {
  id: "ux-design",
  title: "UX Design",
  description: "Step by step guide to becoming a UX designer",
  nodes: [
    {
      id: "design-fundamentals",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Design Fundamentals",
        description: "Learn color theory, layout, and visual hierarchy principles",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/design/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-fundamentals/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/design-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "user-research",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "User Research",
        description: "Master user research techniques and methodologies",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/user-research/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/user-research/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/research-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "wireframing-tools",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Wireframing Tools",
        description: "Learn wireframing with Figma and Sketch",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/figma/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/wireframing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/figma-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "design-tools",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Design Tools",
        description: "Master design tools like Adobe XD and InVision",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/adobe-xd/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/design-tools/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/adobe-xd-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "prototyping-testing",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Prototyping & Testing",
        description: "Create prototypes and conduct usability testing",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/prototyping/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/usability-testing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/prototyping-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "accessibility-standards",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Accessibility Standards",
        description: "Learn WCAG guidelines and accessibility best practices",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/accessibility/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/web-accessibility/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/accessibility-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "ux-writing",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "UX Writing",
        description: "Master UX writing and microcopy techniques",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/ux-writing/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/ux-writing/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/writing-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "responsive-design",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Responsive Design",
        description: "Learn responsive design principles for all devices",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/css/css_rwd_intro.asp" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/responsive-web-design/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/responsive-web-design-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "design-fundamentals-to-user-research",
      source: "design-fundamentals",
      target: "user-research",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "user-research-to-wireframing-tools",
      source: "user-research",
      target: "wireframing-tools",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "user-research-to-design-tools",
      source: "user-research",
      target: "design-tools",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "wireframing-tools-to-prototyping-testing",
      source: "wireframing-tools",
      target: "prototyping-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "design-tools-to-prototyping-testing",
      source: "design-tools",
      target: "prototyping-testing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "prototyping-testing-to-accessibility-standards",
      source: "prototyping-testing",
      target: "accessibility-standards",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "prototyping-testing-to-ux-writing",
      source: "prototyping-testing",
      target: "ux-writing",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "accessibility-standards-to-responsive-design",
      source: "accessibility-standards",
      target: "responsive-design",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "ux-writing-to-responsive-design",
      source: "ux-writing",
      target: "responsive-design",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const frontendRoadmap: RoadmapData = {
  id: "frontend",
  title: "Frontend Developer",
  description: "Step by step guide to becoming a frontend developer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "HTML",
        description: "Learn HTML fundamentals",
        difficulty: "beginner",
        resources: [
          { title: "HTML Tutorial", url: "https://www.w3schools.com/html/", type: "w3schools" },
          { title: "HTML Guide", url: "https://www.geeksforgeeks.org/html/", type: "geeksforgeeks" },
          { title: "HTML Tutorial", url: "https://www.javatpoint.com/html-tutorial", type: "javatpoint" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [],
}

export const gameDeveloperRoadmap: RoadmapData = {
  id: "game-developer",
  title: "Game Developer",
  description: "Step by step guide to becoming a game developer",
  nodes: [
    {
      id: "programming-languages",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Programming Languages",
        description: "Master C++, C#, Python, and JavaScript for game development",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/cpp/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/c-plus-plus/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/cpp-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "game-engines",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "Game Engines",
        description: "Learn Unity, Unreal Engine, and Godot for game development",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/unity/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/unity-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/unity-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "game-design-principles",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Game Design Principles",
        description: "Understand core game design concepts and mechanics",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/game-design/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/game-design/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/game-design-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "graphics-programming",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Graphics Programming",
        description: "Learn OpenGL, DirectX, shaders, and 2D/3D rendering",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/opengl/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/computer-graphics/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/computer-graphics-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "physics-engines",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Physics Engines",
        description: "Master physics engines and mathematics for games",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/physics/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/game-physics/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/physics-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "audio-programming",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Audio Programming",
        description: "Implement sound effects and music in games",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/audio/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/audio-programming/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/audio-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "multiplayer-networking",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Multiplayer Networking",
        description: "Build networked multiplayer game systems",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/networking/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/game-networking/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/networking-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "performance-optimization",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Performance Optimization",
        description: "Optimize games for better performance and frame rates",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/optimization/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/game-optimization/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/optimization-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "game-deployment",
      type: "customNode",
      position: { x: 200, y: 650 },
      data: {
        label: "Game Deployment",
        description: "Deploy games to PC, Console, and Mobile platforms",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/deployment/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/game-deployment/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/deployment-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "portfolio-building",
      type: "customNode",
      position: { x: 600, y: 650 },
      data: {
        label: "Portfolio Building",
        description: "Create mini projects, GitHub repos, and personal website",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/portfolio/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/portfolio-building/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/portfolio-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "programming-languages-to-game-engines",
      source: "programming-languages",
      target: "game-engines",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "game-engines-to-game-design-principles",
      source: "game-engines",
      target: "game-design-principles",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "game-engines-to-graphics-programming",
      source: "game-engines",
      target: "graphics-programming",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "game-design-principles-to-physics-engines",
      source: "game-design-principles",
      target: "physics-engines",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "graphics-programming-to-physics-engines",
      source: "graphics-programming",
      target: "physics-engines",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "physics-engines-to-audio-programming",
      source: "physics-engines",
      target: "audio-programming",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "physics-engines-to-multiplayer-networking",
      source: "physics-engines",
      target: "multiplayer-networking",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "audio-programming-to-performance-optimization",
      source: "audio-programming",
      target: "performance-optimization",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "multiplayer-networking-to-performance-optimization",
      source: "multiplayer-networking",
      target: "performance-optimization",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "performance-optimization-to-game-deployment",
      source: "performance-optimization",
      target: "game-deployment",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "performance-optimization-to-portfolio-building",
      source: "performance-optimization",
      target: "portfolio-building",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

export const softwareArchitectRoadmap: RoadmapData = {
  id: "software-architect",
  title: "Software Architect",
  description: "Step by step guide to becoming a Software Architect",
  nodes: [
    {
      id: "programming-experience",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "Programming Experience",
        description: "Master multiple programming paradigms and languages",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/programming/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/programming-paradigms/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/programming-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "system-design",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "System Design",
        description: "Learn monoliths, microservices, and serverless architectures",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/system-design/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/system-design-tutorial/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/system-design-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "design-patterns",
      type: "customNode",
      position: { x: 200, y: 250 },
      data: {
        label: "Design Patterns",
        description: "Master OOP, SOLID, and GRASP design patterns",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/design-patterns/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/software-design-patterns/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/design-patterns-in-java" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "microservices-architecture",
      type: "customNode",
      position: { x: 600, y: 250 },
      data: {
        label: "Microservices Architecture",
        description: "Design and implement microservices architectures",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/microservices/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/microservices/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/microservices" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "event-driven-design",
      type: "customNode",
      position: { x: 400, y: 350 },
      data: {
        label: "Event-Driven Design",
        description: "Learn event-driven architecture and messaging queues",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/event-driven/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/event-driven-architecture/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/messaging-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "scalability-caching",
      type: "customNode",
      position: { x: 200, y: 450 },
      data: {
        label: "Scalability & Caching",
        description: "Master scalability, caching strategies, and CDN",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/scalability/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/system-scalability/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/caching-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "security-architecture",
      type: "customNode",
      position: { x: 600, y: 450 },
      data: {
        label: "Security Architecture",
        description: "Design secure systems and implement security patterns",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/security-architecture/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/security-architecture/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/security-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
    {
      id: "architecture-decisions",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "Architecture Decisions",
        description: "Document Architecture Decision Records (ADR) effectively",
        resources: [
          { label: "W3Schools", url: "https://www.w3schools.com/architecture-decisions/" },
          { label: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/architecture-decision-records/" },
          { label: "Javatpoint", url: "https://www.javatpoint.com/documentation-tutorial" },
        ],
      },
      style: { backgroundColor: "#1E1E2F", color: "#fff" },
    },
  ],
  edges: [
    {
      id: "programming-experience-to-system-design",
      source: "programming-experience",
      target: "system-design",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "system-design-to-design-patterns",
      source: "system-design",
      target: "design-patterns",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "system-design-to-microservices-architecture",
      source: "system-design",
      target: "microservices-architecture",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "design-patterns-to-event-driven-design",
      source: "design-patterns",
      target: "event-driven-design",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "microservices-architecture-to-event-driven-design",
      source: "microservices-architecture",
      target: "event-driven-design",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "event-driven-design-to-scalability-caching",
      source: "event-driven-design",
      target: "scalability-caching",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "event-driven-design-to-security-architecture",
      source: "event-driven-design",
      target: "security-architecture",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "scalability-caching-to-architecture-decisions",
      source: "scalability-caching",
      target: "architecture-decisions",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
    {
      id: "security-architecture-to-architecture-decisions",
      source: "security-architecture",
      target: "architecture-decisions",
      animated: false,
      style: { strokeDasharray: "5,5", stroke: "#999" },
    },
  ],
}

// Update the roadmapDataMap to include ALL roadmaps (keeping existing ones and adding the new ones):
export const roadmapDataMap: { [key: string]: RoadmapData } = {
  "web-developer": webDeveloperRoadmap,
  "react-developer": reactDeveloperRoadmap,
  "backend-developer": backendDeveloperRoadmap,
  qa: qaRoadmap,
  devops: devopsRoadmap,
  "technical-writer": technicalWriterRoadmap,
  mlops: mlopsRoadmap,
  "product-manager": productManagerRoadmap,
  "engineering-manager": engineeringManagerRoadmap,
  "developer-relations": developerRelationsRoadmap,
  "game-developer": gameDeveloperRoadmap,
  "cyber-security": cyberSecurityRoadmap,
  "ux-design": uxDesignRoadmap,
  frontend: frontendRoadmap,
  "software-architect": softwareArchitectRoadmap,
  // Add any other existing roadmaps that should remain untouched...
}
