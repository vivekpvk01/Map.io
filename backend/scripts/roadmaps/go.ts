export const goRoadmap = {
    id: "golang",
    title: "Go Developer",
    description: "Complete roadmap to becoming a professional Go (Golang) developer for backend, cloud, and microservices",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "golang",
            id: "go-basics",
            position: { x: 500, y: 0 },
            data: {
                label: "Go Fundamentals",
                description: "Variables, types, functions, control flow.",
                difficulty: "beginner",
                resources: [
                    { label: "Go Tour", url: "https://go.dev/tour/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "golang",
            id: "data-structures",
            position: { x: 500, y: 130 },
            data: {
                label: "Data Structures",
                description: "Arrays, slices, maps, structs.",
                difficulty: "beginner",
                resources: [
                    { label: "Effective Go", url: "https://go.dev/doc/effective_go", type: "free" }
                ],
            },
        },
        {
            roadmapId: "golang",
            id: "interfaces",
            position: { x: 500, y: 260 },
            data: {
                label: "Interfaces & Methods",
                description: "Methods, interfaces, composition.",
                difficulty: "intermediate",
                resources: [
                    { label: "Go Interfaces", url: "https://go.dev/doc/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "goroutines",
            position: { x: 300, y: 390 },
            data: {
                label: "Goroutines",
                description: "Lightweight concurrent functions.",
                difficulty: "intermediate",
                resources: [
                    { label: "Go Concurrency Patterns", url: "https://go.dev/blog/pipelines", type: "free" }
                ],
            },
        },
        {
            roadmapId: "golang",
            id: "channels",
            position: { x: 700, y: 390 },
            data: {
                label: "Channels",
                description: "Communication between goroutines.",
                difficulty: "intermediate",
                resources: [
                    { label: "Go Channels Guide", url: "https://go.dev/tour/concurrency", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "http",
            position: { x: 500, y: 520 },
            data: {
                label: "HTTP & net/http",
                description: "Build HTTP servers using Go standard library.",
                difficulty: "intermediate",
                resources: [
                    { label: "Go net/http Docs", url: "https://pkg.go.dev/net/http", type: "free" }
                ],
            },
        },

        // 🔥 FIXED SPACING HERE
        {
            roadmapId: "golang",
            id: "microservices",
            position: { x: 200, y: 650 },   // moved left
            data: {
                label: "Microservices Architecture",
                description: "Service communication and scaling.",
                difficulty: "advanced",
                resources: [
                    { label: "Microservices Guide", url: "https://microservices.io/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "web-frameworks",
            position: { x: 500, y: 650 },
            data: {
                label: "Web Frameworks (Gin / Fiber)",
                description: "Build APIs faster using frameworks.",
                difficulty: "intermediate",
                resources: [
                    { label: "Gin Docs", url: "https://gin-gonic.com/docs/", type: "free" },
                    { label: "Fiber Docs", url: "https://docs.gofiber.io/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "sql",
            position: { x: 750, y: 650 },
            data: {
                label: "SQL Databases",
                description: "Use database/sql with PostgreSQL/MySQL.",
                difficulty: "intermediate",
                resources: [
                    { label: "Go SQL Docs", url: "https://pkg.go.dev/database/sql", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "grpc",
            position: { x: 200, y: 780 },  // aligned under microservices
            data: {
                label: "gRPC",
                description: "High-performance RPC framework.",
                difficulty: "advanced",
                resources: [
                    { label: "gRPC Go Docs", url: "https://grpc.io/docs/languages/go/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "rest-api",
            position: { x: 500, y: 780 },
            data: {
                label: "REST API Development",
                description: "API design, middleware, authentication.",
                difficulty: "advanced",
                resources: [
                    { label: "REST Guide", url: "https://restfulapi.net/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "orm",
            position: { x: 750, y: 780 },
            data: {
                label: "ORM (GORM)",
                description: "Database abstraction and migrations.",
                difficulty: "advanced",
                resources: [
                    { label: "GORM Docs", url: "https://gorm.io/docs/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "testing",
            position: { x: 500, y: 910 },
            data: {
                label: "Testing",
                description: "Unit testing and benchmarking.",
                difficulty: "advanced",
                resources: [
                    { label: "Go Testing Docs", url: "https://pkg.go.dev/testing", type: "free" }
                ],
            },
        },

        {
            roadmapId: "golang",
            id: "docker",
            position: { x: 500, y: 1040 },
            data: {
                label: "Docker & Deployment",
                description: "Containerize and deploy Go apps.",
                difficulty: "advanced",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "golang", id: "e1", source: "go-basics", target: "data-structures" },
        { roadmapId: "golang", id: "e2", source: "data-structures", target: "interfaces" },
        { roadmapId: "golang", id: "e3", source: "interfaces", target: "goroutines" },
        { roadmapId: "golang", id: "e4", source: "interfaces", target: "channels" },
        { roadmapId: "golang", id: "e5", source: "goroutines", target: "http" },
        { roadmapId: "golang", id: "e6", source: "channels", target: "http" },
        { roadmapId: "golang", id: "e7", source: "http", target: "web-frameworks" },
        { roadmapId: "golang", id: "e8", source: "web-frameworks", target: "rest-api" },
        { roadmapId: "golang", id: "e9", source: "web-frameworks", target: "sql" },
        { roadmapId: "golang", id: "e10", source: "sql", target: "orm" },
        { roadmapId: "golang", id: "e11", source: "rest-api", target: "testing" },
        { roadmapId: "golang", id: "e12", source: "orm", target: "testing" },
        { roadmapId: "golang", id: "e13", source: "interfaces", target: "microservices" },
        { roadmapId: "golang", id: "e14", source: "microservices", target: "grpc" },
        { roadmapId: "golang", id: "e15", source: "testing", target: "docker" }
    ]
}
