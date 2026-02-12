export const postgresqlRoadmap = {
    id: "postgresql",
    title: "PostgreSQL",
    description: "Complete roadmap to mastering PostgreSQL for backend and data engineering",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "postgresql",
            id: "database-fundamentals",
            position: { x: 400, y: 0 },
            data: {
                label: "Database Fundamentals",
                description: "Understand relational databases, ACID, transactions, normalization.",
                difficulty: "beginner",
                resources: [
                    { label: "PostgreSQL Intro", url: "https://www.postgresql.org/docs/current/tutorial.html", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "sql-basics",
            position: { x: 400, y: 140 },
            data: {
                label: "SQL Basics",
                description: "SELECT, INSERT, UPDATE, DELETE, WHERE, ORDER BY.",
                difficulty: "beginner",
                resources: [
                    { label: "SQLBolt", url: "https://sqlbolt.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "constraints",
            position: { x: 250, y: 280 },
            data: {
                label: "Constraints & Keys",
                description: "Primary key, foreign key, unique, not null.",
                difficulty: "beginner",
                resources: [
                    { label: "Postgres Constraints", url: "https://www.postgresql.org/docs/current/ddl-constraints.html", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "joins",
            position: { x: 550, y: 280 },
            data: {
                label: "Joins & Relationships",
                description: "INNER JOIN, LEFT JOIN, many-to-many relationships.",
                difficulty: "intermediate",
                resources: [
                    { label: "SQL Joins Explained", url: "https://www.sqltutorial.org/sql-join/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "indexing",
            position: { x: 400, y: 420 },
            data: {
                label: "Indexing",
                description: "B-tree, Hash, performance optimization.",
                difficulty: "intermediate",
                resources: [
                    { label: "Postgres Indexes", url: "https://www.postgresql.org/docs/current/indexes.html", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "advanced-queries",
            position: { x: 400, y: 560 },
            data: {
                label: "Advanced Queries",
                description: "Subqueries, CTEs, window functions.",
                difficulty: "advanced",
                resources: [
                    { label: "Window Functions Guide", url: "https://www.postgresql.org/docs/current/tutorial-window.html", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "transactions",
            position: { x: 250, y: 700 },
            data: {
                label: "Transactions & Isolation",
                description: "Isolation levels, locking, MVCC.",
                difficulty: "advanced",
                resources: [
                    { label: "MVCC Explained", url: "https://www.postgresql.org/docs/current/mvcc.html", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "performance-tuning",
            position: { x: 550, y: 700 },
            data: {
                label: "Performance Tuning",
                description: "Query plans, EXPLAIN ANALYZE, optimization.",
                difficulty: "advanced",
                resources: [
                    { label: "Postgres Performance", url: "https://wiki.postgresql.org/wiki/Performance_Optimization", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "backup-recovery",
            position: { x: 400, y: 840 },
            data: {
                label: "Backup & Recovery",
                description: "pg_dump, replication, recovery strategies.",
                difficulty: "advanced",
                resources: [
                    { label: "Backup Docs", url: "https://www.postgresql.org/docs/current/backup.html", type: "free" }
                ],
            },
        },

        {
            roadmapId: "postgresql",
            id: "replication",
            position: { x: 400, y: 980 },
            data: {
                label: "Replication & Scaling",
                description: "Read replicas, sharding basics.",
                difficulty: "advanced",
                resources: [
                    { label: "Replication Guide", url: "https://www.postgresql.org/docs/current/high-availability.html", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "postgresql", id: "e1", source: "database-fundamentals", target: "sql-basics" },

        { roadmapId: "postgresql", id: "e2", source: "sql-basics", target: "constraints" },
        { roadmapId: "postgresql", id: "e3", source: "sql-basics", target: "joins" },

        { roadmapId: "postgresql", id: "e4", source: "constraints", target: "indexing" },
        { roadmapId: "postgresql", id: "e5", source: "joins", target: "indexing" },

        { roadmapId: "postgresql", id: "e6", source: "indexing", target: "advanced-queries" },

        { roadmapId: "postgresql", id: "e7", source: "advanced-queries", target: "transactions" },
        { roadmapId: "postgresql", id: "e8", source: "advanced-queries", target: "performance-tuning" },

        { roadmapId: "postgresql", id: "e9", source: "transactions", target: "backup-recovery" },
        { roadmapId: "postgresql", id: "e10", source: "performance-tuning", target: "backup-recovery" },

        { roadmapId: "postgresql", id: "e11", source: "backup-recovery", target: "replication" }
    ]
}
