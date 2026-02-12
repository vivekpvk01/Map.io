export const productManagerRoadmap = {
    id: "product-manager",
    title: "Product Manager",
    description: "Complete roadmap to becoming a professional Product Manager",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "product-manager",
            id: "product-thinking",
            position: { x: 400, y: 0 },
            data: {
                label: "Product Thinking",
                description: "Understand what makes a great product and how value is created.",
                difficulty: "beginner",
                resources: [
                    { label: "Product School Blog", url: "https://productschool.com/blog/", type: "free" },
                    { label: "SVPG Articles", url: "https://svpg.com/articles/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "user-research",
            position: { x: 400, y: 130 },
            data: {
                label: "User Research",
                description: "User interviews, surveys, persona creation, JTBD framework.",
                difficulty: "beginner",
                resources: [
                    { label: "Nielsen Norman Group", url: "https://www.nngroup.com/articles/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "market-analysis",
            position: { x: 400, y: 260 },
            data: {
                label: "Market & Competitive Analysis",
                description: "TAM/SAM/SOM, competitor research, positioning.",
                difficulty: "beginner",
                resources: [
                    { label: "Harvard Business Review Articles", url: "https://hbr.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "roadmapping",
            position: { x: 400, y: 390 },
            data: {
                label: "Product Roadmapping",
                description: "Define product vision, milestones, and strategic roadmap.",
                difficulty: "intermediate",
                resources: [
                    { label: "Atlassian Roadmap Guide", url: "https://www.atlassian.com/agile/product-management/product-roadmaps", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "requirements",
            position: { x: 400, y: 520 },
            data: {
                label: "PRDs & Requirements",
                description: "Writing Product Requirement Documents and user stories.",
                difficulty: "intermediate",
                resources: [
                    { label: "User Story Guide", url: "https://www.mountaingoatsoftware.com/agile/user-stories", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "agile",
            position: { x: 400, y: 650 },
            data: {
                label: "Agile & Scrum",
                description: "Scrum framework, sprint planning, backlog management.",
                difficulty: "intermediate",
                resources: [
                    { label: "Scrum Guide", url: "https://scrumguides.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "metrics",
            position: { x: 250, y: 780 },
            data: {
                label: "Product Metrics",
                description: "North Star Metric, AARRR funnel, KPIs.",
                difficulty: "advanced",
                resources: [
                    { label: "Amplitude Blog", url: "https://amplitude.com/blog", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "experimentation",
            position: { x: 550, y: 780 },
            data: {
                label: "A/B Testing & Experimentation",
                description: "Hypothesis testing, growth experiments, validation.",
                difficulty: "advanced",
                resources: [
                    { label: "Optimizely Experimentation Guide", url: "https://www.optimizely.com/optimization-glossary/ab-testing/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "stakeholder",
            position: { x: 400, y: 920 },
            data: {
                label: "Stakeholder Management",
                description: "Communicating with engineering, design, marketing, leadership.",
                difficulty: "advanced",
                resources: [
                    { label: "MindTools Stakeholder Guide", url: "https://www.mindtools.com/pages/article/newPPM_07.htm", type: "free" }
                ],
            },
        },
        {
            roadmapId: "product-manager",
            id: "launch",
            position: { x: 400, y: 1050 },
            data: {
                label: "Product Launch & GTM",
                description: "Go-to-market strategy, release planning, growth loops.",
                difficulty: "advanced",
                resources: [
                    { label: "HubSpot GTM Guide", url: "https://blog.hubspot.com/marketing/go-to-market-strategy", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "product-manager", id: "e1", source: "product-thinking", target: "user-research" },
        { roadmapId: "product-manager", id: "e2", source: "user-research", target: "market-analysis" },
        { roadmapId: "product-manager", id: "e3", source: "market-analysis", target: "roadmapping" },
        { roadmapId: "product-manager", id: "e4", source: "roadmapping", target: "requirements" },
        { roadmapId: "product-manager", id: "e5", source: "requirements", target: "agile" },
        { roadmapId: "product-manager", id: "e6", source: "agile", target: "metrics" },
        { roadmapId: "product-manager", id: "e7", source: "agile", target: "experimentation" },
        { roadmapId: "product-manager", id: "e8", source: "metrics", target: "stakeholder" },
        { roadmapId: "product-manager", id: "e9", source: "experimentation", target: "stakeholder" },
        { roadmapId: "product-manager", id: "e10", source: "stakeholder", target: "launch" }
    ]
}
