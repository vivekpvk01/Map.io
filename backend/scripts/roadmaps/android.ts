export const androidRoadmap = {
    id: "android",
    title: "Android Developer",
    description: "Complete roadmap to becoming a professional Android developer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "android",
            id: "programming",
            position: { x: 400, y: 0 },
            data: {
                label: "Kotlin / Java",
                description: "Learn Kotlin (recommended) or Java for Android development.",
                difficulty: "beginner",
                resources: [
                    { label: "Kotlin Docs", url: "https://kotlinlang.org/docs/home.html", type: "free" },
                    { label: "Java Docs", url: "https://docs.oracle.com/javase/tutorial/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "android-basics",
            position: { x: 400, y: 140 },
            data: {
                label: "Android Fundamentals",
                description: "Activities, lifecycle, layouts, intents, permissions.",
                difficulty: "beginner",
                resources: [
                    { label: "Android Developers Guide", url: "https://developer.android.com/guide", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "ui-design",
            position: { x: 400, y: 280 },
            data: {
                label: "UI Design & XML",
                description: "Views, layouts, RecyclerView, Material Design.",
                difficulty: "beginner",
                resources: [
                    { label: "Material Design", url: "https://m3.material.io/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "jetpack-compose",
            position: { x: 400, y: 420 },
            data: {
                label: "Jetpack Compose",
                description: "Modern declarative UI toolkit for Android.",
                difficulty: "intermediate",
                resources: [
                    { label: "Jetpack Compose Docs", url: "https://developer.android.com/jetpack/compose", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "architecture",
            position: { x: 400, y: 560 },
            data: {
                label: "App Architecture",
                description: "MVVM, Clean Architecture, Repository pattern.",
                difficulty: "intermediate",
                resources: [
                    { label: "Android Architecture Guide", url: "https://developer.android.com/topic/architecture", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "networking",
            position: { x: 400, y: 700 },
            data: {
                label: "Networking",
                description: "REST APIs, Retrofit, JSON parsing.",
                difficulty: "intermediate",
                resources: [
                    { label: "Retrofit Docs", url: "https://square.github.io/retrofit/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "local-storage",
            position: { x: 250, y: 840 },
            data: {
                label: "Local Storage",
                description: "Room Database, SharedPreferences, DataStore.",
                difficulty: "intermediate",
                resources: [
                    { label: "Room Database Guide", url: "https://developer.android.com/training/data-storage/room", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "firebase",
            position: { x: 550, y: 840 },
            data: {
                label: "Firebase",
                description: "Authentication, Firestore, push notifications.",
                difficulty: "intermediate",
                resources: [
                    { label: "Firebase Docs", url: "https://firebase.google.com/docs", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "testing",
            position: { x: 400, y: 980 },
            data: {
                label: "Testing",
                description: "Unit testing, Espresso, UI testing.",
                difficulty: "advanced",
                resources: [
                    { label: "Android Testing Docs", url: "https://developer.android.com/training/testing", type: "free" }
                ],
            },
        },
        {
            roadmapId: "android",
            id: "publishing",
            position: { x: 400, y: 1120 },
            data: {
                label: "App Deployment",
                description: "Generate APK/AAB, Play Store publishing process.",
                difficulty: "advanced",
                resources: [
                    { label: "Play Console Guide", url: "https://support.google.com/googleplay/android-developer/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "android", id: "e1", source: "programming", target: "android-basics" },
        { roadmapId: "android", id: "e2", source: "android-basics", target: "ui-design" },
        { roadmapId: "android", id: "e3", source: "ui-design", target: "jetpack-compose" },
        { roadmapId: "android", id: "e4", source: "jetpack-compose", target: "architecture" },
        { roadmapId: "android", id: "e5", source: "architecture", target: "networking" },
        { roadmapId: "android", id: "e6", source: "networking", target: "local-storage" },
        { roadmapId: "android", id: "e7", source: "networking", target: "firebase" },
        { roadmapId: "android", id: "e8", source: "local-storage", target: "testing" },
        { roadmapId: "android", id: "e9", source: "firebase", target: "testing" },
        { roadmapId: "android", id: "e10", source: "testing", target: "publishing" }
    ]
}
