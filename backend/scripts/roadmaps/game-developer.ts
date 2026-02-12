export const gameDeveloperRoadmap = {
    id: "game-developer",
    title: "Game Developer",
    description: "Complete roadmap to becoming a professional game developer",
    isOfficial: true,

    nodes: [

        // ========================
        // FOUNDATION
        // ========================

        {
            roadmapId: "game-developer",
            id: "programming",
            position: { x: 400, y: 0 },
            data: {
                label: "Programming Fundamentals",
                description: "C++, C#, OOP, data structures for game logic.",
                difficulty: "beginner",
                resources: [
                    { label: "C++ Reference", url: "https://en.cppreference.com/", type: "free" },
                    { label: "C# Docs", url: "https://learn.microsoft.com/en-us/dotnet/csharp/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "math",
            position: { x: 200, y: 140 },
            data: {
                label: "Math for Games",
                description: "Linear algebra, vectors, matrices, trigonometry, physics math.",
                difficulty: "beginner",
                resources: [
                    { label: "Khan Academy Linear Algebra", url: "https://www.khanacademy.org/math/linear-algebra", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "computer-graphics",
            position: { x: 600, y: 140 },
            data: {
                label: "Computer Graphics Basics",
                description: "Rendering pipeline, shaders, lighting, textures.",
                difficulty: "intermediate",
                resources: [
                    { label: "LearnOpenGL", url: "https://learnopengl.com/", type: "free" }
                ],
            },
        },

        // ========================
        // GAME ENGINE PATH
        // ========================

        {
            roadmapId: "game-developer",
            id: "unity",
            position: { x: 200, y: 300 },
            data: {
                label: "Unity Engine",
                description: "Scenes, components, scripting with C#.",
                difficulty: "intermediate",
                resources: [
                    { label: "Unity Learn", url: "https://learn.unity.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "unreal",
            position: { x: 600, y: 300 },
            data: {
                label: "Unreal Engine",
                description: "C++ gameplay programming, Blueprints, UE5 tools.",
                difficulty: "advanced",
                resources: [
                    { label: "Unreal Engine Docs", url: "https://docs.unrealengine.com/", type: "free" }
                ],
            },
        },

        // ========================
        // CORE GAME SYSTEMS
        // ========================

        {
            roadmapId: "game-developer",
            id: "physics",
            position: { x: 400, y: 460 },
            data: {
                label: "Game Physics",
                description: "Collision detection, rigid bodies, movement systems.",
                difficulty: "intermediate",
                resources: [
                    { label: "Box2D Docs", url: "https://box2d.org/documentation/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "ai",
            position: { x: 150, y: 600 },
            data: {
                label: "Game AI",
                description: "Pathfinding (A*), state machines, behavior trees.",
                difficulty: "advanced",
                resources: [
                    { label: "Red Blob Games Pathfinding", url: "https://www.redblobgames.com/pathfinding/a-star/introduction.html", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "multiplayer",
            position: { x: 650, y: 600 },
            data: {
                label: "Multiplayer & Networking",
                description: "Client-server architecture, synchronization, latency handling.",
                difficulty: "advanced",
                resources: [
                    { label: "Unity Netcode", url: "https://docs.unity3d.com/Packages/com.unity.netcode.gameobjects@latest", type: "free" }
                ],
            },
        },

        // ========================
        // ADVANCED GRAPHICS
        // ========================

        {
            roadmapId: "game-developer",
            id: "advanced-graphics",
            position: { x: 400, y: 740 },
            data: {
                label: "Advanced Rendering",
                description: "Ray tracing, real-time rendering, PBR.",
                difficulty: "advanced",
                resources: [
                    { label: "Real-Time Rendering Guide", url: "https://www.realtimerendering.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "geforce-ai",
            position: { x: 400, y: 880 },
            data: {
                label: "NVIDIA AI & GeForce Technologies",
                description: "DLSS, AI upscaling, NVIDIA Reflex, RTX ray tracing.",
                difficulty: "advanced",
                resources: [
                    { label: "NVIDIA DLSS", url: "https://developer.nvidia.com/dlss", type: "free" },
                    { label: "NVIDIA RTX Docs", url: "https://developer.nvidia.com/rtx", type: "free" }
                ],
            },
        },

        // ========================
        // GAME DESIGN & POLISH
        // ========================

        {
            roadmapId: "game-developer",
            id: "game-design",
            position: { x: 150, y: 1020 },
            data: {
                label: "Game Design Principles",
                description: "Game mechanics, player engagement, balancing.",
                difficulty: "intermediate",
                resources: [
                    { label: "Game Design Concepts", url: "https://gamedesignconcepts.wordpress.com/", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "audio",
            position: { x: 650, y: 1020 },
            data: {
                label: "Game Audio",
                description: "Sound effects, spatial audio, music integration.",
                difficulty: "intermediate",
                resources: [
                    { label: "FMOD Docs", url: "https://www.fmod.com/resources/documentation", type: "free" }
                ],
            },
        },

        {
            roadmapId: "game-developer",
            id: "deployment",
            position: { x: 400, y: 1160 },
            data: {
                label: "Publishing & Optimization",
                description: "Performance optimization, Steam publishing, consoles.",
                difficulty: "advanced",
                resources: [
                    { label: "Steamworks Docs", url: "https://partner.steamgames.com/doc/home", type: "free" }
                ],
            },
        }
    ],

    edges: [

        // Foundation
        { roadmapId: "game-developer", id: "e1", source: "programming", target: "math" },
        { roadmapId: "game-developer", id: "e2", source: "programming", target: "computer-graphics" },

        // Engine Branch
        { roadmapId: "game-developer", id: "e3", source: "math", target: "unity" },
        { roadmapId: "game-developer", id: "e4", source: "computer-graphics", target: "unreal" },

        // Core Systems
        { roadmapId: "game-developer", id: "e5", source: "unity", target: "physics" },
        { roadmapId: "game-developer", id: "e6", source: "unreal", target: "physics" },

        { roadmapId: "game-developer", id: "e7", source: "physics", target: "ai" },
        { roadmapId: "game-developer", id: "e8", source: "physics", target: "multiplayer" },

        // Graphics Advanced
        { roadmapId: "game-developer", id: "e9", source: "ai", target: "advanced-graphics" },
        { roadmapId: "game-developer", id: "e10", source: "multiplayer", target: "advanced-graphics" },

        { roadmapId: "game-developer", id: "e11", source: "advanced-graphics", target: "geforce-ai" },

        // Design & Publishing
        { roadmapId: "game-developer", id: "e12", source: "ai", target: "game-design" },
        { roadmapId: "game-developer", id: "e13", source: "multiplayer", target: "audio" },

        { roadmapId: "game-developer", id: "e14", source: "geforce-ai", target: "deployment" },
        { roadmapId: "game-developer", id: "e15", source: "game-design", target: "deployment" },
        { roadmapId: "game-developer", id: "e16", source: "audio", target: "deployment" }
    ]
}
