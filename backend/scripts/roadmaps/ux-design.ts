export const uxDesignRoadmap = {
    id: "ux-design",
    title: "UX Design",
    description: "Complete roadmap to becoming a professional UX Designer",
    isOfficial: true,

    nodes: [

        // =====================
        // FOUNDATION
        // =====================

        {
            roadmapId: "ux-design",
            id: "design-basics",
            position: { x: 400, y: 0 },
            data: {
                label: "Design Fundamentals",
                description: "Color theory, typography, layout, spacing, visual hierarchy.",
                difficulty: "beginner",
                resources: [
                    { label: "Refactoring UI", url: "https://www.refactoringui.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "ux-design",
            id: "psychology",
            position: { x: 150, y: 140 },
            data: {
                label: "Design Psychology",
                description: "User behavior, cognitive biases, human-centered design.",
                difficulty: "beginner",
                resources: [
                    { label: "Interaction Design Foundation", url: "https://www.interaction-design.org/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "ux-design",
            id: "tools",
            position: { x: 650, y: 140 },
            data: {
                label: "Design Tools (Figma)",
                description: "Wireframing, prototyping, components, auto-layout.",
                difficulty: "beginner",
                resources: [
                    { label: "Figma Docs", url: "https://help.figma.com/", type: "free" }
                ],
            },
        },

        // =====================
        // RESEARCH PHASE
        // =====================

        {
            roadmapId: "ux-design",
            id: "ux-research",
            position: { x: 400, y: 280 },
            data: {
                label: "UX Research",
                description: "User interviews, surveys, usability testing.",
                difficulty: "intermediate",
                resources: [
                    { label: "NN Group UX Research", url: "https://www.nngroup.com/articles/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "ux-design",
            id: "personas",
            position: { x: 150, y: 420 },
            data: {
                label: "User Personas & Journey Maps",
                description: "Empathy mapping, journey mapping.",
                difficulty: "intermediate",
                resources: [
                    { label: "UX Planet Guide", url: "https://uxplanet.org/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "ux-design",
            id: "information-architecture",
            position: { x: 650, y: 420 },
            data: {
                label: "Information Architecture",
                description: "Content structuring, navigation systems.",
                difficulty: "intermediate",
                resources: [
                    { label: "IA Basics", url: "https://www.usability.gov/what-and-why/information-architecture.html", type: "free" }
                ],
            },
        },

        // =====================
        // DESIGN EXECUTION
        // =====================

        {
            roadmapId: "ux-design",
            id: "wireframing",
            position: { x: 400, y: 580 },
            data: {
                label: "Wireframing & Prototyping",
                description: "Low-fidelity to high-fidelity prototypes.",
                difficulty: "intermediate",
                resources: [
                    { label: "Figma Prototyping", url: "https://help.figma.com/hc/en-us/articles/360040315773", type: "free" }
                ],
            },
        },

        {
            roadmapId: "ux-design",
            id: "design-systems",
            position: { x: 400, y: 720 },
            data: {
                label: "Design Systems",
                description: "Component systems, consistency, scalability.",
                difficulty: "advanced",
                resources: [
                    { label: "Material Design System", url: "https://m3.material.io/", type: "free" }
                ],
            },
        },

        // =====================
        // ADVANCED UX
        // =====================

        {
            roadmapId: "ux-design",
            id: "accessibility",
            position: { x: 150, y: 860 },
            data: {
                label: "Accessibility (A11Y)",
                description: "WCAG standards, inclusive design.",
                difficulty: "advanced",
                resources: [
                    { label: "WCAG Guidelines", url: "https://www.w3.org/WAI/standards-guidelines/wcag/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "ux-design",
            id: "usability-testing",
            position: { x: 650, y: 860 },
            data: {
                label: "Usability Testing",
                description: "A/B testing, heatmaps, behavioral analytics.",
                difficulty: "advanced",
                resources: [
                    { label: "Hotjar UX Blog", url: "https://www.hotjar.com/blog/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "ux-design",
            id: "ux-strategy",
            position: { x: 400, y: 1000 },
            data: {
                label: "UX Strategy & Product Thinking",
                description: "Business alignment, metrics, user-first product design.",
                difficulty: "advanced",
                resources: [
                    { label: "Product Strategy Guide", url: "https://www.productplan.com/learn/product-strategy/", type: "free" }
                ],
            },
        }
    ],

    edges: [

        // Foundation
        { roadmapId: "ux-design", id: "e1", source: "design-basics", target: "psychology" },
        { roadmapId: "ux-design", id: "e2", source: "design-basics", target: "tools" },

        // Research
        { roadmapId: "ux-design", id: "e3", source: "psychology", target: "ux-research" },
        { roadmapId: "ux-design", id: "e4", source: "tools", target: "ux-research" },

        { roadmapId: "ux-design", id: "e5", source: "ux-research", target: "personas" },
        { roadmapId: "ux-design", id: "e6", source: "ux-research", target: "information-architecture" },

        // Execution
        { roadmapId: "ux-design", id: "e7", source: "personas", target: "wireframing" },
        { roadmapId: "ux-design", id: "e8", source: "information-architecture", target: "wireframing" },

        { roadmapId: "ux-design", id: "e9", source: "wireframing", target: "design-systems" },

        // Advanced
        { roadmapId: "ux-design", id: "e10", source: "design-systems", target: "accessibility" },
        { roadmapId: "ux-design", id: "e11", source: "design-systems", target: "usability-testing" },

        { roadmapId: "ux-design", id: "e12", source: "accessibility", target: "ux-strategy" },
        { roadmapId: "ux-design", id: "e13", source: "usability-testing", target: "ux-strategy" }
    ]
}
