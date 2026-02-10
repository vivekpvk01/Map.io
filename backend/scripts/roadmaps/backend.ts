const roadmapId = "backend"

export const backendRoadmap = {
    id: roadmapId,
    title: "Backend Developer",
    description: "Complete roadmap to becoming a professional backend engineer",
    isOfficial: true,

    nodes: [
        {
            roadmapId,
            id: "programming",
            type: "customNode",
            position: { x: 400, y: 0 },
            data: {
                label: "Programming Language",
                description: "Learn Node.js, Python, Java or Go.",
                difficulty: "beginner",
                resources: [
                    { platform: "Official", label: "Node.js Docs", url: "https://nodejs.org/en/docs", type: "free" },
                    { platform: "Official", label: "Python Docs", url: "https://docs.python.org/3/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "git",
            type: "customNode",
            position: { x: 400, y: 120 },
            data: {
                label: "Git & Version Control",
                description: "Understand version control and collaboration.",
                difficulty: "beginner",
                resources: [
                    { platform: "Official", label: "Git Documentation", url: "https://git-scm.com/docs", type: "free" },
                    { platform: "GitHub", label: "GitHub Skills", url: "https://skills.github.com/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "http",
            type: "customNode",
            position: { x: 400, y: 240 },
            data: {
                label: "HTTP & Web Basics",
                description: "Learn how HTTP works, status codes, REST principles.",
                difficulty: "beginner",
                resources: [
                    { platform: "MDN", label: "MDN HTTP Overview", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "databases",
            type: "customNode",
            position: { x: 400, y: 360 },
            data: {
                label: "Databases",
                description: "Understand relational and non-relational databases.",
                difficulty: "beginner",
                resources: [
                    { platform: "MongoDB", label: "MongoDB University", url: "https://university.mongodb.com/", type: "free" },
                    { platform: "PostgreSQL", label: "PostgreSQL Docs", url: "https://www.postgresql.org/docs/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "sql",
            type: "customNode",
            position: { x: 200, y: 480 },
            data: {
                label: "SQL Databases",
                description: "Master relational database concepts and queries.",
                difficulty: "intermediate",
                resources: [
                    { platform: "SQLBolt", label: "SQLBolt", url: "https://sqlbolt.com/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "nosql",
            type: "customNode",
            position: { x: 600, y: 480 },
            data: {
                label: "NoSQL Databases",
                description: "Learn document-based and key-value databases.",
                difficulty: "intermediate",
                resources: [
                    { platform: "MongoDB", label: "MongoDB Docs", url: "https://www.mongodb.com/docs/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "api-design",
            type: "customNode",
            position: { x: 400, y: 600 },
            data: {
                label: "API Design",
                description: "Design clean RESTful and GraphQL APIs.",
                difficulty: "intermediate",
                resources: [
                    { platform: "REST", label: "RESTful API Guide", url: "https://restfulapi.net/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "auth",
            type: "customNode",
            position: { x: 400, y: 720 },
            data: {
                label: "Authentication & Authorization",
                description: "Learn JWT, OAuth2, session management.",
                difficulty: "intermediate",
                resources: [
                    { platform: "JWT", label: "JWT.io", url: "https://jwt.io/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "security",
            type: "customNode",
            position: { x: 400, y: 840 },
            data: {
                label: "Backend Security",
                description: "OWASP, rate limiting, hashing, encryption.",
                difficulty: "advanced",
                resources: [
                    { platform: "OWASP", label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "testing",
            type: "customNode",
            position: { x: 400, y: 960 },
            data: {
                label: "Testing",
                description: "Unit testing, integration testing, API testing.",
                difficulty: "intermediate",
                resources: [
                    { platform: "Jest", label: "Jest Docs", url: "https://jestjs.io/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "caching",
            type: "customNode",
            position: { x: 400, y: 1080 },
            data: {
                label: "Caching (Redis)",
                description: "Improve performance using caching.",
                difficulty: "advanced",
                resources: [
                    { platform: "Redis", label: "Redis Docs", url: "https://redis.io/docs/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "queues",
            type: "customNode",
            position: { x: 400, y: 1200 },
            data: {
                label: "Message Queues",
                description: "Learn RabbitMQ, Kafka basics.",
                difficulty: "advanced",
                resources: [
                    { platform: "RabbitMQ", label: "RabbitMQ Tutorials", url: "https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "system-design",
            type: "customNode",
            position: { x: 400, y: 1320 },
            data: {
                label: "System Design",
                description: "Scalability, load balancing, CAP theorem.",
                difficulty: "advanced",
                resources: [
                    { platform: "GitHub", label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "docker",
            type: "customNode",
            position: { x: 250, y: 1440 },
            data: {
                label: "Docker",
                description: "Containerization fundamentals.",
                difficulty: "advanced",
                resources: [
                    { platform: "Docker", label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ]
            }
        },
        {
            roadmapId,
            id: "cloud",
            type: "customNode",
            position: { x: 550, y: 1440 },
            data: {
                label: "Cloud (AWS/GCP/Azure)",
                description: "Deploy scalable backend systems.",
                difficulty: "advanced",
                resources: [
                    { platform: "AWS", label: "AWS Docs", url: "https://docs.aws.amazon.com/", type: "free" }
                ]
            }
        }
    ],

    edges: [
        { roadmapId, id: "e1", source: "programming", target: "git" },
        { roadmapId, id: "e2", source: "git", target: "http" },
        { roadmapId, id: "e3", source: "http", target: "databases" },
        { roadmapId, id: "e4", source: "databases", target: "sql" },
        { roadmapId, id: "e5", source: "databases", target: "nosql" },
        { roadmapId, id: "e6", source: "sql", target: "api-design" },
        { roadmapId, id: "e7", source: "nosql", target: "api-design" },
        { roadmapId, id: "e8", source: "api-design", target: "auth" },
        { roadmapId, id: "e9", source: "auth", target: "security" },
        { roadmapId, id: "e10", source: "security", target: "testing" },
        { roadmapId, id: "e11", source: "testing", target: "caching" },
        { roadmapId, id: "e12", source: "caching", target: "queues" },
        { roadmapId, id: "e13", source: "queues", target: "system-design" },
        { roadmapId, id: "e14", source: "system-design", target: "docker" },
        { roadmapId, id: "e15", source: "system-design", target: "cloud" }
    ]
}
