import { z } from 'zod'

export const createNodeSchema = z.object({
  roadmapId: z.string(),
  nodeId: z.string(),
  title: z.string(),
  order: z.number().optional(),
  description: z.string().optional(),
  prerequisites: z.array(z.string()).optional(),
  resources: z.array(z.object({
    platform: z.string(),
    label: z.string(),
    url: z.string().url(),
    type: z.enum(['free', 'paid'])
  })).optional()
})
