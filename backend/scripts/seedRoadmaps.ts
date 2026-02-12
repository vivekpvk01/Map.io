import mongoose from "mongoose"
import dotenv from "dotenv"
import { Roadmap } from "../src/models/Roadmap"
import { RoadmapNode } from "../src/models/RoadmapNode"
import { RoadmapEdge } from "../src/models/RoadmapEdge"

import { backendRoadmap } from "./roadmaps/backend"
import { devopsRoadmap } from "./roadmaps/devops"
import { fullStackRoadmap } from "./roadmaps/full-stack"
import { aiEngineerRoadmap } from "./roadmaps/ai-engineer"
import { dataScientistRoadmap } from "./roadmaps/data-scientist"
import { dataAnalystRoadmap } from "./roadmaps/data-analyst"
import { androidRoadmap } from "./roadmaps/android"
import { iosRoadmap } from "./roadmaps/ios"
import { blockchainRoadmap } from "./roadmaps/blockchain"
import { qaRoadmap } from "./roadmaps/qa"
import { postgresqlRoadmap } from "./roadmaps/postgresql"
import { softwareArchitectRoadmap } from "./roadmaps/software-architect"
import { cyberSecurityRoadmap } from "./roadmaps/cyber-security"
import { uxDesignRoadmap } from "./roadmaps/ux-design"
import { gameDeveloperRoadmap } from "./roadmaps/game-developer"
import { technicalWriterRoadmap } from "./roadmaps/technical-writer"
import { mlopsRoadmap } from "./roadmaps/mlops"
import { productManagerRoadmap } from "./roadmaps/product-manager"
import { engineeringManagerRoadmap } from "./roadmaps/engineering-manager"
import { developerRelationsRoadmap } from "./roadmaps/developer-relations"
import { reactRoadmap } from "./roadmaps/react"
import { vueRoadmap } from "./roadmaps/vue"
import { angularRoadmap } from "./roadmaps/angular"
import { nodejsRoadmap } from "./roadmaps/nodejs"
import { pythonRoadmap } from "./roadmaps/python"
import { javaRoadmap } from "./roadmaps/java"
import { csharpRoadmap } from "./roadmaps/csharp"
import { goRoadmap } from "./roadmaps/go"
import { rustRoadmap } from "./roadmaps/rust"
import { flutterRoadmap } from "./roadmaps/flutter"

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
    await seedRoadmap(fullStackRoadmap)
    await seedRoadmap(aiEngineerRoadmap)
    await seedRoadmap(dataScientistRoadmap)
    await seedRoadmap(dataAnalystRoadmap)
    await seedRoadmap(androidRoadmap)
    await seedRoadmap(iosRoadmap)
    await seedRoadmap(blockchainRoadmap)
    await seedRoadmap(qaRoadmap)
    await seedRoadmap(postgresqlRoadmap)
    await seedRoadmap(softwareArchitectRoadmap)
    await seedRoadmap(cyberSecurityRoadmap)
    await seedRoadmap(uxDesignRoadmap)
    await seedRoadmap(gameDeveloperRoadmap)
    await seedRoadmap(technicalWriterRoadmap)
    await seedRoadmap(mlopsRoadmap)
    await seedRoadmap(productManagerRoadmap)
    await seedRoadmap(engineeringManagerRoadmap)
    await seedRoadmap(developerRelationsRoadmap)
    await seedRoadmap(reactRoadmap)
    await seedRoadmap(vueRoadmap)
    await seedRoadmap(angularRoadmap)
    await seedRoadmap(nodejsRoadmap)
    await seedRoadmap(pythonRoadmap)
    await seedRoadmap(javaRoadmap)
    await seedRoadmap(csharpRoadmap)
    await seedRoadmap(goRoadmap)
    await seedRoadmap(rustRoadmap)
    await seedRoadmap(flutterRoadmap)







    console.log("All roadmaps seeded successfully")


    process.exit(0)
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}


run()
