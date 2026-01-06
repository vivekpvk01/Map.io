import { Response } from 'express'
import { Roadmap } from '../../models/Roadmap'
import { RoadmapNode } from '../../models/RoadmapNode'
import { createRoadmapSchema, createNodeSchema } from '../../utils/validators'
import { AuthRequest } from '../../middlewares/auth'

export async function createRoadmap(req: AuthRequest, res: Response) {
  try {
    const parse = createRoadmapSchema.safeParse(req.body)
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.flatten() })
    }

    const { slug, title, description, isOfficial } = parse.data
    const existing = await Roadmap.findOne({ slug })
    if (existing) {
      return res.status(400).json({ success: false, error: 'Roadmap slug already exists' })
    }

    const roadmap = await Roadmap.create({ slug, title, description, isOfficial })
    return res.status(201).json({ success: true, data: roadmap })
  } catch (error) {
    console.error('Create roadmap error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function createNode(req: AuthRequest, res: Response) {
  try {
    const parse = createNodeSchema.safeParse(req.body)
    if (!parse.success) {
      return res.status(400).json({ success: false, error: parse.error.flatten() })
    }

    const node = await RoadmapNode.create(parse.data)
    return res.status(201).json({ success: true, data: node })
  } catch (error) {
    console.error('Create node error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function addResource(req: AuthRequest, res: Response) {
  try {
    const { roadmapId, nodeId } = req.body
    const { platform, label, url, type } = req.body.resource

    if (!platform || !label || !url || !type) {
      return res.status(400).json({ success: false, error: 'Resource fields are required' })
    }

    const node = await RoadmapNode.findOneAndUpdate(
      { roadmapId, nodeId },
      { $push: { resources: { platform, label, url, type } } },
      { new: true },
    )

    if (!node) {
      return res.status(404).json({ success: false, error: 'Node not found' })
    }

    return res.json({ success: true, data: node })
  } catch (error) {
    console.error('Add resource error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

