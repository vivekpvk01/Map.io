import { Request, Response } from 'express'
import { Roadmap } from '../../models/Roadmap'
import { RoadmapNode } from '../../models/RoadmapNode'

export async function getRoadmaps(req: Request, res: Response) {
  try {
    const roadmaps = await Roadmap.find({}).select('-__v').sort({ isOfficial: -1, createdAt: 1 })
    return res.json({ success: true, data: roadmaps })
  } catch (error) {
    console.error('Get roadmaps error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function getRoadmapBySlug(req: Request, res: Response) {
  try {
    const { slug } = req.params
    const roadmap = await Roadmap.findOne({ slug }).select('-__v')
    if (!roadmap) {
      return res.status(404).json({ success: false, error: 'Roadmap not found' })
    }
    return res.json({ success: true, data: roadmap })
  } catch (error) {
    console.error('Get roadmap error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function getRoadmapNodes(req: Request, res: Response) {
  try {
    const { slug } = req.params
    const roadmap = await Roadmap.findOne({ slug })
    if (!roadmap) {
      return res.status(404).json({ success: false, error: 'Roadmap not found' })
    }

    const nodes = await RoadmapNode.find({ roadmapId: roadmap._id }).select('-__v -roadmapId -_id')
    return res.json({ success: true, data: nodes })
  } catch (error) {
    console.error('Get nodes error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function getNodeResources(req: Request, res: Response) {
  try {
    const { slug, nodeId } = req.params
    const roadmap = await Roadmap.findOne({ slug })
    if (!roadmap) {
      return res.status(404).json({ success: false, error: 'Roadmap not found' })
    }

    const node = await RoadmapNode.findOne({ roadmapId: roadmap._id, nodeId })
    if (!node) {
      return res.status(404).json({ success: false, error: 'Node not found' })
    }

    return res.json({ success: true, data: node.resources || [] })
  } catch (error) {
    console.error('Get resources error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function searchRoadmaps(req: Request, res: Response) {
  try {
    const { q } = req.query
    if (!q || typeof q !== 'string') {
      return res.status(400).json({ success: false, error: "Query parameter 'q' is required" })
    }

    const keyword = q.trim().toLowerCase()
    const roadmaps = await Roadmap.find({
      $or: [
        { title: { $regex: keyword, $options: 'i' } },
        { slug: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } },
      ],
    })
      .select('-__v')
      .limit(50)

    return res.json({
      success: true,
      data: {
        query: q,
        results: roadmaps,
        total: roadmaps.length,
      },
    })
  } catch (error) {
    console.error('Search roadmaps error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

