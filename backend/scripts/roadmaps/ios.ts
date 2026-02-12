export const iosRoadmap = {
    id: "ios",
    title: "iOS Developer",
    description: "Complete roadmap to becoming a professional iOS developer",
    isOfficial: true,

    nodes: [
        {
            roadmapId: "ios",
            id: "swift",
            position: { x: 400, y: 0 },
            data: {
                label: "Swift Programming",
                description: "Learn Swift language fundamentals for iOS development.",
                difficulty: "beginner",
                resources: [
                    { label: "Swift Docs", url: "https://docs.swift.org/swift-book/", type: "free" },
                    { label: "Swift Playgrounds", url: "https://developer.apple.com/swift-playgrounds/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "ios-fundamentals",
            position: { x: 400, y: 140 },
            data: {
                label: "iOS Fundamentals",
                description: "App lifecycle, ViewControllers, Storyboards.",
                difficulty: "beginner",
                resources: [
                    { label: "Apple iOS Guide", url: "https://developer.apple.com/ios/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "ui-kit",
            position: { x: 400, y: 280 },
            data: {
                label: "UIKit",
                description: "Build UI using UIKit framework.",
                difficulty: "beginner",
                resources: [
                    { label: "UIKit Docs", url: "https://developer.apple.com/documentation/uikit", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "swiftui",
            position: { x: 400, y: 420 },
            data: {
                label: "SwiftUI",
                description: "Modern declarative UI framework for iOS.",
                difficulty: "intermediate",
                resources: [
                    { label: "SwiftUI Docs", url: "https://developer.apple.com/xcode/swiftui/", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "architecture",
            position: { x: 400, y: 560 },
            data: {
                label: "App Architecture",
                description: "MVVM, MVC, Clean Architecture patterns.",
                difficulty: "intermediate",
                resources: [
                    { label: "Apple Architecture Guide", url: "https://developer.apple.com/documentation/swiftui/managing-model-data-in-your-app", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "networking",
            position: { x: 400, y: 700 },
            data: {
                label: "Networking",
                description: "URLSession, REST APIs, JSON parsing.",
                difficulty: "intermediate",
                resources: [
                    { label: "URLSession Docs", url: "https://developer.apple.com/documentation/foundation/urlsession", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "core-data",
            position: { x: 250, y: 840 },
            data: {
                label: "Core Data",
                description: "Local data persistence in iOS apps.",
                difficulty: "intermediate",
                resources: [
                    { label: "Core Data Docs", url: "https://developer.apple.com/documentation/coredata", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "firebase",
            position: { x: 550, y: 840 },
            data: {
                label: "Firebase",
                description: "Authentication, Firestore, push notifications.",
                difficulty: "intermediate",
                resources: [
                    { label: "Firebase iOS Docs", url: "https://firebase.google.com/docs/ios/setup", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "testing",
            position: { x: 400, y: 980 },
            data: {
                label: "Testing",
                description: "Unit testing, UI testing, XCTest framework.",
                difficulty: "advanced",
                resources: [
                    { label: "XCTest Docs", url: "https://developer.apple.com/documentation/xctest", type: "free" }
                ],
            },
        },
        {
            roadmapId: "ios",
            id: "deployment",
            position: { x: 400, y: 1120 },
            data: {
                label: "App Store Deployment",
                description: "TestFlight, App Store submission process.",
                difficulty: "advanced",
                resources: [
                    { label: "App Store Connect Guide", url: "https://developer.apple.com/app-store-connect/", type: "free" }
                ],
            },
        }
    ],

    edges: [
        { roadmapId: "ios", id: "e1", source: "swift", target: "ios-fundamentals" },
        { roadmapId: "ios", id: "e2", source: "ios-fundamentals", target: "ui-kit" },
        { roadmapId: "ios", id: "e3", source: "ui-kit", target: "swiftui" },
        { roadmapId: "ios", id: "e4", source: "swiftui", target: "architecture" },
        { roadmapId: "ios", id: "e5", source: "architecture", target: "networking" },
        { roadmapId: "ios", id: "e6", source: "networking", target: "core-data" },
        { roadmapId: "ios", id: "e7", source: "networking", target: "firebase" },
        { roadmapId: "ios", id: "e8", source: "core-data", target: "testing" },
        { roadmapId: "ios", id: "e9", source: "firebase", target: "testing" },
        { roadmapId: "ios", id: "e10", source: "testing", target: "deployment" }
    ]
}
