export const dataScientistRoadmap = {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Complete roadmap to becoming a professional Data Scientist",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "data-scientist",
            id: "math",
            position: { x: 400, y: 0 },
            data: {
                label: "Mathematics & Statistics",
                description: "Probability, statistics, hypothesis testing, distributions.",
                difficulty: "beginner",
                resources: [
                    { label: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability", type: "free" },
                    { label: "StatQuest YouTube", url: "https://www.youtube.com/c/joshstarmer", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "python",
            position: { x: 400, y: 120 },
            data: {
                label: "Python for Data Science",
                description: "Python fundamentals, data structures, OOP basics.",
                difficulty: "beginner",
                resources: [
                    { label: "Python Docs", url: "https://docs.python.org/3/", type: "free" },
                    { label: "Real Python", url: "https://realpython.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "numpy-pandas",
            position: { x: 400, y: 240 },
            data: {
                label: "NumPy & Pandas",
                description: "Data cleaning, manipulation and transformation.",
                difficulty: "beginner",
                resources: [
                    { label: "Pandas Documentation", url: "https://pandas.pydata.org/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "data-visualization",
            position: { x: 400, y: 360 },
            data: {
                label: "Data Visualization",
                description: "Matplotlib, Seaborn, Plotly for insights.",
                difficulty: "beginner",
                resources: [
                    { label: "Matplotlib Docs", url: "https://matplotlib.org/stable/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "sql",
            position: { x: 400, y: 480 },
            data: {
                label: "SQL & Databases",
                description: "Querying structured data and relational databases.",
                difficulty: "intermediate",
                resources: [
                    { label: "SQLBolt", url: "https://sqlbolt.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "exploratory-analysis",
            position: { x: 400, y: 600 },
            data: {
                label: "Exploratory Data Analysis (EDA)",
                description: "Feature engineering, missing data handling, outliers.",
                difficulty: "intermediate",
                resources: [
                    { label: "Kaggle Learn EDA", url: "https://www.kaggle.com/learn", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "machine-learning",
            position: { x: 400, y: 720 },
            data: {
                label: "Machine Learning",
                description: "Regression, classification, clustering algorithms.",
                difficulty: "intermediate",
                resources: [
                    { label: "Scikit-Learn Docs", url: "https://scikit-learn.org/stable/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "model-evaluation",
            position: { x: 400, y: 840 },
            data: {
                label: "Model Evaluation",
                description: "Cross-validation, precision-recall, ROC curves.",
                difficulty: "intermediate",
                resources: [
                    { label: "Scikit Evaluation Guide", url: "https://scikit-learn.org/stable/modules/model_evaluation.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "deep-learning",
            position: { x: 400, y: 960 },
            data: {
                label: "Deep Learning",
                description: "Neural networks for complex datasets.",
                difficulty: "advanced",
                resources: [
                    { label: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "big-data",
            position: { x: 400, y: 1080 },
            data: {
                label: "Big Data Tools",
                description: "Spark, Hadoop fundamentals.",
                difficulty: "advanced",
                resources: [
                    { label: "Apache Spark Docs", url: "https://spark.apache.org/docs/latest/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-scientist",
            id: "communication",
            position: { x: 400, y: 1200 },
            data: {
                label: "Data Storytelling",
                description: "Communicating insights to stakeholders.",
                difficulty: "advanced",
                resources: [
                    { label: "Storytelling with Data", url: "https://www.storytellingwithdata.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "data-scientist", id: "e1", source: "math", target: "python" },
        { roadmapId: "data-scientist", id: "e2", source: "python", target: "numpy-pandas" },
        { roadmapId: "data-scientist", id: "e3", source: "numpy-pandas", target: "data-visualization" },
        { roadmapId: "data-scientist", id: "e4", source: "data-visualization", target: "sql" },
        { roadmapId: "data-scientist", id: "e5", source: "sql", target: "exploratory-analysis" },
        { roadmapId: "data-scientist", id: "e6", source: "exploratory-analysis", target: "machine-learning" },
        { roadmapId: "data-scientist", id: "e7", source: "machine-learning", target: "model-evaluation" },
        { roadmapId: "data-scientist", id: "e8", source: "model-evaluation", target: "deep-learning" },
        { roadmapId: "data-scientist", id: "e9", source: "deep-learning", target: "big-data" },
        { roadmapId: "data-scientist", id: "e10", source: "big-data", target: "communication" }
    ]
}
