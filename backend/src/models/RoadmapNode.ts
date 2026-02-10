import { Schema, model, models } from 'mongoose'

const ResourceSchema = new Schema(
  {
    platform: { type: String },
    label: { type: String, required: true },
    url: { type: String, required: true },
    type: { type: String, default: 'free' },
  },
  { _id: false },
)

const RoadmapNodeSchema = new Schema({
  roadmapId: { type: String, required: true, index: true }, // FK strictly string now to match Roadmap.id
  id: { type: String, required: true }, // Node ID
  type: { type: String, default: 'customNode' },
  position: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
  },
  data: {
    label: { type: String, required: true },
    description: { type: String },
    difficulty: { type: String, default: 'beginner' },
    resources: [ResourceSchema],
    redirectUrl: { type: String },
    example: { type: String }, // support existing field
    definition: { type: String }, // support existing field
  },
  style: {
    backgroundColor: { type: String },
    color: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true })

RoadmapNodeSchema.index({ roadmapId: 1, id: 1 }, { unique: true })

export const RoadmapNode = models.RoadmapNode || model('RoadmapNode', RoadmapNodeSchema)
