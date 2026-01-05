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

// Default export
export default User

// Named export for backward compatibility
