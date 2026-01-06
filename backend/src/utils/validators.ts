import { z } from 'zod'

export const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
})

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export const createRoadmapSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  description: z.string().optional(),
  isOfficial: z.boolean().optional(),
})

export const createNodeSchema = z.object({
  roadmapId: z.string(),
  nodeId: z.string(),
  title: z.string(),
  order: z.number().optional(),
  description: z.string().optional(),
  prerequisites: z.array(z.string()).optional(),
  resources: z
    .array(
      z.object({
        platform: z.string(),
        label: z.string(),
        url: z.string().url(),
        type: z.enum(['free', 'paid']),
      }),
    )
    .optional(),
})

export const updateProgressSchema = z.object({
  completedNodes: z.array(z.string()),
})

