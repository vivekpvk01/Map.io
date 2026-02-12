export const rustRoadmap = {
    id: "rust",
    title: "Rust Developer",
    description: "Complete roadmap to becoming a professional Rust developer for systems, backend, and high-performance applications",
    isOfficial: true,

    nodes: [
        // FOUNDATION
        {
            roadmapId: "rust",
            id: "rust-basics",
            position: { x: 500, y: 0 },
            data: {
                label: "Rust Fundamentals",
                description: "Variables, data types, functions, pattern matching.",
                difficulty: "beginner",
                resources: [
                    { label: "The Rust Book", url: "https://doc.rust-lang.org/book/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "ownership",
            position: { x: 500, y: 140 },
            data: {
                label: "Ownership & Borrowing",
                description: "Ownership rules, borrowing, references, lifetimes.",
                difficulty: "intermediate",
                resources: [
                    { label: "Ownership Chapter", url: "https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "structs-enums",
            position: { x: 500, y: 280 },
            data: {
                label: "Structs, Enums & Traits",
                description: "Custom types, traits, generics.",
                difficulty: "intermediate",
                resources: [
                    { label: "Rust Traits", url: "https://doc.rust-lang.org/book/ch10-02-traits.html", type: "free" }
                ],
            },
        },

        // LEFT COLUMN (Concurrency)
        {
            roadmapId: "rust",
            id: "threads",
            position: { x: 200, y: 420 },
            data: {
                label: "Threads & Concurrency",
                description: "std::thread, message passing.",
                difficulty: "advanced",
                resources: [
                    { label: "Rust Concurrency", url: "https://doc.rust-lang.org/book/ch16-00-concurrency.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "async-await",
            position: { x: 200, y: 560 },
            data: {
                label: "Async / Await (Tokio)",
                description: "Futures, async runtime.",
                difficulty: "advanced",
                resources: [
                    { label: "Async Rust Guide", url: "https://rust-lang.github.io/async-book/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "wasm",
            position: { x: 200, y: 820 },
            data: {
                label: "WebAssembly (WASM)",
                description: "Compile Rust to WebAssembly.",
                difficulty: "advanced",
                resources: [
                    { label: "Rust WASM Guide", url: "https://rustwasm.github.io/docs/book/", type: "free" }
                ],
            },
        },

        // CENTER COLUMN (Backend Core)
        {
            roadmapId: "rust",
            id: "cargo",
            position: { x: 500, y: 420 },
            data: {
                label: "Cargo & Crates",
                description: "Package management and project structure.",
                difficulty: "beginner",
                resources: [
                    { label: "Cargo Docs", url: "https://doc.rust-lang.org/cargo/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "web-frameworks",
            position: { x: 500, y: 560 },
            data: {
                label: "Web Frameworks (Actix / Rocket / Axum)",
                description: "Build backend APIs.",
                difficulty: "intermediate",
                resources: [
                    { label: "Actix Docs", url: "https://actix.rs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "rest-api",
            position: { x: 500, y: 700 },
            data: {
                label: "REST API Development",
                description: "Routing, middleware, authentication.",
                difficulty: "advanced",
                resources: [
                    { label: "REST Guide", url: "https://restfulapi.net/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "testing",
            position: { x: 500, y: 840 },
            data: {
                label: "Testing",
                description: "Unit & integration testing.",
                difficulty: "advanced",
                resources: [
                    { label: "Rust Testing", url: "https://doc.rust-lang.org/book/ch11-00-testing.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "docker",
            position: { x: 500, y: 980 },
            data: {
                label: "Docker & Deployment",
                description: "Containerization and deployment.",
                difficulty: "advanced",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        },

        // RIGHT COLUMN (Database)
        {
            roadmapId: "rust",
            id: "sql",
            position: { x: 900, y: 560 },
            data: {
                label: "SQL Databases",
                description: "PostgreSQL / MySQL integration.",
                difficulty: "intermediate",
                resources: [
                    { label: "SQLx Docs", url: "https://docs.rs/sqlx/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "rust",
            id: "orm",
            position: { x: 800, y: 700 },
            data: {
                label: "ORM (Diesel / SeaORM)",
                description: "Database abstraction & migrations.",
                difficulty: "advanced",
                resources: [
                    { label: "Diesel Docs", url: "https://diesel.rs/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "rust", id: "e1", source: "rust-basics", target: "ownership" },
        { roadmapId: "rust", id: "e2", source: "ownership", target: "structs-enums" },

        { roadmapId: "rust", id: "e3", source: "structs-enums", target: "threads" },
        { roadmapId: "rust", id: "e4", source: "structs-enums", target: "cargo" },

        { roadmapId: "rust", id: "e5", source: "threads", target: "async-await" },
        { roadmapId: "rust", id: "e6", source: "cargo", target: "web-frameworks" },

        { roadmapId: "rust", id: "e7", source: "web-frameworks", target: "rest-api" },
        { roadmapId: "rust", id: "e8", source: "web-frameworks", target: "sql" },

        { roadmapId: "rust", id: "e9", source: "sql", target: "orm" },
        { roadmapId: "rust", id: "e10", source: "rest-api", target: "testing" },
        { roadmapId: "rust", id: "e11", source: "orm", target: "testing" },

        { roadmapId: "rust", id: "e12", source: "async-await", target: "wasm" },
        { roadmapId: "rust", id: "e13", source: "testing", target: "docker" }
    ]
}
