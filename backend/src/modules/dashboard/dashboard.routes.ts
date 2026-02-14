import { Router } from "express"
import { getDashboardData } from "./dashboard.controller"
import { requireAuth } from "../../middlewares/auth"

const router = Router()

router.get("/", requireAuth, getDashboardData)

export default router
