import { Schema, model, models, Types } from 'mongoose'

const UserProgressSchema = new Schema({
  userId: { type: Types.ObjectId, ref: 'User', required: true, index: true },

  roadmapId: { type: String, required: true, index: true },

  completedNodes: [{ type: String }],

  updatedAt: { type: Date, default: Date.now },
})

UserProgressSchema.index({ userId: 1, roadmapId: 1 }, { unique: true })

export const UserProgress =
  models.UserProgress || model('UserProgress', UserProgressSchema)
