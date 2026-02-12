export const developerRelationsRoadmap = {
    id: "developer-relations",
    title: "Developer Relations",
    description: "Complete roadmap to becoming a professional Developer Relations engineer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "developer-relations",
            id: "technical-foundation",
            position: { x: 400, y: 0 },
            data: {
                label: "Strong Technical Foundation",
                description: "Deep understanding of software engineering and APIs.",
                difficulty: "beginner",
                resources: [
                    { label: "System Design Primer", url: "https://github.com/donnemartin/system-design-primer", type: "free" }
                ],
            },
        },
        {
            roadmapId: "developer-relations",
            id: "communication",
            position: { x: 400, y: 130 },
            data: {
                label: "Technical Communication",
                description: "Explain complex technical topics clearly through blogs, talks, and videos.",
                difficulty: "beginner",
                resources: [
                    { label: "Write the Docs", url: "https://www.writethedocs.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "developer-relations",
            id: "content-creation",
            position: { x: 400, y: 260 },
            data: {
                label: "Content Creation",
                description: "Technical blogs, tutorials, demos, documentation.",
                difficulty: "intermediate",
                resources: [
                    { label: "Dev.to", url: "https://dev.to/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "developer-relations",
            id: "public-speaking",
            position: { x: 250, y: 390 },
            data: {
                label: "Public Speaking",
                description: "Conferences, webinars, meetups.",
                difficulty: "intermediate",
                resources: [
                    { label: "Speaker Deck", url: "https://speakerdeck.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "developer-relations",
            id: "community-building",
            position: { x: 550, y: 390 },
            data: {
                label: "Community Building",
                description: "Engage developers via Discord, GitHub, Twitter, forums.",
                difficulty: "intermediate",
                resources: [
                    { label: "GitHub Community Guide", url: "https://docs.github.com/en/communities", type: "free" }
                ],
            },
        },
        {
            roadmapId: "developer-relations",
            id: "api-evangelism",
            position: { x: 400, y: 520 },
            data: {
                label: "API Evangelism",
                description: "Promote APIs with examples, SDKs, sample projects.",
                difficulty: "advanced",
                resources: [
                    { label: "RESTful API Guide", url: "https://restfulapi.net/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "developer-relations",
            id: "feedback-loop",
            position: { x: 400, y: 650 },
            data: {
                label: "Product Feedback Loop",
                description: "Collect developer feedback and communicate with product teams.",
                difficulty: "advanced",
                resources: [
                    { label: "Product Feedback Best Practices", url: "https://www.productplan.com/glossary/feedback-loop/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "developer-relations",
            id: "metrics",
            position: { x: 400, y: 780 },
            data: {
                label: "DevRel Metrics & Impact",
                description: "Measure adoption, engagement, and community growth.",
                difficulty: "advanced",
                resources: [
                    { label: "DevRel Collective", url: "https://devrelcollective.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "developer-relations", id: "e1", source: "technical-foundation", target: "communication" },
        { roadmapId: "developer-relations", id: "e2", source: "communication", target: "content-creation" },
        { roadmapId: "developer-relations", id: "e3", source: "content-creation", target: "public-speaking" },
        { roadmapId: "developer-relations", id: "e4", source: "content-creation", target: "community-building" },
        { roadmapId: "developer-relations", id: "e5", source: "public-speaking", target: "api-evangelism" },
        { roadmapId: "developer-relations", id: "e6", source: "community-building", target: "api-evangelism" },
        { roadmapId: "developer-relations", id: "e7", source: "api-evangelism", target: "feedback-loop" },
        { roadmapId: "developer-relations", id: "e8", source: "feedback-loop", target: "metrics" }
    ]
}
