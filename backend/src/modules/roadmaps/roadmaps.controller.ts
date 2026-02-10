
import { Request, Response } from 'express'
import { Roadmap } from '../../models/Roadmap'
import { RoadmapNode } from '../../models/RoadmapNode'
import { RoadmapEdge } from '../../models/RoadmapEdge'

export async function getRoadmaps(req: Request, res: Response) {
  try {
    const roadmaps = await Roadmap.find({}).select('-_id id title description isOfficial').sort({ isOfficial: -1, createdAt: 1 })
    // Mapping _id to nothing or keeping it hidden. Frontend uses `slug` (which is `id` in our new model).
    // The previous controller returned `slug`. New model uses `id`. We should probably map `id` to `slug` in response if frontend expects `slug`.
    // Let's check frontend: `roadmap.slug` is used.
    // We should return `slug: roadmap.id`.

    const data = roadmaps.map(r => ({
      ...r.toObject(),
      slug: r.id
    }))

    return res.json({ success: true, data })
  } catch (error) {
    console.error('Get roadmaps error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function getRoadmapBySlug(req: Request, res: Response) {
  try {
    const { slug } = req.params
    // New model uses `id` for slug
    const roadmap = await Roadmap.findOne({ id: slug }).select('-_id -__v')

    if (!roadmap) {
      return res.status(404).json({ success: false, error: 'Roadmap not found' })
    }

    // CRITICAL for Frontend Persistence:
    // The frontend looks for `roadmap.edges` in the response of THIS endpoint.
    // Fetch edges and include them.
    const edges = await RoadmapEdge.find({ roadmapId: slug }).select('-_id -__v -roadmapId -createdAt')

    return res.json({
      success: true,
      data: {
        ...roadmap.toObject(),
        slug: roadmap.id, // Ensure slug field exists for frontend compatibility
        edges: edges // Include edges here so frontend sees them
      }
    })
  } catch (error) {
    console.error('Get roadmap error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function getRoadmapNodes(req: Request, res: Response) {
  try {
    const { slug } = req.params
    const roadmap = await Roadmap.findOne({ id: slug })
    if (!roadmap) {
      return res.status(404).json({ success: false, error: 'Roadmap not found' })
    }

    const nodes = await RoadmapNode.find({ roadmapId: slug }).select('-_id -__v -roadmapId -createdAt -updatedAt')

    // Map nodes to ensure they have the `nodeId` field if frontend expects it, or just `id`.
    // Frontend uses `node.nodeId || node.id`. Our model uses `id`. So we are good.
    // Also `title` vs `label`. Frontend uses `node.title || node.label`. Our model uses `data.label`.
    // But `page.tsx` mapping: `label: node.title || node.label || nodeData.label`.
    // Our nodes have `data.label`.
    // `page.tsx` also expects `node.position`. Our nodes have `position`.

    return res.json({ success: true, data: nodes })
    // We return ARRAY of nodes here to keep frontend happy.
    // Edges are served in getRoadmapBySlug.
  } catch (error) {
    console.error('Get nodes error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

export async function getNodeResources(req: Request, res: Response) {
  try {
    const { slug, nodeId } = req.params
    // Use `id` for slug, `id` for nodeId
    const node = await RoadmapNode.findOne({ roadmapId: slug, id: nodeId })

    if (!node) {
      return res.status(404).json({ success: false, error: 'Node not found' })
    }

    return res.json({ success: true, data: node.data?.resources || [] })
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
        { id: { $regex: keyword, $options: 'i' } }, // Search by id (slug)
        { description: { $regex: keyword, $options: 'i' } },
      ],
    })
      .select('-_id id title description')
      .limit(50)

    const data = roadmaps.map(r => ({
      ...r.toObject(),
      slug: r.id
    }))

    return res.json({
      success: true,
      data: {
        query: q,
        results: data,
        total: roadmaps.length,
      },
    })
  } catch (error) {
    console.error('Search roadmaps error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}
