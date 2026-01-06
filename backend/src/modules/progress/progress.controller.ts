import { Response } from 'express'
import { UserProgress } from '../../models/UserProgress'
import { updateProgressSchema } from '../../utils/validators'
import { AuthRequest } from '../../middlewares/auth'

export async function getProgress(req: AuthRequest, res: Response) {
  try {
    const { roadmapId } = req.params
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Not authenticated' })
    }
    const progress = await UserProgress.findOne({ userId: req.user.id, roadmapId })
    if (!progress) {
      return res.json({ success: true, data: { completedNodes: [] } })
    }
    return res.json({ success: true, data: progress })
  } catch (error) {
    console.error('Get progress error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function updateProgress(req: AuthRequest, res: Response) {
  try {
    const { roadmapId } = req.params
    if (!req.user) {
      return res.status(401).json({ success: false, error: 'Not authenticated' })
    }
    const parse = updateProgressSchema.safeParse(req.body)
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.flatten() })
    }

    const result = await UserProgress.findOneAndUpdate(
      { userId: req.user.id, roadmapId },
      { completedNodes: parse.data.completedNodes, updatedAt: new Date() },
      { new: true, upsert: true },
    )

    return res.json({ success: true, data: result })
  } catch (error) {
    console.error('Update progress error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

