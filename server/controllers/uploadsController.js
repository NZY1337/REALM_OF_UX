import path from "path";
import fs from "fs";
import Project from "../models/Project.js";
import { removeSingleImage, removePathGetFilename } from "../utils/index.js";
const __dirname = path.resolve();

//LEARNING FILE UPLOAD in NODE JS :D
class UploadProductImage {
  async uploadImage(req, res, next) {
    try {
      const productImage = req.files.image;
      const dir = `public/uploads/Projects`;

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const imagePath = path.join(__dirname, `${dir}/${productImage.name}`);
      await productImage.mv(imagePath);

      //   return res
      //     .status(200)
      //     .json({ image: { src: `/uploads/Projects/${productImage.name}` } });
      return res.status(200).json({ image: { src: `${productImage.name}` } });
    } catch (err) {
      next(err);
    }
  }

  // from fileSystem & mongoose
  async deleteImageFromFsAndMongo(req, res, next) {
    try {
      // remove image from path
      // await removeSingleImage(res, removePathGetFilename(req.params.filename));
      // console.log(req.params.filename);

      let project = await Project.findById(req.params.projectId);
      const images = [...project.desktop, ...project.tablet, ...project.mobile];

      const deletedImage = images.find(
        (image) => image === req.params.filename
      );

      if (!deletedImage)
        return res.status(404).send({ message: "image not found" });

      const newProject = {
        ...project,
        desktop: project.desktop.filter(
          (img) => removePathGetFilename(img) !== req.params.filename
        ),
        tablet: project.tablet.filter(
          (img) => removePathGetFilename(img) !== req.params.filename
        ),
        mobile: project.mobile.filter(
          (img) => removePathGetFilename(img) !== req.params.filename
        ),
      };

      const editedProject = await Project.findByIdAndUpdate(
        { _id: req.params.projectId },
        newProject,
        { new: true }
      );

      return res.status(200).json({ editedProject });
    } catch (err) {
      next(err);
    }
  }

  async deleteImageFromFS(req, res) {
    const { filename } = req.params;
    console.log(filename);
    await removeSingleImage(res, filename);
  }
}

export { UploadProductImage };
