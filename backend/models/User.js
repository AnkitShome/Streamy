import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   clerkId: { type: String, required: true, unique: true },
   email: String,
   username: String,
   imageUrl: String,
   role: {
      type: String,
      enum: ['viewer', 'streamer'],
      default: 'viewer',
   },

   bio: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;