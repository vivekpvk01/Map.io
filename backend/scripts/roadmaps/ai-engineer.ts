export const aiEngineerRoadmap = {
    id: "ai-engineer",
    title: "AI Engineer",
    description: "Complete roadmap to becoming a professional AI Engineer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "ai-engineer",
            id: "math",
            position: { x: 400, y: 0 },
            data: {
                label: "Mathematics for AI",
                description: "Linear Algebra, Probability, Statistics, Calculus fundamentals.",
                difficulty: "beginner",
                resources: [
                    { label: "Khan Academy Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra", type: "free" },
                    { label: "StatQuest YouTube", url: "https://www.youtube.com/c/joshstarmer", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "python",
            position: { x: 400, y: 120 },
            data: {
                label: "Python Programming",
                description: "Master Python basics, OOP, and libraries.",
                difficulty: "beginner",
                resources: [
                    { label: "Python Docs", url: "https://docs.python.org/3/", type: "free" },
                    { label: "Real Python", url: "https://realpython.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "numpy-pandas",
            position: { x: 400, y: 240 },
            data: {
                label: "NumPy & Pandas",
                description: "Data manipulation and numerical computing.",
                difficulty: "beginner",
                resources: [
                    { label: "NumPy Docs", url: "https://numpy.org/doc/", type: "free" },
                    { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "data-visualization",
            position: { x: 400, y: 360 },
            data: {
                label: "Data Visualization",
                description: "Matplotlib, Seaborn, Plotly for visualization.",
                difficulty: "beginner",
                resources: [
                    { label: "Matplotlib Docs", url: "https://matplotlib.org/stable/contents.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "machine-learning",
            position: { x: 400, y: 480 },
            data: {
                label: "Machine Learning",
                description: "Supervised & Unsupervised learning, regression, classification.",
                difficulty: "intermediate",
                resources: [
                    { label: "Scikit-Learn Docs", url: "https://scikit-learn.org/stable/", type: "free" },
                    { label: "Andrew Ng ML Course", url: "https://www.coursera.org/learn/machine-learning", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "deep-learning",
            position: { x: 400, y: 600 },
            data: {
                label: "Deep Learning",
                description: "Neural networks, CNN, RNN fundamentals.",
                difficulty: "intermediate",
                resources: [
                    { label: "DeepLearning.ai", url: "https://www.deeplearning.ai/", type: "free" },
                    { label: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "nlp",
            position: { x: 200, y: 720 },
            data: {
                label: "Natural Language Processing",
                description: "Text processing, embeddings, transformers.",
                difficulty: "advanced",
                resources: [
                    { label: "Hugging Face Course", url: "https://huggingface.co/learn", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "computer-vision",
            position: { x: 600, y: 720 },
            data: {
                label: "Computer Vision",
                description: "Image processing, CNN architectures.",
                difficulty: "advanced",
                resources: [
                    { label: "PyTorch Vision Tutorials", url: "https://pytorch.org/tutorials/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "llms",
            position: { x: 400, y: 840 },
            data: {
                label: "Large Language Models",
                description: "Transformers, fine-tuning, prompt engineering.",
                difficulty: "advanced",
                resources: [
                    { label: "HuggingFace Transformers", url: "https://huggingface.co/docs/transformers", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ai-engineer",
            id: "mlops",
            position: { x: 400, y: 960 },
            data: {
                label: "MLOps",
                description: "Model deployment, monitoring, versioning.",
                difficulty: "advanced",
                resources: [
                    { label: "MLflow Docs", url: "https://mlflow.org/docs/latest/index.html", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "ai-engineer", id: "e1", source: "math", target: "python" },
        { roadmapId: "ai-engineer", id: "e2", source: "python", target: "numpy-pandas" },
        { roadmapId: "ai-engineer", id: "e3", source: "numpy-pandas", target: "data-visualization" },
        { roadmapId: "ai-engineer", id: "e4", source: "data-visualization", target: "machine-learning" },
        { roadmapId: "ai-engineer", id: "e5", source: "machine-learning", target: "deep-learning" },
        { roadmapId: "ai-engineer", id: "e6", source: "deep-learning", target: "nlp" },
        { roadmapId: "ai-engineer", id: "e7", source: "deep-learning", target: "computer-vision" },
        { roadmapId: "ai-engineer", id: "e8", source: "nlp", target: "llms" },
        { roadmapId: "ai-engineer", id: "e9", source: "computer-vision", target: "llms" },
        { roadmapId: "ai-engineer", id: "e10", source: "llms", target: "mlops" }
    ]
}
