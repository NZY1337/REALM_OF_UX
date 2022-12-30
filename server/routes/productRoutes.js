import express from "express";
import { UploadProductImage } from "../controllers/uploadsController.js";

const router = express.Router();
const product = new UploadProductImage();

router.route("/uploads").post(product.uploadImage);
// router
//   .route("/uploads/:projectId/:filename")
//   .put(product.deleteImageFromFsAndMongo);
// router.route("/uploads/:filename").delete(product.deleteImageFromFS);
router.route("/uploads/:filename").put(product.deleteImageFromFsAndMongo);

export default router;
