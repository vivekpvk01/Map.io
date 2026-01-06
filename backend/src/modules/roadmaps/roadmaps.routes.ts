import { Router } from 'express'
import { getRoadmaps, getRoadmapBySlug, getRoadmapNodes, getNodeResources, searchRoadmaps } from './roadmaps.controller'

const router = Router()

router.get('/search', searchRoadmaps)
router.get('/', getRoadmaps)
router.get('/:slug', getRoadmapBySlug)
router.get('/:slug/nodes', getRoadmapNodes)
router.get('/:slug/nodes/:nodeId/resources', getNodeResources)

export default router

