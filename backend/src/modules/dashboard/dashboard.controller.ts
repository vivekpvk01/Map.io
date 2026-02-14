import { Response } from "express"
import mongoose from "mongoose"
import { AuthRequest } from "../../middlewares/auth"
import { Roadmap } from "../../models/Roadmap"
import { RoadmapNode } from "../../models/RoadmapNode"
import { UserProgress } from "../../models/UserProgress"

export const getDashboardData = async (
    req: AuthRequest,
    res: Response
) => {
    try {
        const userId = req.user?.id

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            })
        }

        // 🔥 Convert string userId → ObjectId
        const objectUserId = new mongoose.Types.ObjectId(userId)

        // 1️⃣ Get all roadmaps
        const roadmaps = await Roadmap.find()
        const totalRoadmaps = roadmaps.length

        // 2️⃣ Get user progress records
        const userProgress = await UserProgress.find({
            userId: objectUserId,
        })

        let skillsCompleted = 0
        let totalCompletedNodes = 0
        let totalNodesAcrossRoadmaps = 0

        // 3️⃣ Loop through user progress (not all roadmaps)
        for (const progress of userProgress) {
            const totalNodes = await RoadmapNode.countDocuments({
                roadmapId: progress.roadmapId,
            })

            totalNodesAcrossRoadmaps += totalNodes
            totalCompletedNodes += progress.completedNodes.length

            // ✅ Fully completed roadmap
            if (
                totalNodes > 0 &&
                progress.completedNodes.length === totalNodes
            ) {
                skillsCompleted++
            }
        }

        // 4️⃣ Calculate overall progress
        const overallProgress =
            totalNodesAcrossRoadmaps > 0
                ? Math.round(
                    (totalCompletedNodes / totalNodesAcrossRoadmaps) * 100
                )
                : 0

        // 5️⃣ Recent activity
        const recentActivity = await UserProgress.find({
            userId: objectUserId,
        })
            .sort({ updatedAt: -1 })
            .limit(5)

        return res.status(200).json({
            success: true,
            data: {
                availableRoadmaps: totalRoadmaps,
                skillsCompleted,
                overallProgress,
                recentActivity,
            },
        })
    } catch (error) {
        console.error("Dashboard error:", error)
        return res.status(500).json({
            success: false,
            message: "Failed to load dashboard",
        })
    }
}
