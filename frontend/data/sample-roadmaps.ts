export const frontendRoadmapData = {
  id: "frontend",
  title: "Frontend Developer",
  description: "Step by step guide to becoming a modern frontend developer",
  nodes: [
    {
      id: "1",
      type: "customNode",
      position: { x: 400, y: 50 },
      data: {
        label: "HTML",
        definition: "Learn the fundamentals of HTML including semantic markup, forms, accessibility, and SEO basics.",
        example: "e.g., <h1>Hello World</h1>",
        links: {
          w3schools: "https://www.w3schools.com/html/",
          geeksforgeeks: "https://www.geeksforgeeks.org/html/",
          javatpoint: "https://www.javatpoint.com/html-tutorial",
        },
      },
    },
    {
      id: "2",
      type: "customNode",
      position: { x: 400, y: 150 },
      data: {
        label: "CSS",
        definition:
          "Master CSS fundamentals including layouts, responsive design, flexbox, grid, and modern CSS features.",
        example: "e.g., .container { display: flex; }",
        links: {
          w3schools: "https://www.w3schools.com/css/",
          geeksforgeeks: "https://www.geeksforgeeks.org/css/",
          javatpoint: "https://www.javatpoint.com/css-tutorial",
        },
      },
    },
    {
      id: "3",
      type: "customNode",
      position: { x: 400, y: 250 },
      data: {
        label: "JavaScript",
        definition:
          "Learn JavaScript fundamentals including ES6+, DOM manipulation, async programming, and modern JavaScript concepts.",
        example: "e.g., const greeting = () => 'Hello World';",
        links: {
          w3schools: "https://www.w3schools.com/js/",
          geeksforgeeks: "https://www.geeksforgeeks.org/javascript/",
          javatpoint: "https://www.javatpoint.com/javascript-tutorial",
        },
      },
    },
    {
      id: "4",
      type: "customNode",
      position: { x: 300, y: 350 },
      data: {
        label: "Git",
        definition:
          "Learn version control with Git including branching, merging, and collaborative development workflows.",
        example: "e.g., git commit -m 'Initial commit'",
        links: {
          w3schools: "https://www.w3schools.com/git/",
          geeksforgeeks: "https://www.geeksforgeeks.org/git-tutorial/",
          javatpoint: "https://www.javatpoint.com/git",
        },
      },
    },
    {
      id: "5",
      type: "customNode",
      position: { x: 500, y: 350 },
      data: {
        label: "GitHub",
        definition: "Master GitHub for code hosting, collaboration, pull requests, and project management.",
        example: "e.g., git push origin main",
        links: {
          w3schools: "https://www.w3schools.com/git/git_github_getstarted.asp",
          geeksforgeeks: "https://www.geeksforgeeks.org/ultimate-guide-git-github/",
          javatpoint: "https://www.javatpoint.com/github",
        },
      },
    },
    {
      id: "6",
      type: "customNode",
      position: { x: 400, y: 450 },
      data: {
        label: "npm",
        definition:
          "Learn package management with npm including installing packages, managing dependencies, and npm scripts.",
        example: "e.g., npm install react",
        links: {
          w3schools: "https://www.w3schools.com/nodejs/nodejs_npm.asp",
          geeksforgeeks: "https://www.geeksforgeeks.org/node-js-npm-node-package-manager/",
          javatpoint: "https://www.javatpoint.com/npm",
        },
      },
    },
    {
      id: "7",
      type: "customNode",
      position: { x: 400, y: 550 },
      data: {
        label: "React",
        definition:
          "Master React including components, hooks, state management, and building interactive user interfaces.",
        example: "e.g., const App = () => <h1>Hello React</h1>;",
        links: {
          w3schools: "https://www.w3schools.com/react/",
          geeksforgeeks: "https://www.geeksforgeeks.org/react-js/",
          javatpoint: "https://www.javatpoint.com/reactjs-tutorial",
        },
      },
    },
    {
      id: "8",
      type: "customNode",
      position: { x: 400, y: 650 },
      data: {
        label: "Tailwind",
        definition:
          "Learn utility-first CSS framework for rapid UI development with responsive design and component styling.",
        example: "e.g., <div className='bg-blue-500 text-white p-4'>",
        links: {
          w3schools: "https://www.w3schools.com/css/css_frameworks.asp",
          geeksforgeeks: "https://www.geeksforgeeks.org/css-frameworks/",
          javatpoint: "https://www.javatpoint.com/bootstrap-tutorial",
        },
      },
    },
    {
      id: "9",
      type: "customNode",
      position: { x: 400, y: 750 },
      data: {
        label: "Vitest",
        definition:
          "Learn testing fundamentals including unit tests, integration tests, and test-driven development practices.",
        example: "e.g., test('should render', () => { ... });",
        links: {
          w3schools: "https://www.w3schools.com/js/js_testing.asp",
          geeksforgeeks: "https://www.geeksforgeeks.org/software-testing/",
          javatpoint: "https://www.javatpoint.com/software-testing-tutorial",
        },
      },
    },
  ],
  edges: [
    {
      id: "e1-2",
      source: "1",
      target: "2",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e2-3",
      source: "2",
      target: "3",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e3-4",
      source: "3",
      target: "4",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e3-5",
      source: "3",
      target: "5",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e4-6",
      source: "4",
      target: "6",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e5-6",
      source: "5",
      target: "6",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e6-7",
      source: "6",
      target: "7",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e7-8",
      source: "7",
      target: "8",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
    {
      id: "e8-9",
      source: "8",
      target: "9",
      style: {
        strokeDasharray: "4",
        stroke: "#60A5FA",
        strokeWidth: 2,
      },
    },
  ],
}
