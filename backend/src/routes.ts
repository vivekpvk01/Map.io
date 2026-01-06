import { Router } from 'express'
import authRoutes from './modules/auth/auth.routes'
import roadmapsRoutes from './modules/roadmaps/roadmaps.routes'
import progressRoutes from './modules/progress/progress.routes'
import adminRoutes from './modules/admin/admin.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/roadmaps', roadmapsRoutes)
router.use('/progress', progressRoutes)
router.use('/admin', adminRoutes)

export default router

