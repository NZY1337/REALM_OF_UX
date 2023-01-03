import express from "express";
import { ProjectController } from "../controllers/projectController.js";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();
const project = new ProjectController();

router.route("/project").post(authenticateUser, project.addProject);
router.route("/all-projects").get(project.getProjects);
router.route("/get-project/:projectId").get(project.getProject);
router.route("/delete-project/:projectId").delete(authenticateUser, project.deleteProject);
router.route("/edit-project/:projectId").put(authenticateUser, project.editProject);

export default router;
