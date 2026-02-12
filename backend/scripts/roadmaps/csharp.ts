export const csharpRoadmap = {
    id: "csharp",
    title: "C# Developer",
    description: "Complete roadmap to becoming a professional C# and .NET developer",
    isOfficial: true,

    nodes: [
        // ===== MAIN VERTICAL FLOW =====
        {
            roadmapId: "csharp",
            id: "csharp-basics",
            position: { x: 500, y: 0 },
            data: {
                label: "C# Fundamentals",
                description: "Variables, loops, conditionals, methods.",
                difficulty: "beginner",
                resources: [
                    { label: "Microsoft C# Docs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "oop",
            position: { x: 500, y: 130 },
            data: {
                label: "Object-Oriented Programming",
                description: "Classes, inheritance, polymorphism.",
                difficulty: "beginner",
                resources: [
                    { label: "OOP Guide", url: "https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/object-oriented/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "collections",
            position: { x: 500, y: 260 },
            data: {
                label: "Collections & LINQ",
                description: "Lists, dictionaries, LINQ queries.",
                difficulty: "intermediate",
                resources: [
                    { label: "LINQ Docs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "async-await",
            position: { x: 500, y: 390 },
            data: {
                label: "Async / Await",
                description: "Asynchronous programming.",
                difficulty: "advanced",
                resources: [
                    { label: "Async Docs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/async/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "dotnet-core",
            position: { x: 500, y: 520 },
            data: {
                label: ".NET Core Fundamentals",
                description: "Understanding .NET runtime and project structure.",
                difficulty: "intermediate",
                resources: [
                    { label: ".NET Docs", url: "https://learn.microsoft.com/en-us/dotnet/core/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "aspnet-core",
            position: { x: 500, y: 650 },
            data: {
                label: "ASP.NET Core",
                description: "Build REST APIs.",
                difficulty: "advanced",
                resources: [
                    { label: "ASP.NET Docs", url: "https://learn.microsoft.com/en-us/aspnet/core/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "rest-api",
            position: { x: 500, y: 780 },
            data: {
                label: "REST API Development",
                description: "Authentication, JWT, API design.",
                difficulty: "advanced",
                resources: [
                    { label: "REST Guide", url: "https://restfulapi.net/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "testing",
            position: { x: 500, y: 910 },
            data: {
                label: "Testing (xUnit / NUnit)",
                description: "Unit & integration testing.",
                difficulty: "advanced",
                resources: [
                    { label: "xUnit Docs", url: "https://xunit.net/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "csharp",
            id: "deployment",
            position: { x: 500, y: 1040 },
            data: {
                label: "Docker & CI/CD",
                description: "Containerization and pipelines.",
                difficulty: "advanced",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        },

        // ===== RIGHT SIDE: DATABASE =====
        {
            roadmapId: "csharp",
            id: "entity-framework",
            position: { x: 750, y: 650 },
            data: {
                label: "Entity Framework Core",
                description: "ORM and database mapping.",
                difficulty: "advanced",
                resources: [
                    { label: "EF Core Docs", url: "https://learn.microsoft.com/en-us/ef/core/", type: "free" }
                ],
            },
        },

        // ===== RIGHT LOWER: CLOUD =====
        {
            roadmapId: "csharp",
            id: "azure",
            position: { x: 750, y: 910 },
            data: {
                label: "Azure Cloud",
                description: "Deploy .NET apps to Azure.",
                difficulty: "advanced",
                resources: [
                    { label: "Azure Docs", url: "https://learn.microsoft.com/en-us/azure/", type: "free" }
                ],
            },
        },

        // ===== LEFT SIDE: UNITY (Optional) =====
        {
            roadmapId: "csharp",
            id: "unity",
            position: { x: 250, y: 260 },
            data: {
                label: "Unity Game Development",
                description: "Build games using C#.",
                difficulty: "intermediate",
                resources: [
                    { label: "Unity Learn", url: "https://learn.unity.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        // main vertical flow
        { roadmapId: "csharp", id: "e1", source: "csharp-basics", target: "oop" },
        { roadmapId: "csharp", id: "e2", source: "oop", target: "collections" },
        { roadmapId: "csharp", id: "e3", source: "collections", target: "async-await" },
        { roadmapId: "csharp", id: "e4", source: "async-await", target: "dotnet-core" },
        { roadmapId: "csharp", id: "e5", source: "dotnet-core", target: "aspnet-core" },
        { roadmapId: "csharp", id: "e6", source: "aspnet-core", target: "rest-api" },
        { roadmapId: "csharp", id: "e7", source: "rest-api", target: "testing" },
        { roadmapId: "csharp", id: "e8", source: "testing", target: "deployment" },

        // side connections
        { roadmapId: "csharp", id: "e9", source: "aspnet-core", target: "entity-framework" },
        { roadmapId: "csharp", id: "e10", source: "testing", target: "azure" },
        { roadmapId: "csharp", id: "e11", source: "azure", target: "deployment" },

        // unity optional branch
        { roadmapId: "csharp", id: "e12", source: "collections", target: "unity" }
    ]
}
