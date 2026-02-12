export const engineeringManagerRoadmap = {
    id: "engineering-manager",
    title: "Engineering Manager",
    description: "Complete roadmap to becoming a high-impact Engineering Manager",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "engineering-manager",
            id: "technical-foundation",
            position: { x: 400, y: 0 },
            data: {
                label: "Strong Technical Foundation",
                description: "Deep understanding of software systems, architecture, and development practices.",
                difficulty: "beginner",
                resources: [
                    { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "people-management",
            position: { x: 400, y: 130 },
            data: {
                label: "People Management",
                description: "1:1s, feedback, mentoring, performance reviews.",
                difficulty: "beginner",
                resources: [
                    { label: "Manager's Path Notes", url: "https://charity.wtf/the-manager-s-path/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "communication",
            position: { x: 400, y: 260 },
            data: {
                label: "Communication & Alignment",
                description: "Cross-functional communication with product, design, leadership.",
                difficulty: "beginner",
                resources: [
                    { label: "Radical Candor Summary", url: "https://www.radicalcandor.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "project-management",
            position: { x: 400, y: 390 },
            data: {
                label: "Project Management",
                description: "Sprint planning, roadmap alignment, delivery tracking.",
                difficulty: "intermediate",
                resources: [
                    { label: "Atlassian Agile Guide", url: "https://www.atlassian.com/agile", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "hiring",
            position: { x: 250, y: 520 },
            data: {
                label: "Hiring & Team Building",
                description: "Interviewing, hiring strategy, building high-performing teams.",
                difficulty: "intermediate",
                resources: [
                    { label: "Google Hiring Guide", url: "https://rework.withgoogle.com/guides/hiring-process/steps/introduction/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "technical-decision",
            position: { x: 550, y: 520 },
            data: {
                label: "Technical Decision Making",
                description: "Trade-offs, architectural reviews, scaling decisions.",
                difficulty: "intermediate",
                resources: [
                    { label: "Architecture Decision Records", url: "https://adr.github.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "performance-management",
            position: { x: 400, y: 660 },
            data: {
                label: "Performance Management",
                description: "Career ladders, goal setting, growth planning.",
                difficulty: "advanced",
                resources: [
                    { label: "Engineering Career Frameworks", url: "https://progression.fyi/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "scaling-teams",
            position: { x: 400, y: 790 },
            data: {
                label: "Scaling Engineering Teams",
                description: "Org design, squad models, scaling processes.",
                difficulty: "advanced",
                resources: [
                    { label: "Spotify Engineering Model", url: "https://blog.crisp.se/wp-content/uploads/2012/11/SpotifyScaling.pdf", type: "free" }
                ],
            },
        },
        {
            roadmapId: "engineering-manager",
            id: "strategy",
            position: { x: 400, y: 920 },
            data: {
                label: "Engineering Strategy",
                description: "Long-term technical vision, platform thinking, business alignment.",
                difficulty: "advanced",
                resources: [
                    { label: "SVPG Strategy Articles", url: "https://svpg.com/articles/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "engineering-manager", id: "e1", source: "technical-foundation", target: "people-management" },
        { roadmapId: "engineering-manager", id: "e2", source: "people-management", target: "communication" },
        { roadmapId: "engineering-manager", id: "e3", source: "communication", target: "project-management" },
        { roadmapId: "engineering-manager", id: "e4", source: "project-management", target: "hiring" },
        { roadmapId: "engineering-manager", id: "e5", source: "project-management", target: "technical-decision" },
        { roadmapId: "engineering-manager", id: "e6", source: "hiring", target: "performance-management" },
        { roadmapId: "engineering-manager", id: "e7", source: "technical-decision", target: "performance-management" },
        { roadmapId: "engineering-manager", id: "e8", source: "performance-management", target: "scaling-teams" },
        { roadmapId: "engineering-manager", id: "e9", source: "scaling-teams", target: "strategy" }
    ]
}
