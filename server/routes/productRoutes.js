import express from "express";
import UploadFile from "../controllers/uploadsController.js";

const router = express.Router();
const product = new UploadFile();

router.route("/uploads").post(product.uploadImage);
router.route("/uploads/:filename").put(product.removeFileFromFSandMongo);

export default router;
