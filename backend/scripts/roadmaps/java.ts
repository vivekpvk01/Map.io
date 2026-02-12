export const javaRoadmap = {
    id: "java",
    title: "Java Developer",
    description: "Complete roadmap to becoming a professional Java developer for enterprise and backend systems",
    isOfficial: true,

    nodes: [
        // ========================
        // FOUNDATION
        // ========================
        {
            roadmapId: "java",
            id: "java-basics",
            position: { x: 500, y: 0 },
            data: {
                label: "Java Fundamentals",
                description: "Variables, data types, operators, loops, conditionals.",
                difficulty: "beginner",
                resources: [
                    { label: "Official Java Docs", url: "https://docs.oracle.com/javase/tutorial/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "oop",
            position: { x: 500, y: 130 },
            data: {
                label: "Object-Oriented Programming",
                description: "Classes, objects, inheritance, polymorphism, abstraction.",
                difficulty: "beginner",
                resources: [
                    { label: "OOP Concepts", url: "https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "collections",
            position: { x: 500, y: 260 },
            data: {
                label: "Collections Framework",
                description: "List, Set, Map, HashMap, ArrayList, TreeMap.",
                difficulty: "intermediate",
                resources: [
                    { label: "Java Collections Guide", url: "https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html", type: "free" }
                ],
            },
        },

        // ========================
        // CORE ADVANCED
        // ========================
        {
            roadmapId: "java",
            id: "exceptions",
            position: { x: 300, y: 390 },
            data: {
                label: "Exception Handling",
                description: "Try-catch, custom exceptions, best practices.",
                difficulty: "intermediate",
                resources: [
                    { label: "Exception Handling", url: "https://docs.oracle.com/javase/tutorial/essential/exceptions/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "multithreading",
            position: { x: 700, y: 390 },
            data: {
                label: "Multithreading & Concurrency",
                description: "Threads, Runnable, ExecutorService, synchronization.",
                difficulty: "advanced",
                resources: [
                    { label: "Concurrency Tutorial", url: "https://docs.oracle.com/javase/tutorial/essential/concurrency/", type: "free" }
                ],
            },
        },

        // ========================
        // BACKEND PATH
        // ========================
        {
            roadmapId: "java",
            id: "jdbc",
            position: { x: 200, y: 540 },
            data: {
                label: "JDBC",
                description: "Database connectivity, SQL integration.",
                difficulty: "intermediate",
                resources: [
                    { label: "JDBC Guide", url: "https://docs.oracle.com/javase/tutorial/jdbc/basics/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "servlets",
            position: { x: 200, y: 680 },
            data: {
                label: "Servlets & JSP",
                description: "Web applications using Java EE basics.",
                difficulty: "intermediate",
                resources: [
                    { label: "Servlet Docs", url: "https://jakarta.ee/specifications/servlet/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "spring-core",
            position: { x: 500, y: 540 },
            data: {
                label: "Spring Framework",
                description: "Dependency Injection, IoC container.",
                difficulty: "advanced",
                resources: [
                    { label: "Spring Docs", url: "https://spring.io/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "spring-boot",
            position: { x: 500, y: 680 },
            data: {
                label: "Spring Boot",
                description: "Build REST APIs, Microservices, production-ready apps.",
                difficulty: "advanced",
                resources: [
                    { label: "Spring Boot Docs", url: "https://spring.io/projects/spring-boot", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "hibernate",
            position: { x: 800, y: 540 },
            data: {
                label: "Hibernate / JPA",
                description: "ORM, entity mapping, persistence layer.",
                difficulty: "advanced",
                resources: [
                    { label: "Hibernate Docs", url: "https://hibernate.org/orm/documentation/", type: "free" }
                ],
            },
        },

        // ========================
        // SYSTEM LEVEL
        // ========================
        {
            roadmapId: "java",
            id: "testing",
            position: { x: 500, y: 820 },
            data: {
                label: "Testing (JUnit & Mockito)",
                description: "Unit testing, mocking, integration testing.",
                difficulty: "advanced",
                resources: [
                    { label: "JUnit Docs", url: "https://junit.org/junit5/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "build-tools",
            position: { x: 350, y: 950 },
            data: {
                label: "Build Tools (Maven / Gradle)",
                description: "Dependency management and project structure.",
                difficulty: "intermediate",
                resources: [
                    { label: "Maven Docs", url: "https://maven.apache.org/guides/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "microservices",
            position: { x: 650, y: 950 },
            data: {
                label: "Microservices Architecture",
                description: "API Gateway, service communication, scaling.",
                difficulty: "advanced",
                resources: [
                    { label: "Microservices Guide", url: "https://microservices.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "java",
            id: "deployment",
            position: { x: 500, y: 1080 },
            data: {
                label: "Deployment & DevOps",
                description: "Docker, CI/CD, cloud deployment.",
                difficulty: "advanced",
                resources: [
                    { label: "Docker Docs", url: "https://docs.docker.com/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "java", id: "e1", source: "java-basics", target: "oop" },
        { roadmapId: "java", id: "e2", source: "oop", target: "collections" },

        { roadmapId: "java", id: "e3", source: "collections", target: "exceptions" },
        { roadmapId: "java", id: "e4", source: "collections", target: "multithreading" },

        { roadmapId: "java", id: "e5", source: "exceptions", target: "jdbc" },
        { roadmapId: "java", id: "e6", source: "jdbc", target: "servlets" },

        { roadmapId: "java", id: "e7", source: "multithreading", target: "spring-core" },
        { roadmapId: "java", id: "e8", source: "spring-core", target: "spring-boot" },
        { roadmapId: "java", id: "e9", source: "spring-core", target: "hibernate" },

        { roadmapId: "java", id: "e10", source: "spring-boot", target: "testing" },
        { roadmapId: "java", id: "e11", source: "hibernate", target: "testing" },

        { roadmapId: "java", id: "e12", source: "testing", target: "build-tools" },
        { roadmapId: "java", id: "e13", source: "testing", target: "microservices" },

        { roadmapId: "java", id: "e14", source: "microservices", target: "deployment" },
        { roadmapId: "java", id: "e15", source: "build-tools", target: "deployment" }
    ]
}
