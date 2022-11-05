import express from "express";
import { CommentController } from "../controllers/commentController.js";

const router = express.Router();
const comment = new CommentController();

router.route("/add-comment").post(comment.addComment);
router.route("/get-comments/:projectId").get(comment.getComments);
router.route("/delete-comment").delete(comment.deleteComment);

export default router;
