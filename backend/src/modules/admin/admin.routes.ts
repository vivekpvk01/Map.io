import { Router } from 'express'
import { createRoadmap, createNode, addResource } from './admin.controller'
import { requireAdmin } from '../../middlewares/auth'

const router = Router()

router.post('/roadmaps', requireAdmin, createRoadmap)
router.post('/nodes', requireAdmin, createNode)
router.post('/resources', requireAdmin, addResource)

export default router

