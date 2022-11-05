import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    trim: true,
  },
  category: {
    type: String,
    required: [true, "Please provide category"],
    minlength: 3,
    trim: true,
  },
  desktop: {
    type: String,
    required: [true, "Please provide the desktop ss"],
  },
  tablet: {
    type: String,
    required: [true, "Please provide the tablet ss"],
  },
  mobile: {
    type: String,
    required: [true, "Please provide the mobile ss"],
  },
});

export default mongoose.model("Project", ProjectSchema);
