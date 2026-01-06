import { Schema, model, models } from 'mongoose'

const RoadmapSchema = new Schema({
  slug: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  description: { type: String },
  isOfficial: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
})

export const Roadmap = models.Roadmap || model('Roadmap', RoadmapSchema)

