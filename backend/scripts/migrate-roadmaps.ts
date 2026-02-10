
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
import { Roadmap } from '../src/models/Roadmap'
import { RoadmapNode } from '../src/models/RoadmapNode'
import { RoadmapEdge } from '../src/models/RoadmapEdge'

// We need to import the static data. Since it's a TS file in frontend, we might need to copy/paste the content or require it if we can transpile.
// For simplicity and robustness in this script context, I will manually include the static data here to avoid TS compilation complexities crossing frontend/backend boundaries during this script execution.
// In a real CI/CD pipeline, we might share this package or have a build step.
// COPYING DATA FROM frontend/utils/roadmaps.ts MANUALLY FOR MIGRATION SCRIPT
// This ensures we have the specific version of data we want to freeze.

const roadmapList = [
    {
        title: "Frontend Developer",
        slug: "frontend",
        description: "Step by step guide to becoming a modern frontend developer",
        difficulty: "Beginner",
        type: "official",
        nodes: [
            {
                id: "html",
                position: { x: 250, y: 0 },
                data: {
                    label: "HTML",
                    description: "HyperText Markup Language is the standard markup language for documents designed to be displayed in a web browser.",
                    difficulty: "Beginner",
                    resources: [
                        { title: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "free" },
                        { title: "W3Schools HTML", url: "https://www.w3schools.com/html/", type: "free" },
                    ],
                },
            },
            {
                id: "css",
                position: { x: 250, y: 150 },
                data: {
                    label: "CSS",
                    description: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML.",
                    difficulty: "Beginner",
                    resources: [
                        { title: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS", type: "free" },
                        { title: "CSS-Tricks", url: "https://css-tricks.com/", type: "free" },
                    ],
                },
            },
            {
                id: "javascript",
                position: { x: 250, y: 300 },
                data: {
                    label: "JavaScript",
                    description: "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
                    difficulty: "Intermediate",
                    resources: [
                        { title: "MDN Web Docs - JavaScript", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", type: "free" },
                        { title: "JavaScript.info", url: "https://javascript.info/", type: "free" },
                    ],
                },
            },
            {
                id: "git",
                position: { x: 100, y: 450 },
                data: {
                    label: "Git / GitHub",
                    description: "Git is a distributed version control system. GitHub is a provider of Internet hosting for software development and version control using Git.",
                    difficulty: "Beginner",
                    resources: [
                        { title: "Git Documentation", url: "https://git-scm.com/doc", type: "free" },
                        { title: "GitHub Skills", url: "https://skills.github.com/", type: "free" },
                    ],
                },
            },
            {
                id: "npm",
                position: { x: 400, y: 450 },
                data: {
                    label: "npm",
                    description: "npm is a package manager for the JavaScript programming language.",
                    difficulty: "Beginner",
                    resources: [
                        { title: "npm Docs", url: "https://docs.npmjs.com/", type: "free" },
                    ],
                },
            },
            {
                id: "react",
                position: { x: 250, y: 600 },
                data: {
                    label: "React",
                    description: "React is a free and open-source front-end JavaScript library for building user interfaces based on components.",
                    difficulty: "Intermediate",
                    resources: [
                        { title: "React Documentation", url: "https://react.dev/", type: "free" },
                    ],
                },
            },
            {
                id: "tailwind",
                position: { x: 100, y: 750 },
                data: {
                    label: "Tailwind CSS",
                    description: "Tailwind CSS is an open source CSS framework.",
                    difficulty: "Intermediate",
                    resources: [
                        { title: "Tailwind CSS Docs", url: "https://tailwindcss.com/docs", type: "free" },
                    ],
                },
            },
            {
                id: "testing",
                position: { x: 400, y: 750 },
                data: {
                    label: "Testing",
                    description: "Software testing is the process of evaluating and verifying that a software product or application does what it is supposed to do.",
                    difficulty: "Advanced",
                    resources: [
                        { title: "Jest", url: "https://jestjs.io/", type: "free" },
                        { title: "Testing Library", url: "https://testing-library.com/", type: "free" },
                    ],
                },
            },
        ],
        edges: [
            { id: "e1", source: "html", target: "css" },
            { id: "e2", source: "css", target: "javascript" },
            { id: "e3", source: "javascript", target: "git" },
            { id: "e4", source: "javascript", target: "npm" },
            { id: "e5", source: "git", target: "react" },
            { id: "e6", source: "npm", target: "react" },
            { id: "e7", source: "react", target: "tailwind" },
            { id: "e8", source: "react", target: "testing" },
        ],
    },
    {
        title: "Backend Developer",
        slug: "backend",
        description: "Step by step guide to becoming a modern backend developer",
        difficulty: "Intermediate",
        type: "official",
        nodes: [
            {
                id: "db-basics",
                position: { x: 250, y: 0 },
                data: {
                    label: "Database Basics",
                    description: "Learn about relational and non-relational databases.",
                    difficulty: "Beginner",
                    resources: [],
                },
            },
            {
                id: "api",
                position: { x: 250, y: 150 },
                data: {
                    label: "APIs",
                    description: "Learn how to build RESTful APIs.",
                    difficulty: "Intermediate",
                    resources: [],
                },
            },
            {
                id: "auth",
                position: { x: 250, y: 300 },
                data: {
                    label: "Authentication",
                    description: "Learn about JWT, OAuth, and session management.",
                    difficulty: "Advanced",
                    resources: [],
                },
            },
        ],
        edges: [
            { id: "eb1", source: "db-basics", target: "api" },
            { id: "eb2", source: "api", target: "auth" },
        ]
    }
];

interface StaticRoadmapEdge {
    id: string;
    source: string;
    target: string;
    animated?: boolean;
}

interface StaticRoadmapNode {
    id: string;
    position: { x: number; y: number };
    data: {
        label: string;
        description: string;
        difficulty: string;
        resources: Array<{ title: string; url: string; type: string }>;
        redirectUrl?: string; // Optional in source, but we generate it
    };
}

interface StaticRoadmap {
    title: string;
    slug: string;
    description: string;
    difficulty: string;
    type: string;
    nodes: StaticRoadmapNode[];
    edges?: StaticRoadmapEdge[];
}

const typedRoadmapList: StaticRoadmap[] = roadmapList as StaticRoadmap[];

// Load env vars
dotenv.config({ path: path.join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mapio';

async function migrate() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected.');

        // Optional: Clear existing data for official roadmaps to ensure clean slate from static source
        // In production we might be more careful, but for this "Migration Phase 1" where Static is truth, we allow overwrite.
        console.log('Cleaning up old data...');
        // We only remove data for the slugs we are importing to avoid deleting user custom roadmaps (though schema changed, so maybe we should?)
        // The previous schema used 'slug' in Roadmap. The new one uses 'id'.
        // We should probably wipe mostly everything since the schema structure for Nodes is radically different (position, etc was missing).
        // Let's wipe everything for the migrated slugs.

        // Drop collections to clear old indexes (schema change from nodeId to id)
        try { await mongoose.connection.db!.dropCollection('roadmaps'); } catch (e) { }
        try { await mongoose.connection.db!.dropCollection('roadmapnodes'); } catch (e) { }
        try { await mongoose.connection.db!.dropCollection('roadmapedges'); } catch (e) { }

        console.log('Starting migration...');

        for (const map of typedRoadmapList) {
            console.log(`Migrating: ${map.title} (${map.slug})`);

            // 1. Create Roadmap
            await Roadmap.create({
                id: map.slug,
                title: map.title,
                description: map.description,
                isOfficial: true,
            });

            // 2. Create Nodes
            if (map.nodes) {
                for (const node of map.nodes) {
                    // Map static node fields to new schema
                    await RoadmapNode.create({
                        roadmapId: map.slug,
                        id: node.id,
                        type: 'customNode',
                        position: node.position,
                        data: {
                            ...(node.data || {}),
                            definition: node.data.description, // Mapping description to definition as per frontend usage
                            // Ensure redirectUrl exists if required by schema, but frontend static data doesn't have it explicitly.
                            // Prompt says "redirectUrl must exist". We generate a default based on label or id.
                            redirectUrl: `/learn/${map.slug}/${node.id}`,
                            resources: (node.data.resources || []).map(r => ({
                                label: r.title,
                                url: r.url,
                                type: r.type,
                                platform: 'web' // default
                            }))
                        },
                        style: {
                            backgroundColor: "#1E1E2F", // Default style
                            color: "#ffffff"
                        }
                    });
                }
            }

            // 3. Create Edges
            if (map.edges) {
                for (const edge of map.edges) {
                    await RoadmapEdge.create({
                        roadmapId: map.slug,
                        id: edge.id,
                        source: edge.source,
                        target: edge.target,
                        animated: edge.animated || false,
                        style: {
                            stroke: '#64748b',
                            strokeWidth: 2
                        }
                    });
                }
            }
        }

        console.log('Migration complete!');
        process.exit(0);
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}

migrate();
