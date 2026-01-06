import { Router } from 'express'
import { getProgress, updateProgress } from './progress.controller'
import { requireAuth } from '../../middlewares/auth'

const router = Router()

router.get('/:roadmapId', requireAuth, getProgress)
router.post('/:roadmapId', requireAuth, updateProgress)

export default router

