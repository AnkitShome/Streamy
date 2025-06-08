import mongoose from "mongoose";

const streamSchema = new mongoose.Schema({
   title: { type: String, required: true },
   description: String,
   streamUrl: { type: String, required: true },
   userId: { type: String, required: true },
   createdAt: { type: Date, default: Date.now },
   viewers: { type: Number, default: 0 }
}, { timestamps: true })

export default mongoose.model('Stream', streamSchema);