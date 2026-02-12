export const fullStackRoadmap = {
    id: "full-stack",
    title: "Full Stack Developer",
    description: "Complete roadmap to becoming a professional Full Stack Developer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "full-stack",
            id: "html-css",
            position: { x: 400, y: 0 },
            data: {
                label: "HTML & CSS",
                description: "Learn structure and styling of web pages.",
                difficulty: "beginner",
                resources: [
                    { label: "MDN HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "free" },
                    { label: "MDN CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "javascript",
            position: { x: 400, y: 120 },
            data: {
                label: "JavaScript",
                description: "Core JavaScript, ES6+, async/await.",
                difficulty: "beginner",
                resources: [
                    { label: "JavaScript Info", url: "https://javascript.info/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "frontend-framework",
            position: { x: 400, y: 240 },
            data: {
                label: "Frontend Framework (React)",
                description: "Build modern UI using React.",
                difficulty: "intermediate",
                resources: [
                    { label: "React Docs", url: "https://react.dev/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "state-management",
            position: { x: 400, y: 360 },
            data: {
                label: "State Management",
                description: "Context API, Redux basics.",
                difficulty: "intermediate",
                resources: [
                    { label: "Redux Docs", url: "https://redux.js.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "nodejs",
            position: { x: 400, y: 480 },
            data: {
                label: "Node.js & Express",
                description: "Build REST APIs using Express.",
                difficulty: "intermediate",
                resources: [
                    { label: "Express Docs", url: "https://expressjs.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "databases",
            position: { x: 400, y: 600 },
            data: {
                label: "Databases",
                description: "MongoDB and SQL fundamentals.",
                difficulty: "intermediate",
                resources: [
                    { label: "MongoDB Docs", url: "https://www.mongodb.com/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "auth",
            position: { x: 400, y: 720 },
            data: {
                label: "Authentication",
                description: "JWT, sessions, OAuth basics.",
                difficulty: "intermediate",
                resources: [
                    { label: "JWT.io", url: "https://jwt.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "testing",
            position: { x: 400, y: 840 },
            data: {
                label: "Testing",
                description: "Frontend & backend testing.",
                difficulty: "intermediate",
                resources: [
                    { label: "Jest Docs", url: "https://jestjs.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "deployment",
            position: { x: 400, y: 960 },
            data: {
                label: "Deployment",
                description: "Deploy using Docker and Cloud platforms.",
                difficulty: "advanced",
                resources: [
                    { label: "Vercel Docs", url: "https://vercel.com/docs", type: "free" },
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "full-stack",
            id: "system-design",
            position: { x: 400, y: 1080 },
            data: {
                label: "System Design",
                description: "Scalability, load balancing, caching.",
                difficulty: "advanced",
                resources: [
                    { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "full-stack", id: "e1", source: "html-css", target: "javascript" },
        { roadmapId: "full-stack", id: "e2", source: "javascript", target: "frontend-framework" },
        { roadmapId: "full-stack", id: "e3", source: "frontend-framework", target: "state-management" },
        { roadmapId: "full-stack", id: "e4", source: "state-management", target: "nodejs" },
        { roadmapId: "full-stack", id: "e5", source: "nodejs", target: "databases" },
        { roadmapId: "full-stack", id: "e6", source: "databases", target: "auth" },
        { roadmapId: "full-stack", id: "e7", source: "auth", target: "testing" },
        { roadmapId: "full-stack", id: "e8", source: "testing", target: "deployment" },
        { roadmapId: "full-stack", id: "e9", source: "deployment", target: "system-design" }
    ]
}
