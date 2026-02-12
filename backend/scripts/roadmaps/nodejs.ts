export const nodejsRoadmap = {
    id: "nodejs",
    title: "Node.js Developer",
    description: "Complete roadmap to mastering Node.js for scalable backend systems",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "nodejs",
            id: "javascript",
            position: { x: 500, y: 0 },
            data: {
                label: "Advanced JavaScript",
                description: "Closures, async/await, event loop, promises, ES6+.",
                difficulty: "beginner",
                resources: [
                    { label: "JavaScript Info", url: "https://javascript.info/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "node-basics",
            position: { x: 500, y: 130 },
            data: {
                label: "Node.js Fundamentals",
                description: "Modules, require/import, globals, process, buffer.",
                difficulty: "beginner",
                resources: [
                    { label: "Node.js Docs", url: "https://nodejs.org/en/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "event-loop",
            position: { x: 500, y: 260 },
            data: {
                label: "Event Loop & Internals",
                description: "Non-blocking I/O, libuv, event-driven architecture.",
                difficulty: "intermediate",
                resources: [
                    { label: "Node Event Loop Guide", url: "https://nodejs.dev/en/learn/the-nodejs-event-loop/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "npm",
            position: { x: 300, y: 390 },
            data: {
                label: "NPM & Package Management",
                description: "package.json, semantic versioning, scripts.",
                difficulty: "beginner",
                resources: [
                    { label: "NPM Docs", url: "https://docs.npmjs.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "express",
            position: { x: 700, y: 390 },
            data: {
                label: "Express.js Framework",
                description: "Routing, middleware, error handling.",
                difficulty: "intermediate",
                resources: [
                    { label: "Express Docs", url: "https://expressjs.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "rest-api",
            position: { x: 500, y: 520 },
            data: {
                label: "REST API Design",
                description: "REST principles, status codes, validation.",
                difficulty: "intermediate",
                resources: [
                    { label: "RESTful API Guide", url: "https://restfulapi.net/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "authentication",
            position: { x: 300, y: 650 },
            data: {
                label: "Authentication & JWT",
                description: "JWT, sessions, OAuth2, hashing with bcrypt.",
                difficulty: "intermediate",
                resources: [
                    { label: "JWT.io", url: "https://jwt.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "database",
            position: { x: 700, y: 650 },
            data: {
                label: "Databases (MongoDB / SQL)",
                description: "Mongoose, Prisma, ORM/ODM patterns.",
                difficulty: "intermediate",
                resources: [
                    { label: "MongoDB Docs", url: "https://www.mongodb.com/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "validation",
            position: { x: 500, y: 780 },
            data: {
                label: "Validation & Security",
                description: "Zod/Joi validation, rate limiting, CORS.",
                difficulty: "advanced",
                resources: [
                    { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "testing",
            position: { x: 300, y: 910 },
            data: {
                label: "Testing (Jest / Supertest)",
                description: "Unit testing, integration testing APIs.",
                difficulty: "advanced",
                resources: [
                    { label: "Jest Docs", url: "https://jestjs.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "realtime",
            position: { x: 700, y: 910 },
            data: {
                label: "Real-time Apps (Socket.io)",
                description: "WebSockets, chat apps, live updates.",
                difficulty: "advanced",
                resources: [
                    { label: "Socket.io Docs", url: "https://socket.io/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "caching",
            position: { x: 500, y: 1040 },
            data: {
                label: "Caching (Redis)",
                description: "Performance optimization with Redis.",
                difficulty: "advanced",
                resources: [
                    { label: "Redis Docs", url: "https://redis.io/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "microservices",
            position: { x: 300, y: 1170 },
            data: {
                label: "Microservices Architecture",
                description: "Service separation, API gateway, message queues.",
                difficulty: "advanced",
                resources: [
                    { label: "Microservices Guide", url: "https://microservices.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "nodejs",
            id: "deployment",
            position: { x: 700, y: 1170 },
            data: {
                label: "Deployment & DevOps",
                description: "Docker, CI/CD, PM2, cloud deployment.",
                difficulty: "advanced",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "nodejs", id: "e1", source: "javascript", target: "node-basics" },
        { roadmapId: "nodejs", id: "e2", source: "node-basics", target: "event-loop" },
        { roadmapId: "nodejs", id: "e3", source: "event-loop", target: "npm" },
        { roadmapId: "nodejs", id: "e4", source: "npm", target: "express" },
        { roadmapId: "nodejs", id: "e5", source: "express", target: "rest-api" },
        { roadmapId: "nodejs", id: "e6", source: "rest-api", target: "authentication" },
        { roadmapId: "nodejs", id: "e7", source: "rest-api", target: "database" },
        { roadmapId: "nodejs", id: "e8", source: "authentication", target: "validation" },
        { roadmapId: "nodejs", id: "e9", source: "database", target: "validation" },
        { roadmapId: "nodejs", id: "e10", source: "validation", target: "testing" },
        { roadmapId: "nodejs", id: "e11", source: "validation", target: "realtime" },
        { roadmapId: "nodejs", id: "e12", source: "testing", target: "caching" },
        { roadmapId: "nodejs", id: "e13", source: "caching", target: "microservices" },
        { roadmapId: "nodejs", id: "e14", source: "microservices", target: "deployment" }
    ]
}
