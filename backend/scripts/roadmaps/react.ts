export const reactRoadmap = {
    id: "react",
    title: "React Developer",
    description: "Complete roadmap to mastering React.js for modern web development",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "react",
            id: "javascript-advanced",
            position: { x: 400, y: 0 },
            data: {
                label: "Advanced JavaScript",
                description: "ES6+, closures, async/await, promises, modules, array methods.",
                difficulty: "beginner",
                resources: [
                    { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "react-basics",
            position: { x: 400, y: 130 },
            data: {
                label: "React Fundamentals",
                description: "JSX, components, props, state, events.",
                difficulty: "beginner",
                resources: [
                    { label: "React Official Docs", url: "https://react.dev/learn", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "hooks",
            position: { x: 400, y: 260 },
            data: {
                label: "React Hooks",
                description: "useState, useEffect, useRef, useContext, custom hooks.",
                difficulty: "intermediate",
                resources: [
                    { label: "React Hooks Guide", url: "https://react.dev/reference/react", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "routing",
            position: { x: 250, y: 390 },
            data: {
                label: "Routing",
                description: "React Router, navigation, protected routes.",
                difficulty: "intermediate",
                resources: [
                    { label: "React Router Docs", url: "https://reactrouter.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "forms",
            position: { x: 550, y: 390 },
            data: {
                label: "Forms & Validation",
                description: "Controlled components, form libraries, validation.",
                difficulty: "intermediate",
                resources: [
                    { label: "React Hook Form", url: "https://react-hook-form.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "state-management",
            position: { x: 400, y: 520 },
            data: {
                label: "State Management",
                description: "Context API, Redux Toolkit, Zustand.",
                difficulty: "intermediate",
                resources: [
                    { label: "Redux Toolkit Docs", url: "https://redux-toolkit.js.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "api-integration",
            position: { x: 400, y: 650 },
            data: {
                label: "API Integration",
                description: "Fetch, Axios, React Query, error handling.",
                difficulty: "intermediate",
                resources: [
                    { label: "TanStack Query Docs", url: "https://tanstack.com/query", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "performance",
            position: { x: 250, y: 780 },
            data: {
                label: "Performance Optimization",
                description: "Memoization, useMemo, useCallback, lazy loading.",
                difficulty: "advanced",
                resources: [
                    { label: "React Performance Guide", url: "https://react.dev/learn/optimizing-performance", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "testing",
            position: { x: 550, y: 780 },
            data: {
                label: "Testing React Apps",
                description: "Jest, React Testing Library, component testing.",
                difficulty: "advanced",
                resources: [
                    { label: "Testing Library Docs", url: "https://testing-library.com/docs/react-testing-library/intro/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "nextjs",
            position: { x: 400, y: 910 },
            data: {
                label: "Next.js (Production React)",
                description: "SSR, SSG, API routes, App Router.",
                difficulty: "advanced",
                resources: [
                    { label: "Next.js Docs", url: "https://nextjs.org/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "ui-libraries",
            position: { x: 250, y: 1040 },
            data: {
                label: "UI Libraries",
                description: "Material UI, ShadCN, Chakra UI.",
                difficulty: "intermediate",
                resources: [
                    { label: "MUI Docs", url: "https://mui.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "react",
            id: "deployment",
            position: { x: 550, y: 1040 },
            data: {
                label: "Deployment",
                description: "Vercel, Netlify, environment variables.",
                difficulty: "intermediate",
                resources: [
                    { label: "Vercel Docs", url: "https://vercel.com/docs", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "react", id: "e1", source: "javascript-advanced", target: "react-basics" },
        { roadmapId: "react", id: "e2", source: "react-basics", target: "hooks" },
        { roadmapId: "react", id: "e3", source: "hooks", target: "routing" },
        { roadmapId: "react", id: "e4", source: "hooks", target: "forms" },
        { roadmapId: "react", id: "e5", source: "routing", target: "state-management" },
        { roadmapId: "react", id: "e6", source: "forms", target: "state-management" },
        { roadmapId: "react", id: "e7", source: "state-management", target: "api-integration" },
        { roadmapId: "react", id: "e8", source: "api-integration", target: "performance" },
        { roadmapId: "react", id: "e9", source: "api-integration", target: "testing" },
        { roadmapId: "react", id: "e10", source: "performance", target: "nextjs" },
        { roadmapId: "react", id: "e11", source: "testing", target: "nextjs" },
        { roadmapId: "react", id: "e12", source: "nextjs", target: "ui-libraries" },
        { roadmapId: "react", id: "e13", source: "nextjs", target: "deployment" }
    ]
}
