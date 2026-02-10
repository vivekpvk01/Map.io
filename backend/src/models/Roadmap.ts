import { Schema, model, models } from 'mongoose'

const RoadmapSchema = new Schema({
  id: { type: String, required: true, unique: true, index: true }, // Slug/ID
  title: { type: String, required: true },
  description: { type: String },
  isOfficial: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true })

export const Roadmap = models.Roadmap || model('Roadmap', RoadmapSchema)
