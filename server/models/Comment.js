import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: [true, "Please provide comment"],
  },
  projectId: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: [true, "Please provide user"],
  },
  userEmail: {
    type: String,
    required: [true, "Please provide user"],
  },
});

export default mongoose.model("Comment", CommentSchema);
