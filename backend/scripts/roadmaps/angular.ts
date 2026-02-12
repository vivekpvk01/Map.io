export const angularRoadmap = {
    id: "angular",
    title: "Angular Developer",
    description: "Complete roadmap to mastering Angular for enterprise-scale applications",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "angular",
            id: "typescript",
            position: { x: 400, y: 0 },
            data: {
                label: "TypeScript Fundamentals",
                description: "Types, interfaces, generics, decorators, modules.",
                difficulty: "beginner",
                resources: [
                    { label: "TypeScript Docs", url: "https://www.typescriptlang.org/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "angular-basics",
            position: { x: 400, y: 130 },
            data: {
                label: "Angular Fundamentals",
                description: "Components, modules, templates, data binding.",
                difficulty: "beginner",
                resources: [
                    { label: "Angular Official Docs", url: "https://angular.io/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "dependency-injection",
            position: { x: 400, y: 260 },
            data: {
                label: "Dependency Injection",
                description: "Services, providers, hierarchical injectors.",
                difficulty: "intermediate",
                resources: [
                    { label: "Angular DI Guide", url: "https://angular.io/guide/dependency-injection", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "routing",
            position: { x: 250, y: 390 },
            data: {
                label: "Angular Router",
                description: "Routes, guards, lazy loading modules.",
                difficulty: "intermediate",
                resources: [
                    { label: "Angular Router Docs", url: "https://angular.io/guide/router", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "forms",
            position: { x: 550, y: 390 },
            data: {
                label: "Forms (Reactive & Template)",
                description: "Reactive forms, validation, FormBuilder.",
                difficulty: "intermediate",
                resources: [
                    { label: "Angular Forms Guide", url: "https://angular.io/guide/forms-overview", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "http-client",
            position: { x: 400, y: 520 },
            data: {
                label: "HTTP Client & APIs",
                description: "HttpClient, interceptors, error handling.",
                difficulty: "intermediate",
                resources: [
                    { label: "Angular HTTP Guide", url: "https://angular.io/guide/http", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "rxjs",
            position: { x: 400, y: 650 },
            data: {
                label: "RxJS & Observables",
                description: "Streams, operators, subjects, reactive patterns.",
                difficulty: "advanced",
                resources: [
                    { label: "RxJS Docs", url: "https://rxjs.dev/guide/overview", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "state-management",
            position: { x: 250, y: 780 },
            data: {
                label: "State Management (NgRx)",
                description: "Store, reducers, effects, actions.",
                difficulty: "advanced",
                resources: [
                    { label: "NgRx Docs", url: "https://ngrx.io/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "performance",
            position: { x: 550, y: 780 },
            data: {
                label: "Performance Optimization",
                description: "Change detection strategy, lazy loading, AOT.",
                difficulty: "advanced",
                resources: [
                    { label: "Angular Performance Guide", url: "https://angular.io/guide/deployment#performance-optimization", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "testing",
            position: { x: 400, y: 910 },
            data: {
                label: "Testing Angular Apps",
                description: "Jasmine, Karma, unit testing, component testing.",
                difficulty: "advanced",
                resources: [
                    { label: "Angular Testing Guide", url: "https://angular.io/guide/testing", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "angular-material",
            position: { x: 250, y: 1040 },
            data: {
                label: "Angular Material",
                description: "UI components, theming, accessibility.",
                difficulty: "intermediate",
                resources: [
                    { label: "Angular Material Docs", url: "https://material.angular.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "angular",
            id: "deployment",
            position: { x: 550, y: 1040 },
            data: {
                label: "Build & Deployment",
                description: "Angular CLI, production builds, CI/CD.",
                difficulty: "intermediate",
                resources: [
                    { label: "Angular Deployment Guide", url: "https://angular.io/guide/deployment", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "angular", id: "e1", source: "typescript", target: "angular-basics" },
        { roadmapId: "angular", id: "e2", source: "angular-basics", target: "dependency-injection" },
        { roadmapId: "angular", id: "e3", source: "dependency-injection", target: "routing" },
        { roadmapId: "angular", id: "e4", source: "dependency-injection", target: "forms" },
        { roadmapId: "angular", id: "e5", source: "routing", target: "http-client" },
        { roadmapId: "angular", id: "e6", source: "forms", target: "http-client" },
        { roadmapId: "angular", id: "e7", source: "http-client", target: "rxjs" },
        { roadmapId: "angular", id: "e8", source: "rxjs", target: "state-management" },
        { roadmapId: "angular", id: "e9", source: "rxjs", target: "performance" },
        { roadmapId: "angular", id: "e10", source: "state-management", target: "testing" },
        { roadmapId: "angular", id: "e11", source: "performance", target: "testing" },
        { roadmapId: "angular", id: "e12", source: "testing", target: "angular-material" },
        { roadmapId: "angular", id: "e13", source: "angular-material", target: "deployment" }
    ]
}
