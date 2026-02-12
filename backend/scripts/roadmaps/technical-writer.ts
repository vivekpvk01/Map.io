export const technicalWriterRoadmap = {
    id: "technical-writer",
    title: "Technical Writer",
    description: "Complete roadmap to becoming a professional technical writer",
    isOfficial: true,

    nodes: [

        // =========================
        // WRITING FOUNDATION
        // =========================

        {
            roadmapId: "technical-writer",
            id: "writing-basics",
            position: { x: 400, y: 0 },
            data: {
                label: "Writing Fundamentals",
                description: "Grammar, clarity, structure, readability principles.",
                difficulty: "beginner",
                resources: [
                    { label: "Purdue OWL Writing Guide", url: "https://owl.purdue.edu/", type: "free" },
                    { label: "Hemingway App", url: "https://hemingwayapp.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "technical-understanding",
            position: { x: 400, y: 140 },
            data: {
                label: "Basic Technical Knowledge",
                description: "Understand software development basics, APIs, and system architecture.",
                difficulty: "beginner",
                resources: [
                    { label: "MDN Web Docs", url: "https://developer.mozilla.org/", type: "free" }
                ],
            },
        },

        // =========================
        // MARKDOWN & DOC TOOLS
        // =========================

        {
            roadmapId: "technical-writer",
            id: "markdown",
            position: { x: 200, y: 280 },
            data: {
                label: "Markdown",
                description: "Write documentation using Markdown syntax.",
                difficulty: "beginner",
                resources: [
                    { label: "Markdown Guide", url: "https://www.markdownguide.org/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "git",
            position: { x: 600, y: 280 },
            data: {
                label: "Git & GitHub",
                description: "Version control for documentation projects.",
                difficulty: "beginner",
                resources: [
                    { label: "Git Docs", url: "https://git-scm.com/docs", type: "free" }
                ],
            },
        },

        // =========================
        // DOCUMENTATION TYPES
        // =========================

        {
            roadmapId: "technical-writer",
            id: "api-docs",
            position: { x: 150, y: 440 },
            data: {
                label: "API Documentation",
                description: "REST API docs, OpenAPI, Swagger, Postman collections.",
                difficulty: "intermediate",
                resources: [
                    { label: "OpenAPI Specification", url: "https://swagger.io/specification/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "user-guides",
            position: { x: 650, y: 440 },
            data: {
                label: "User Manuals & Guides",
                description: "Step-by-step instructions, onboarding flows.",
                difficulty: "intermediate",
                resources: [
                    { label: "Google Technical Writing Course", url: "https://developers.google.com/tech-writing", type: "free" }
                ],
            },
        },

        // =========================
        // DOCS AS CODE
        // =========================

        {
            roadmapId: "technical-writer",
            id: "docs-as-code",
            position: { x: 400, y: 600 },
            data: {
                label: "Docs as Code",
                description: "Treat documentation like software with CI/CD workflows.",
                difficulty: "advanced",
                resources: [
                    { label: "Docs as Code Guide", url: "https://www.writethedocs.org/guide/docs-as-code/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "static-site-generators",
            position: { x: 200, y: 760 },
            data: {
                label: "Static Site Generators",
                description: "Docusaurus, MkDocs, Sphinx, Hugo.",
                difficulty: "intermediate",
                resources: [
                    { label: "Docusaurus Docs", url: "https://docusaurus.io/docs", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "ci-cd",
            position: { x: 600, y: 760 },
            data: {
                label: "CI/CD for Documentation",
                description: "Automated builds, deployment to GitHub Pages or Netlify.",
                difficulty: "advanced",
                resources: [
                    { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "free" }
                ],
            },
        },

        // =========================
        // INFORMATION ARCHITECTURE
        // =========================

        {
            roadmapId: "technical-writer",
            id: "information-architecture",
            position: { x: 400, y: 920 },
            data: {
                label: "Information Architecture",
                description: "Organizing content for clarity and discoverability.",
                difficulty: "advanced",
                resources: [
                    { label: "Nielsen Norman IA Guide", url: "https://www.nngroup.com/articles/ia-definition/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "seo",
            position: { x: 200, y: 1080 },
            data: {
                label: "SEO for Documentation",
                description: "Search optimization for developer docs.",
                difficulty: "intermediate",
                resources: [
                    { label: "Google SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "open-source",
            position: { x: 600, y: 1080 },
            data: {
                label: "Open Source Contribution",
                description: "Contribute documentation to GitHub projects.",
                difficulty: "intermediate",
                resources: [
                    { label: "First Contributions", url: "https://firstcontributions.github.io/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "technical-writer",
            id: "portfolio",
            position: { x: 400, y: 1220 },
            data: {
                label: "Build Documentation Portfolio",
                description: "Create a public documentation site showcasing your work.",
                difficulty: "advanced",
                resources: [
                    { label: "Write the Docs", url: "https://www.writethedocs.org/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "technical-writer", id: "e1", source: "writing-basics", target: "technical-understanding" },
        { roadmapId: "technical-writer", id: "e2", source: "technical-understanding", target: "markdown" },
        { roadmapId: "technical-writer", id: "e3", source: "technical-understanding", target: "git" },

        { roadmapId: "technical-writer", id: "e4", source: "markdown", target: "api-docs" },
        { roadmapId: "technical-writer", id: "e5", source: "git", target: "user-guides" },

        { roadmapId: "technical-writer", id: "e6", source: "api-docs", target: "docs-as-code" },
        { roadmapId: "technical-writer", id: "e7", source: "user-guides", target: "docs-as-code" },

        { roadmapId: "technical-writer", id: "e8", source: "docs-as-code", target: "static-site-generators" },
        { roadmapId: "technical-writer", id: "e9", source: "docs-as-code", target: "ci-cd" },

        { roadmapId: "technical-writer", id: "e10", source: "static-site-generators", target: "information-architecture" },
        { roadmapId: "technical-writer", id: "e11", source: "ci-cd", target: "information-architecture" },

        { roadmapId: "technical-writer", id: "e12", source: "information-architecture", target: "seo" },
        { roadmapId: "technical-writer", id: "e13", source: "information-architecture", target: "open-source" },

        { roadmapId: "technical-writer", id: "e14", source: "seo", target: "portfolio" },
        { roadmapId: "technical-writer", id: "e15", source: "open-source", target: "portfolio" }
    ]
}
