export const devopsRoadmap = {
    id: "devops",
    title: "DevOps Engineer",
    description: "Complete roadmap to becoming a professional DevOps engineer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "devops",
            id: "linux",
            position: { x: 400, y: 0 },
            data: {
                label: "Linux & Terminal",
                description: "Master Linux commands, shell scripting, process management.",
                difficulty: "beginner",
                resources: [
                    { label: "Linux Journey", url: "https://linuxjourney.com/", type: "free" },
                    { label: "Ubuntu Docs", url: "https://ubuntu.com/tutorials", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "git",
            position: { x: 400, y: 120 },
            data: {
                label: "Git & GitHub",
                description: "Version control and collaboration workflows.",
                difficulty: "beginner",
                resources: [
                    { label: "Git Docs", url: "https://git-scm.com/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "networking",
            position: { x: 400, y: 240 },
            data: {
                label: "Networking Basics",
                description: "DNS, HTTP, TCP/IP, load balancing.",
                difficulty: "beginner",
                resources: [
                    { label: "MDN Networking", url: "https://developer.mozilla.org/en-US/docs/Learn/Common_questions/How_does_the_Internet_work", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "docker",
            position: { x: 400, y: 360 },
            data: {
                label: "Docker",
                description: "Containerization and image management.",
                difficulty: "intermediate",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "kubernetes",
            position: { x: 400, y: 480 },
            data: {
                label: "Kubernetes",
                description: "Container orchestration and cluster management.",
                difficulty: "advanced",
                resources: [
                    { label: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "ci-cd",
            position: { x: 400, y: 600 },
            data: {
                label: "CI/CD",
                description: "Automate build, test, and deployment pipelines.",
                difficulty: "intermediate",
                resources: [
                    { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "cloud",
            position: { x: 400, y: 720 },
            data: {
                label: "Cloud Platforms",
                description: "AWS, GCP, Azure fundamentals.",
                difficulty: "intermediate",
                resources: [
                    { label: "AWS Docs", url: "https://docs.aws.amazon.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "iac",
            position: { x: 400, y: 840 },
            data: {
                label: "Infrastructure as Code",
                description: "Terraform, CloudFormation basics.",
                difficulty: "advanced",
                resources: [
                    { label: "Terraform Docs", url: "https://developer.hashicorp.com/terraform/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "devops",
            id: "monitoring",
            position: { x: 400, y: 960 },
            data: {
                label: "Monitoring & Logging",
                description: "Prometheus, Grafana, ELK stack.",
                difficulty: "advanced",
                resources: [
                    { label: "Prometheus Docs", url: "https://prometheus.io/docs/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "devops", id: "e1", source: "linux", target: "git" },
        { roadmapId: "devops", id: "e2", source: "git", target: "networking" },
        { roadmapId: "devops", id: "e3", source: "networking", target: "docker" },
        { roadmapId: "devops", id: "e4", source: "docker", target: "kubernetes" },
        { roadmapId: "devops", id: "e5", source: "kubernetes", target: "ci-cd" },
        { roadmapId: "devops", id: "e6", source: "ci-cd", target: "cloud" },
        { roadmapId: "devops", id: "e7", source: "cloud", target: "iac" },
        { roadmapId: "devops", id: "e8", source: "iac", target: "monitoring" }
    ]
}
