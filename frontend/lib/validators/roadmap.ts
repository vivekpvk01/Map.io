import { z } from 'zod'

export const roadmapSlugSchema = z.object({
  slug: z.string().min(2),
})

export const createRoadmapSchema = z.object({
  slug: z.string().min(2),
  title: z.string().min(2),
  description: z.string().optional(),
  isOfficial: z.boolean().optional(),
})
