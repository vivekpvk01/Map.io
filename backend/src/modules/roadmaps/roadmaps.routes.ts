import { Router } from 'express'
import {
    getRoadmaps,
    getRoadmapBySlug,
    getRoadmapNodes,
    getNodeResources,
    searchRoadmaps,
    generateRoadmap
} from './roadmaps.controller'

const router = Router()

router.post('/generate', generateRoadmap)   // ✅ NEW

router.get('/search', searchRoadmaps)
router.get('/', getRoadmaps)
router.get('/:slug', getRoadmapBySlug)
router.get('/:slug/nodes', getRoadmapNodes)
router.get('/:slug/nodes/:nodeId/resources', getNodeResources)

export default router