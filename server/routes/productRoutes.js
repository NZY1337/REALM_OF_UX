import express from "express";
import UploadFile from "../controllers/uploadsController.js";
import authenticateUser from "../middleware/auth.js";

const router = express.Router();
const product = new UploadFile();

router.route("/uploads").post(authenticateUser, product.uploadImage);
router.route("/uploads/:filename").put(authenticateUser, product.removeFileFromFSandMongo);

export default router;
