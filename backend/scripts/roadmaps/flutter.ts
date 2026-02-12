export const flutterRoadmap = {
    id: "flutter",
    title: "Flutter Developer",
    description: "Complete roadmap to becoming a professional Flutter developer for cross-platform mobile applications",
    isOfficial: true,

    nodes: [
        // ========================
        // FOUNDATION
        // ========================
        {
            roadmapId: "flutter",
            id: "dart-basics",
            position: { x: 500, y: 0 },
            data: {
                label: "Dart Fundamentals",
                description: "Variables, OOP, async/await, null safety.",
                difficulty: "beginner",
                resources: [
                    { label: "Dart Docs", url: "https://dart.dev/guides", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "flutter-basics",
            position: { x: 500, y: 140 },
            data: {
                label: "Flutter Basics",
                description: "Widgets, Stateless vs Stateful, project structure.",
                difficulty: "beginner",
                resources: [
                    { label: "Flutter Docs", url: "https://docs.flutter.dev/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "layouts",
            position: { x: 500, y: 280 },
            data: {
                label: "Layouts & UI",
                description: "Row, Column, Stack, ListView, GridView.",
                difficulty: "beginner",
                resources: [
                    { label: "Flutter Layout Guide", url: "https://docs.flutter.dev/ui/layout", type: "free" }
                ],
            },
        },

        // ========================
        // LEFT COLUMN (State & Native)
        // ========================
        {
            roadmapId: "flutter",
            id: "state-management",
            position: { x: 200, y: 420 },
            data: {
                label: "State Management",
                description: "Provider, Riverpod, Bloc, GetX.",
                difficulty: "intermediate",
                resources: [
                    { label: "Provider Docs", url: "https://pub.dev/packages/provider", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "navigation",
            position: { x: 200, y: 560 },
            data: {
                label: "Navigation & Routing",
                description: "Navigator 2.0, named routes.",
                difficulty: "intermediate",
                resources: [
                    { label: "Flutter Navigation", url: "https://docs.flutter.dev/ui/navigation", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "platform-channels",
            position: { x: 200, y: 700 },
            data: {
                label: "Platform Channels",
                description: "Communicate with native Android/iOS code.",
                difficulty: "advanced",
                resources: [
                    { label: "Platform Channels Guide", url: "https://docs.flutter.dev/platform-integration/platform-channels", type: "free" }
                ],
            },
        },

        // ========================
        // CENTER COLUMN (Core Dev Flow)
        // ========================
        {
            roadmapId: "flutter",
            id: "forms-validation",
            position: { x: 500, y: 420 },
            data: {
                label: "Forms & Validation",
                description: "Form widgets, validation, input handling.",
                difficulty: "intermediate",
                resources: [
                    { label: "Flutter Forms", url: "https://docs.flutter.dev/cookbook/forms", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "api-integration",
            position: { x: 500, y: 560 },
            data: {
                label: "API Integration",
                description: "HTTP, Dio, REST API integration.",
                difficulty: "intermediate",
                resources: [
                    { label: "HTTP Package", url: "https://pub.dev/packages/http", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "local-storage",
            position: { x: 500, y: 700 },
            data: {
                label: "Local Storage",
                description: "SharedPreferences, Hive, SQLite.",
                difficulty: "intermediate",
                resources: [
                    { label: "Hive Docs", url: "https://pub.dev/packages/hive", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "testing",
            position: { x: 500, y: 840 },
            data: {
                label: "Testing",
                description: "Unit testing, widget testing, integration testing.",
                difficulty: "advanced",
                resources: [
                    { label: "Flutter Testing", url: "https://docs.flutter.dev/testing", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "deployment",
            position: { x: 500, y: 980 },
            data: {
                label: "Deployment",
                description: "Build APK/AAB, App Store & Play Store publishing.",
                difficulty: "advanced",
                resources: [
                    { label: "Flutter Deployment", url: "https://docs.flutter.dev/deployment", type: "free" }
                ],
            },
        },

        // ========================
        // RIGHT COLUMN (Backend & Advanced)
        // ========================
        {
            roadmapId: "flutter",
            id: "firebase",
            position: { x: 800, y: 560 },
            data: {
                label: "Firebase",
                description: "Authentication, Firestore, push notifications.",
                difficulty: "intermediate",
                resources: [
                    { label: "FlutterFire Docs", url: "https://firebase.flutter.dev/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "flutter",
            id: "animations",
            position: { x: 800, y: 700 },
            data: {
                label: "Animations",
                description: "Implicit & explicit animations.",
                difficulty: "advanced",
                resources: [
                    { label: "Flutter Animations", url: "https://docs.flutter.dev/ui/animations", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "flutter", id: "e1", source: "dart-basics", target: "flutter-basics" },
        { roadmapId: "flutter", id: "e2", source: "flutter-basics", target: "layouts" },

        { roadmapId: "flutter", id: "e3", source: "layouts", target: "forms-validation" },
        { roadmapId: "flutter", id: "e4", source: "layouts", target: "state-management" },

        { roadmapId: "flutter", id: "e5", source: "forms-validation", target: "api-integration" },
        { roadmapId: "flutter", id: "e6", source: "api-integration", target: "local-storage" },

        { roadmapId: "flutter", id: "e7", source: "state-management", target: "navigation" },
        { roadmapId: "flutter", id: "e8", source: "navigation", target: "platform-channels" },

        { roadmapId: "flutter", id: "e9", source: "api-integration", target: "firebase" },
        { roadmapId: "flutter", id: "e10", source: "local-storage", target: "testing" },
        { roadmapId: "flutter", id: "e11", source: "firebase", target: "testing" },

        { roadmapId: "flutter", id: "e12", source: "testing", target: "deployment" },
        { roadmapId: "flutter", id: "e13", source: "layouts", target: "animations" }
    ]
}
