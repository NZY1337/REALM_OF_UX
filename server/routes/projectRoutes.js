import express from "express";
import { ProjectController } from "../controllers/projectController.js";

const router = express.Router();
const project = new ProjectController();

router.route("/project").post(project.addProject);
router.route("/all-projects").get(project.getProjects);
router.route("/get-project/:projectId").get(project.getProject);
router.route("/delete-project").delete(project.deleteProject);

export default router;
