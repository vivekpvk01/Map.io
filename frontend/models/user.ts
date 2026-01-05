import type { ObjectId } from "mongodb"

export interface RoadmapProgress {
  completedNodes: string[]
  lastVisited: Date
  totalNodes: number
  progressPercentage: number
}

export interface User {
  _id?: ObjectId
  email: string
  name: string
  passwordHash: string
  roadmapProgress: Record<string, RoadmapProgress>
  createdAt: Date
  updatedAt: Date
}

export interface UserSession {
  id: string
  email: string
  name: string
}

// Default export for the User interface
export default User

// Named export for the User interface (this is what was missing)

// Additional exports for completeness
export type { RoadmapProgress, UserSession }
