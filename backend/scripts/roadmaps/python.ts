export const pythonRoadmap = {
    id: "python",
    title: "Python Developer",
    description: "Complete roadmap to mastering Python for software development, automation, and AI",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "python",
            id: "python-basics",
            position: { x: 500, y: 0 },
            data: {
                label: "Python Fundamentals",
                description: "Variables, data types, loops, functions, conditionals.",
                difficulty: "beginner",
                resources: [
                    { label: "Official Python Docs", url: "https://docs.python.org/3/tutorial/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "python",
            id: "data-structures",
            position: { x: 500, y: 130 },
            data: {
                label: "Data Structures",
                description: "Lists, tuples, sets, dictionaries, comprehensions.",
                difficulty: "beginner",
                resources: [
                    { label: "Python Data Structures", url: "https://docs.python.org/3/tutorial/datastructures.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "python",
            id: "oop",
            position: { x: 500, y: 260 },
            data: {
                label: "Object Oriented Programming",
                description: "Classes, objects, inheritance, polymorphism.",
                difficulty: "intermediate",
                resources: [
                    { label: "OOP in Python", url: "https://realpython.com/python3-object-oriented-programming/", type: "free" }
                ],
            },
        },

        // Split Layer
        {
            roadmapId: "python",
            id: "virtual-env",
            position: { x: 250, y: 390 },
            data: {
                label: "Virtual Environments",
                description: "venv, pip, dependency management.",
                difficulty: "beginner",
                resources: [
                    { label: "Python venv Guide", url: "https://docs.python.org/3/library/venv.html", type: "free" }
                ],
            },
        },
        {
            roadmapId: "python",
            id: "advanced-python",
            position: { x: 750, y: 390 },
            data: {
                label: "Advanced Python",
                description: "Decorators, generators, context managers, lambda.",
                difficulty: "intermediate",
                resources: [
                    { label: "Advanced Python Guide", url: "https://realpython.com/", type: "free" }
                ],
            },
        },

        // LEFT COLUMN – WEB
        {
            roadmapId: "python",
            id: "web-frameworks",
            position: { x: 150, y: 540 },
            data: {
                label: "Web Frameworks (Django / FastAPI)",
                description: "Build APIs and backend systems.",
                difficulty: "intermediate",
                resources: [
                    { label: "Django Docs", url: "https://docs.djangoproject.com/", type: "free" },
                    { label: "FastAPI Docs", url: "https://fastapi.tiangolo.com/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "python",
            id: "rest-api",
            position: { x: 150, y: 680 },
            data: {
                label: "REST API Development",
                description: "API design, authentication, JWT.",
                difficulty: "advanced",
                resources: [
                    { label: "REST Guide", url: "https://restfulapi.net/", type: "free" }
                ],
            },
        },

        // CENTER COLUMN – AUTOMATION
        {
            roadmapId: "python",
            id: "automation",
            position: { x: 500, y: 560 },
            data: {
                label: "Automation & Scripting",
                description: "File handling, OS module, automation scripts.",
                difficulty: "intermediate",
                resources: [
                    { label: "Automate the Boring Stuff", url: "https://automatetheboringstuff.com/", type: "free" }
                ],
            },
        },

        // RIGHT COLUMN – DATA & AI
        {
            roadmapId: "python",
            id: "numpy",
            position: { x: 850, y: 540 },
            data: {
                label: "NumPy",
                description: "Numerical computing fundamentals.",
                difficulty: "intermediate",
                resources: [
                    { label: "NumPy Docs", url: "https://numpy.org/doc/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "python",
            id: "pandas",
            position: { x: 850, y: 680 },
            data: {
                label: "Pandas",
                description: "Data manipulation and analysis.",
                difficulty: "intermediate",
                resources: [
                    { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "python",
            id: "machine-learning",
            position: { x: 850, y: 820 },
            data: {
                label: "Machine Learning",
                description: "Scikit-learn basics, model training.",
                difficulty: "advanced",
                resources: [
                    { label: "Scikit-learn Docs", url: "https://scikit-learn.org/stable/", type: "free" }
                ],
            },
        },

        // MERGE LAYER
        {
            roadmapId: "python",
            id: "testing",
            position: { x: 500, y: 960 },
            data: {
                label: "Testing (PyTest)",
                description: "Unit testing, test-driven development.",
                difficulty: "advanced",
                resources: [
                    { label: "PyTest Docs", url: "https://docs.pytest.org/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "python",
            id: "deployment",
            position: { x: 500, y: 1100 },
            data: {
                label: "Deployment & Packaging",
                description: "Docker, cloud deployment, pip packaging.",
                difficulty: "advanced",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "python", id: "e1", source: "python-basics", target: "data-structures" },
        { roadmapId: "python", id: "e2", source: "data-structures", target: "oop" },
        { roadmapId: "python", id: "e3", source: "oop", target: "virtual-env" },
        { roadmapId: "python", id: "e4", source: "oop", target: "advanced-python" },

        { roadmapId: "python", id: "e5", source: "virtual-env", target: "automation" },
        { roadmapId: "python", id: "e6", source: "advanced-python", target: "web-frameworks" },
        { roadmapId: "python", id: "e7", source: "advanced-python", target: "numpy" },

        { roadmapId: "python", id: "e8", source: "web-frameworks", target: "rest-api" },
        { roadmapId: "python", id: "e9", source: "numpy", target: "pandas" },
        { roadmapId: "python", id: "e10", source: "pandas", target: "machine-learning" },

        { roadmapId: "python", id: "e11", source: "rest-api", target: "testing" },
        { roadmapId: "python", id: "e12", source: "machine-learning", target: "testing" },
        { roadmapId: "python", id: "e13", source: "automation", target: "testing" },

        { roadmapId: "python", id: "e14", source: "testing", target: "deployment" }
    ]
}
