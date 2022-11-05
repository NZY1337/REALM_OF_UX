import express from "express";
import { UserController } from "../controllers/authController.js";

const router = express.Router();
const user = new UserController();

router.route("/register").post(user.registerUser);
router.route("/login").post(user.loginUser);
router.route("/update-user").post(user.updateUser);

export default router;
