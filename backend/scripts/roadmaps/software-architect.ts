export const softwareArchitectRoadmap = {
    id: "software-architect",
    title: "Software Architect",
    description: "Complete roadmap to becoming a professional Software Architect",
    isOfficial: true,

    nodes: [

        // ======================
        // FOUNDATION LAYER
        // ======================
        {
            roadmapId: "software-architect",
            id: "programming-foundations",
            position: { x: 400, y: 0 },
            data: {
                label: "Advanced Programming",
                description: "Deep understanding of OOP, SOLID principles, design patterns.",
                difficulty: "intermediate",
                resources: [
                    { label: "Refactoring Guru - Design Patterns", url: "https://refactoring.guru/design-patterns", type: "free" }
                ],
            },
        },

        {
            roadmapId: "software-architect",
            id: "data-structures",
            position: { x: 150, y: 140 },
            data: {
                label: "Data Structures & Algorithms",
                description: "Complexity analysis, trees, graphs, optimization.",
                difficulty: "advanced",
                resources: [
                    { label: "GeeksForGeeks DSA", url: "https://www.geeksforgeeks.org/data-structures/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "software-architect",
            id: "system-design-basics",
            position: { x: 650, y: 140 },
            data: {
                label: "System Design Basics",
                description: "Scalability, latency, throughput, CAP theorem.",
                difficulty: "advanced",
                resources: [
                    { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "free" }
                ],
            },
        },

        // ======================
        // ARCHITECTURE PATTERNS
        // ======================
        {
            roadmapId: "software-architect",
            id: "architecture-patterns",
            position: { x: 400, y: 300 },
            data: {
                label: "Architecture Patterns",
                description: "Monolith, Microservices, Event-driven, Clean Architecture.",
                difficulty: "advanced",
                resources: [
                    { label: "Microsoft Architecture Guide", url: "https://learn.microsoft.com/en-us/azure/architecture/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "software-architect",
            id: "distributed-systems",
            position: { x: 150, y: 460 },
            data: {
                label: "Distributed Systems",
                description: "Consensus, replication, partitioning, eventual consistency.",
                difficulty: "advanced",
                resources: [
                    { label: "Distributed Systems Notes", url: "https://martinfowler.com/articles/patterns-of-distributed-systems/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "software-architect",
            id: "api-strategy",
            position: { x: 650, y: 460 },
            data: {
                label: "API Strategy",
                description: "REST vs GraphQL, versioning, gateway pattern.",
                difficulty: "advanced",
                resources: [
                    { label: "RESTful API Guide", url: "https://restfulapi.net/", type: "free" }
                ],
            },
        },

        // ======================
        // INFRASTRUCTURE LAYER
        // ======================
        {
            roadmapId: "software-architect",
            id: "cloud-architecture",
            position: { x: 400, y: 620 },
            data: {
                label: "Cloud Architecture",
                description: "AWS/GCP/Azure architecture, serverless, scalability.",
                difficulty: "advanced",
                resources: [
                    { label: "AWS Architecture Center", url: "https://aws.amazon.com/architecture/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "software-architect",
            id: "security-architecture",
            position: { x: 150, y: 780 },
            data: {
                label: "Security Architecture",
                description: "Threat modeling, zero trust, encryption strategies.",
                difficulty: "advanced",
                resources: [
                    { label: "OWASP Top 10", url: "https://owasp.org/www-project-top-ten/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "software-architect",
            id: "observability",
            position: { x: 650, y: 780 },
            data: {
                label: "Observability & Reliability",
                description: "Monitoring, logging, SRE principles.",
                difficulty: "advanced",
                resources: [
                    { label: "Google SRE Book", url: "https://sre.google/books/", type: "free" }
                ],
            },
        },

        // ======================
        // LEADERSHIP & DECISION MAKING
        // ======================
        {
            roadmapId: "software-architect",
            id: "technical-leadership",
            position: { x: 400, y: 940 },
            data: {
                label: "Technical Leadership",
                description: "Trade-offs, decision frameworks, documentation.",
                difficulty: "advanced",
                resources: [
                    { label: "Architecture Decision Records", url: "https://adr.github.io/", type: "free" }
                ],
            },
        }
    ],

    edges: [

        // Foundation merging
        { roadmapId: "software-architect", id: "e1", source: "programming-foundations", target: "data-structures" },
        { roadmapId: "software-architect", id: "e2", source: "programming-foundations", target: "system-design-basics" },

        // Into architecture patterns
        { roadmapId: "software-architect", id: "e3", source: "data-structures", target: "architecture-patterns" },
        { roadmapId: "software-architect", id: "e4", source: "system-design-basics", target: "architecture-patterns" },

        // Branch into distributed & API
        { roadmapId: "software-architect", id: "e5", source: "architecture-patterns", target: "distributed-systems" },
        { roadmapId: "software-architect", id: "e6", source: "architecture-patterns", target: "api-strategy" },

        // Merge into cloud
        { roadmapId: "software-architect", id: "e7", source: "distributed-systems", target: "cloud-architecture" },
        { roadmapId: "software-architect", id: "e8", source: "api-strategy", target: "cloud-architecture" },

        // Infra branches
        { roadmapId: "software-architect", id: "e9", source: "cloud-architecture", target: "security-architecture" },
        { roadmapId: "software-architect", id: "e10", source: "cloud-architecture", target: "observability" },

        // Final merge
        { roadmapId: "software-architect", id: "e11", source: "security-architecture", target: "technical-leadership" },
        { roadmapId: "software-architect", id: "e12", source: "observability", target: "technical-leadership" }
    ]
}
