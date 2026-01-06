import { z } from 'zod'

export const updateProgressSchema = z.object({
  completedNodes: z.array(z.string()),
})
