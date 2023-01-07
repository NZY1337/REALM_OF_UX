import express from "express";
import { UserController } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();
const user = new UserController();

router.route("/register").post(user.registerUser);
router.route("/login").post(user.loginUser);
router.route("/update-user").patch(authenticateUser, user.updateUser);

export default router;
