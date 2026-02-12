export const dataAnalystRoadmap = {
    id: "data-analyst",
    title: "Data Analyst",
    description: "Complete roadmap to becoming a professional Data Analyst",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "data-analyst",
            id: "excel",
            position: { x: 400, y: 0 },
            data: {
                label: "Excel & Spreadsheets",
                description: "Master formulas, pivot tables, charts, and data cleaning.",
                difficulty: "beginner",
                resources: [
                    { label: "Excel Tutorial (W3Schools)", url: "https://www.w3schools.com/excel/", type: "free" },
                    { label: "Excel Full Course (YouTube)", url: "https://www.youtube.com/results?search_query=excel+full+course", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-analyst",
            id: "statistics",
            position: { x: 400, y: 120 },
            data: {
                label: "Statistics Fundamentals",
                description: "Mean, median, variance, probability, hypothesis testing.",
                difficulty: "beginner",
                resources: [
                    { label: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-analyst",
            id: "sql",
            position: { x: 400, y: 240 },
            data: {
                label: "SQL",
                description: "Write queries, joins, aggregations, subqueries.",
                difficulty: "beginner",
                resources: [
                    { label: "SQLBolt", url: "https://sqlbolt.com/", type: "free" },
                    { label: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-analyst",
            id: "python",
            position: { x: 400, y: 360 },
            data: {
                label: "Python for Data Analysis",
                description: "Learn Pandas, NumPy, Matplotlib, data cleaning.",
                difficulty: "intermediate",
                resources: [
                    { label: "Pandas Documentation", url: "https://pandas.pydata.org/docs/", type: "free" },
                    { label: "NumPy Docs", url: "https://numpy.org/doc/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-analyst",
            id: "data-visualization",
            position: { x: 400, y: 480 },
            data: {
                label: "Data Visualization",
                description: "Create dashboards and visual reports.",
                difficulty: "intermediate",
                resources: [
                    { label: "Tableau Public", url: "https://public.tableau.com/", type: "free" },
                    { label: "Power BI Learning", url: "https://learn.microsoft.com/en-us/power-bi/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-analyst",
            id: "data-cleaning",
            position: { x: 400, y: 600 },
            data: {
                label: "Data Cleaning & Preprocessing",
                description: "Handle missing values, duplicates, transformations.",
                difficulty: "intermediate",
                resources: [
                    { label: "Data Cleaning Guide", url: "https://www.kaggle.com/learn/data-cleaning", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-analyst",
            id: "business-analysis",
            position: { x: 400, y: 720 },
            data: {
                label: "Business Understanding",
                description: "Translate business problems into data solutions.",
                difficulty: "intermediate",
                resources: [
                    { label: "Google Data Analytics Course Overview", url: "https://grow.google/certificates/data-analytics/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "data-analyst",
            id: "dashboard-projects",
            position: { x: 400, y: 840 },
            data: {
                label: "Portfolio Projects",
                description: "Build dashboards and publish case studies.",
                difficulty: "advanced",
                resources: [
                    { label: "Kaggle Projects", url: "https://www.kaggle.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "data-analyst", id: "e1", source: "excel", target: "statistics" },
        { roadmapId: "data-analyst", id: "e2", source: "statistics", target: "sql" },
        { roadmapId: "data-analyst", id: "e3", source: "sql", target: "python" },
        { roadmapId: "data-analyst", id: "e4", source: "python", target: "data-cleaning" },
        { roadmapId: "data-analyst", id: "e5", source: "data-cleaning", target: "data-visualization" },
        { roadmapId: "data-analyst", id: "e6", source: "data-visualization", target: "business-analysis" },
        { roadmapId: "data-analyst", id: "e7", source: "business-analysis", target: "dashboard-projects" }
    ]
}
