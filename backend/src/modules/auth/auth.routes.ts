import { Router } from 'express'
import { signup, signin, logout, me } from './auth.controller'
import { requireAuth } from '../../middlewares/auth'

const router = Router()

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/logout', logout)
router.get('/me', requireAuth, me)

export default router

