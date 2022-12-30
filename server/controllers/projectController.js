import Project from "../models/Project.js";
import Comment from "../models/Comment.js";
import { removeSingleFile } from "../utils/index.js";

class ProjectController {
  async addProject(req, res, next) {
    const { name, category, desktop, tablet, mobile, content } = req.body;

    try {
      if (!name || !category || !desktop || !desktop || !mobile || !content) {
        next({ message: "Please provide all values", statusCode: 400 });
        return;
      }

      const project = await Project.create({
        name,
        category,
        desktop,
        tablet,
        mobile,
        content,
      });

      res.status(201).json({ project });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async editProject(req, res, next) {
    try {
      const { name, category, desktop, tablet, mobile, content } = req.body;
      const { projectId } = req.params;

      if (!name || !category || !desktop || !desktop || !mobile || !content) {
        next({ message: "Please provide all values", statusCode: 400 });
        return;
      }

      const project = await Project.findByIdAndUpdate(
        projectId,
        {
          name,
          category,
          desktop,
          tablet,
          mobile,
          content,
        },
        { new: true }
      );

      res.status(200).json({ project });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async getProjects(req, res, next) {
    try {
      const projects = await Project.find({});

      res.status(200).json({ projects });
    } catch (error) {
      next(error);
    }
  }

  async getProject(req, res, next) {
    try {
      const project = await Project.findOne({ _id: req.params.projectId });
      res.status(201).send({ project });
    } catch (error) {
      next({ message: "Project cannot be found", statusCode: 404 });
    }
  }

  async deleteProject(req, res, next) {
    try {
      const { projectId } = req.params;
      const project = await Project.findByIdAndRemove({
        _id: projectId,
      });

      const filestoDelete = [
        ...project.desktop,
        ...project.tablet,
        ...project.mobile,
      ];

      for (const filename of filestoDelete) {
        if (filestoDelete.includes(filename)) {
          await removeSingleFile(null, filename);
        }
      }

      const comments = await Comment.deleteMany({ projectId });

      res.status(200).json({ project, comments });
    } catch (error) {
      next(error);
    }
  }
}

export { ProjectController };
