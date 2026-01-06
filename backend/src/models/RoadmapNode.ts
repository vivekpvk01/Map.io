import { Schema, model, models, Types } from 'mongoose'

const ResourceSchema = new Schema(
  {
    platform: { type: String, required: true },
    label: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, enum: ['free', 'paid'], default: 'free' },
  },
  { _id: false },
)

const RoadmapNodeSchema = new Schema({
  roadmapId: { type: Types.ObjectId, ref: 'Roadmap', required: true, index: true },
  nodeId: { type: String, required: true },
  title: { type: String, required: true },
  order: { type: Number },
  description: { type: String },
  prerequisites: [{ type: String }],
  resources: [ResourceSchema],
})

RoadmapNodeSchema.index({ roadmapId: 1, nodeId: 1 }, { unique: true })

export const RoadmapNode = models.RoadmapNode || model('RoadmapNode', RoadmapNodeSchema)

