import Project from "../models/Project.js";
import Comment from "../models/Comment.js";

class ProjectController {
  async addProject(req, res, next) {
    const { name, category, desktop, tablet, mobile } = req.body;
    try {
      if (!name || !category || !desktop || !desktop || !mobile) {
        next({ message: "Please provide all values", statusCode: 400 });
        return;
      }

      const project = await Project.create({
        name,
        category,
        desktop,
        tablet,
        mobile,
      });

      res.status(201).json({ project });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async getProjects(req, res, next) {
    try {
      const projects = await Project.find({});

      return res.status(200).json({ projects });
    } catch (error) {
      next(error);
    }
  }

  async getProject(req, res, next) {
    try {
      const project = await Project.findOne({ _id: req.params.projectId });

      return res.status(201).send({ project });
    } catch (error) {
      next({ message: "Project cannot be found", statusCode: 404 });
    }
  }

  async deleteProject(req, res, next) {
    try {
      const { projectId } = req.body;

      const project = await Project.findOneAndDelete({
        _id: projectId,
      });

      const comments = await Comment.deleteMany({ projectId });

      res.status(201).send({ project, comments });
    } catch (err) {
      console.log(error);
      next(error);
    }
  }
}

export { ProjectController };
