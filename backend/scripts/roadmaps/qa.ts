export const qaRoadmap = {
    id: "qa",
    title: "QA Engineer",
    description: "Complete roadmap to becoming a professional QA engineer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "qa",
            id: "software-testing-basics",
            position: { x: 400, y: 0 },
            data: {
                label: "Software Testing Basics",
                description: "Understand SDLC, STLC, testing types and levels.",
                difficulty: "beginner",
                resources: [
                    { label: "Guru99 Testing Guide", url: "https://www.guru99.com/software-testing.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "qa",
            id: "manual-testing",
            position: { x: 400, y: 140 },
            data: {
                label: "Manual Testing",
                description: "Test cases, bug reports, test plans, test scenarios.",
                difficulty: "beginner",
                resources: [
                    { label: "ISTQB Foundation Syllabus", url: "https://www.istqb.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "qa",
            id: "api-testing",
            position: { x: 400, y: 280 },
            data: {
                label: "API Testing",
                description: "Test REST APIs using Postman and automation tools.",
                difficulty: "intermediate",
                resources: [
                    { label: "Postman Learning Center", url: "https://learning.postman.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "qa",
            id: "automation-basics",
            position: { x: 400, y: 420 },
            data: {
                label: "Automation Testing",
                description: "Learn Selenium / Cypress / Playwright basics.",
                difficulty: "intermediate",
                resources: [
                    { label: "Selenium Docs", url: "https://www.selenium.dev/documentation/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "qa",
            id: "programming",
            position: { x: 400, y: 560 },
            data: {
                label: "Programming for QA",
                description: "Learn Java or Python for writing automation scripts.",
                difficulty: "intermediate",
                resources: [
                    { label: "Python Docs", url: "https://docs.python.org/3/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "qa",
            id: "performance-testing",
            position: { x: 400, y: 700 },
            data: {
                label: "Performance Testing",
                description: "Load testing using JMeter and performance metrics.",
                difficulty: "advanced",
                resources: [
                    { label: "JMeter Docs", url: "https://jmeter.apache.org/usermanual/index.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "qa",
            id: "security-testing",
            position: { x: 400, y: 840 },
            data: {
                label: "Security Testing",
                description: "Basic OWASP testing and vulnerability scanning.",
                difficulty: "advanced",
                resources: [
                    { label: "OWASP Testing Guide", url: "https://owasp.org/www-project-web-security-testing-guide/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "qa",
            id: "ci-cd-integration",
            position: { x: 400, y: 980 },
            data: {
                label: "CI/CD Integration",
                description: "Integrate automation tests with CI pipelines.",
                difficulty: "advanced",
                resources: [
                    { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "qa", id: "e1", source: "software-testing-basics", target: "manual-testing" },
        { roadmapId: "qa", id: "e2", source: "manual-testing", target: "api-testing" },
        { roadmapId: "qa", id: "e3", source: "api-testing", target: "automation-basics" },
        { roadmapId: "qa", id: "e4", source: "automation-basics", target: "programming" },
        { roadmapId: "qa", id: "e5", source: "programming", target: "performance-testing" },
        { roadmapId: "qa", id: "e6", source: "performance-testing", target: "security-testing" },
        { roadmapId: "qa", id: "e7", source: "security-testing", target: "ci-cd-integration" }
    ]
}
