export const vueRoadmap = {
    id: "vue",
    title: "Vue.js Developer",
    description: "Complete roadmap to mastering Vue.js for modern frontend development",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "vue",
            id: "javascript-advanced",
            position: { x: 400, y: 0 },
            data: {
                label: "Advanced JavaScript",
                description: "ES6+, modules, async/await, closures, array methods.",
                difficulty: "beginner",
                resources: [
                    { label: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "vue-basics",
            position: { x: 400, y: 130 },
            data: {
                label: "Vue Fundamentals",
                description: "Reactivity, template syntax, directives, components.",
                difficulty: "beginner",
                resources: [
                    { label: "Vue Official Docs", url: "https://vuejs.org/guide/introduction.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "composition-api",
            position: { x: 400, y: 260 },
            data: {
                label: "Composition API",
                description: "setup(), refs, reactive, lifecycle hooks.",
                difficulty: "intermediate",
                resources: [
                    { label: "Composition API Guide", url: "https://vuejs.org/guide/extras/composition-api-faq.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "routing",
            position: { x: 250, y: 390 },
            data: {
                label: "Vue Router",
                description: "Routing, navigation guards, dynamic routes.",
                difficulty: "intermediate",
                resources: [
                    { label: "Vue Router Docs", url: "https://router.vuejs.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "forms",
            position: { x: 550, y: 390 },
            data: {
                label: "Forms & Validation",
                description: "v-model, validation libraries, handling inputs.",
                difficulty: "intermediate",
                resources: [
                    { label: "VeeValidate", url: "https://vee-validate.logaretm.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "state-management",
            position: { x: 400, y: 520 },
            data: {
                label: "State Management",
                description: "Pinia (recommended), Vuex (legacy).",
                difficulty: "intermediate",
                resources: [
                    { label: "Pinia Docs", url: "https://pinia.vuejs.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "api-integration",
            position: { x: 400, y: 650 },
            data: {
                label: "API Integration",
                description: "Axios, fetch, error handling, composables.",
                difficulty: "intermediate",
                resources: [
                    { label: "Axios Docs", url: "https://axios-http.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "performance",
            position: { x: 250, y: 780 },
            data: {
                label: "Performance Optimization",
                description: "Code splitting, lazy loading, computed vs watchers.",
                difficulty: "advanced",
                resources: [
                    { label: "Vue Performance Guide", url: "https://vuejs.org/guide/best-practices/performance.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "testing",
            position: { x: 550, y: 780 },
            data: {
                label: "Testing Vue Apps",
                description: "Vitest, Vue Test Utils, component testing.",
                difficulty: "advanced",
                resources: [
                    { label: "Vue Test Utils", url: "https://test-utils.vuejs.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "nuxt",
            position: { x: 400, y: 910 },
            data: {
                label: "Nuxt.js (Production Vue)",
                description: "SSR, SSG, server routes, deployment.",
                difficulty: "advanced",
                resources: [
                    { label: "Nuxt Docs", url: "https://nuxt.com/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "ui-libraries",
            position: { x: 250, y: 1040 },
            data: {
                label: "UI Libraries",
                description: "Vuetify, Element Plus, Tailwind with Vue.",
                difficulty: "intermediate",
                resources: [
                    { label: "Vuetify Docs", url: "https://vuetifyjs.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "vue",
            id: "deployment",
            position: { x: 550, y: 1040 },
            data: {
                label: "Deployment",
                description: "Vercel, Netlify, CI/CD pipelines.",
                difficulty: "intermediate",
                resources: [
                    { label: "Netlify Docs", url: "https://docs.netlify.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "vue", id: "e1", source: "javascript-advanced", target: "vue-basics" },
        { roadmapId: "vue", id: "e2", source: "vue-basics", target: "composition-api" },
        { roadmapId: "vue", id: "e3", source: "composition-api", target: "routing" },
        { roadmapId: "vue", id: "e4", source: "composition-api", target: "forms" },
        { roadmapId: "vue", id: "e5", source: "routing", target: "state-management" },
        { roadmapId: "vue", id: "e6", source: "forms", target: "state-management" },
        { roadmapId: "vue", id: "e7", source: "state-management", target: "api-integration" },
        { roadmapId: "vue", id: "e8", source: "api-integration", target: "performance" },
        { roadmapId: "vue", id: "e9", source: "api-integration", target: "testing" },
        { roadmapId: "vue", id: "e10", source: "performance", target: "nuxt" },
        { roadmapId: "vue", id: "e11", source: "testing", target: "nuxt" },
        { roadmapId: "vue", id: "e12", source: "nuxt", target: "ui-libraries" },
        { roadmapId: "vue", id: "e13", source: "nuxt", target: "deployment" }
    ]
}
