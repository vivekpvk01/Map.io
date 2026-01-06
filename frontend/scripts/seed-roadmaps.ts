// Usage: pnpm tsx scripts/seed-roadmaps.ts
import 'dotenv/config'
import mongoose from 'mongoose'
import { Roadmap } from '../lib/models/roadmap'
import { RoadmapNode } from '../lib/models/roadmapNode'

const MONGODB_URI = process.env.MONGODB_URI as string

async function main() {
  await mongoose.connect(MONGODB_URI)

  // Sample Roadmap and Nodes
  const roadmap = await Roadmap.create({
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    description: 'Learn HTML, CSS, JS, React, and core web skills step-by-step',
    isOfficial: true,
  })
  await RoadmapNode.create([
    {
      roadmapId: roadmap._id,
      nodeId: 'html',
      title: 'HTML',
      order: 1,
      description: 'Structure your pages with HTML',
      prerequisites: [],
      resources: [
        {
          platform: 'GeeksforGeeks',
          label: 'HTML Introduction',
          url: 'https://www.geeksforgeeks.org/html/html-introduction/',
          type: 'free'
        }
      ]
    },
    {
      roadmapId: roadmap._id,
      nodeId: 'css',
      title: 'CSS',
      order: 2,
      description: 'Style with CSS',
      prerequisites: ['html'],
      resources: [
        {
          platform: 'GeeksforGeeks',
          label: 'CSS Introduction',
          url: 'https://www.geeksforgeeks.org/css-introduction/',
          type: 'free'
        }
      ]
    }
    // Add more nodes as needed
  ])
  console.log('Seed done')
  process.exit(0)
}
main().catch((e) => { console.error(e); process.exit(1) })

