import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: {
      type: String,
      required: true,
      enum: ["web-development", "ui-ux-design", "motion-design", "other"],
    },
    technologies: [{ type: String }],
    thumbnail: { type: String, required: true },
    githubUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
    videoUrl: { type: String, default: "" },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);
export default Project;
