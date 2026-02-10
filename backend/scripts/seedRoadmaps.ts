import mongoose from "mongoose"
import dotenv from "dotenv"
import { Roadmap } from "../src/models/Roadmap"
import { RoadmapNode } from "../src/models/RoadmapNode"
import { RoadmapEdge } from "../src/models/RoadmapEdge"

import { backendRoadmap } from "./roadmaps/backend"
import { devopsRoadmap } from "./roadmaps/devops"

dotenv.config()

async function seedRoadmap(config: any) {
  const { id, title, description, isOfficial, nodes, edges } = config

  await Roadmap.updateOne(
    { id },
    { id, title, description, isOfficial },
    { upsert: true }
  )

  await RoadmapNode.deleteMany({ roadmapId: id })
  await RoadmapEdge.deleteMany({ roadmapId: id })

  await RoadmapNode.insertMany(nodes)
  await RoadmapEdge.insertMany(edges)

  console.log(`${title} seeded successfully`)
}

async function run() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string)
    console.log("Connected to MongoDB Atlas")

    await seedRoadmap(backendRoadmap)
    await seedRoadmap(devopsRoadmap)

    console.log("All roadmaps seeded successfully")

    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}


run()
