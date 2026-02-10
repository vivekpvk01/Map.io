import { Schema, model, models } from 'mongoose'

const RoadmapEdgeSchema = new Schema({
    roadmapId: { type: String, required: true, index: true },
    id: { type: String, required: true },
    source: { type: String, required: true },
    target: { type: String, required: true },
    animated: { type: Boolean, default: false },
    style: {
        strokeDasharray: { type: String },
        stroke: { type: String },
        strokeWidth: { type: Number },
    },
    createdAt: { type: Date, default: Date.now },
})

RoadmapEdgeSchema.index({ roadmapId: 1, id: 1 }, { unique: true })

export const RoadmapEdge = models.RoadmapEdge || model('RoadmapEdge', RoadmapEdgeSchema)
