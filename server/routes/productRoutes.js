import express from "express";
import { UploadProductImage } from "../controllers/uploadsController.js";

const router = express.Router();
const product = new UploadProductImage();

router.route("/uploads").post(product.uploadImage);
router.route("/uploads/:projectId/:imageId").put(product.deleteImage);

export default router;
