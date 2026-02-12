export const mlopsRoadmap = {
    id: "mlops",
    title: "MLOps Engineer",
    description: "Complete roadmap to becoming a professional MLOps engineer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "mlops",
            id: "python",
            position: { x: 400, y: 0 },
            data: {
                label: "Python for ML",
                description: "Strong Python fundamentals for ML pipelines.",
                difficulty: "beginner",
                resources: [
                    { label: "Python Docs", url: "https://docs.python.org/3/", type: "free" },
                    { label: "Real Python", url: "https://realpython.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "ml-basics",
            position: { x: 400, y: 120 },
            data: {
                label: "Machine Learning Basics",
                description: "Supervised, unsupervised learning, model evaluation.",
                difficulty: "beginner",
                resources: [
                    { label: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "git",
            position: { x: 400, y: 240 },
            data: {
                label: "Git & Version Control",
                description: "Version control for code and ML workflows.",
                difficulty: "beginner",
                resources: [
                    { label: "Git Docs", url: "https://git-scm.com/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "data-versioning",
            position: { x: 400, y: 360 },
            data: {
                label: "Data & Model Versioning",
                description: "DVC, MLflow tracking, experiment management.",
                difficulty: "intermediate",
                resources: [
                    { label: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html", type: "free" },
                    { label: "DVC Docs", url: "https://dvc.org/doc", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "docker",
            position: { x: 400, y: 480 },
            data: {
                label: "Docker",
                description: "Containerize ML applications.",
                difficulty: "intermediate",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "ci-cd",
            position: { x: 400, y: 600 },
            data: {
                label: "CI/CD for ML",
                description: "Automate training, testing and deployment.",
                difficulty: "intermediate",
                resources: [
                    { label: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "cloud",
            position: { x: 400, y: 720 },
            data: {
                label: "Cloud ML Services",
                description: "AWS SageMaker, GCP Vertex AI, Azure ML.",
                difficulty: "advanced",
                resources: [
                    { label: "AWS SageMaker Docs", url: "https://docs.aws.amazon.com/sagemaker/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "model-serving",
            position: { x: 250, y: 840 },
            data: {
                label: "Model Serving",
                description: "FastAPI, Flask, TorchServe, TensorFlow Serving.",
                difficulty: "advanced",
                resources: [
                    { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "kubernetes",
            position: { x: 550, y: 840 },
            data: {
                label: "Kubernetes",
                description: "Deploy scalable ML services.",
                difficulty: "advanced",
                resources: [
                    { label: "Kubernetes Docs", url: "https://kubernetes.io/docs/home/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "mlops",
            id: "monitoring",
            position: { x: 400, y: 980 },
            data: {
                label: "Monitoring & Drift Detection",
                description: "Model monitoring, data drift detection.",
                difficulty: "advanced",
                resources: [
                    { label: "Prometheus Docs", url: "https://prometheus.io/docs/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "mlops", id: "e1", source: "python", target: "ml-basics" },
        { roadmapId: "mlops", id: "e2", source: "ml-basics", target: "git" },
        { roadmapId: "mlops", id: "e3", source: "git", target: "data-versioning" },
        { roadmapId: "mlops", id: "e4", source: "data-versioning", target: "docker" },
        { roadmapId: "mlops", id: "e5", source: "docker", target: "ci-cd" },
        { roadmapId: "mlops", id: "e6", source: "ci-cd", target: "cloud" },
        { roadmapId: "mlops", id: "e7", source: "cloud", target: "model-serving" },
        { roadmapId: "mlops", id: "e8", source: "cloud", target: "kubernetes" },
        { roadmapId: "mlops", id: "e9", source: "model-serving", target: "monitoring" },
        { roadmapId: "mlops", id: "e10", source: "kubernetes", target: "monitoring" }
    ]
}
