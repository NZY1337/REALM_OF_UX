import path from "path";
import fs from "fs";
import Project from "../models/Project.js";
import { removePathGetSingleFileName } from "../utils/index.js";
const __dirname = path.resolve();

//LEARNING FILE UPLOAD in NODE JS :D
class UploadProductImage {
  async uploadImage(req, res, next) {
    try {
      const productImage = req.files.image;
      //   const postTitle = req.body.location;
      const dir = `public/uploads/Projects`;

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const imagePath = path.join(__dirname, `${dir}/${productImage.name}`);
      await productImage.mv(imagePath);

      return res
        .status(200)
        .json({ image: { src: `/uploads/Projects/${productImage.name}` } });
    } catch (err) {
      next(err);
    }
  }

  // from fileSystem & mongoose
  async deleteImage(req, res, next) {
    try {
      //   remove image from path
      fs.unlink(`public/uploads/Projects/${req.params.imageId}`, (error) => {
        if (error) {
          console.error(error);
        }
      });

      let project = await Project.findById(req.params.projectId);
      const images = [...project.desktop, ...project.tablet, ...project.mobile];

      const deletedImage = images.find(
        (image) => removePathGetSingleFileName(image) === req.params.imageId
      );

      if (!deletedImage)
        return res.status(404).send({ message: "image not found" });

      const allImages = {
        desktop: project.desktop.filter(
          (img) => removePathGetSingleFileName(img) !== req.params.imageId
        ),
        tablet: project.tablet.filter(
          (img) => removePathGetSingleFileName(img) !== req.params.imageId
        ),
        mobile: project.mobile.filter(
          (img) => removePathGetSingleFileName(img) !== req.params.imageId
        ),
      };

      console.log(allImages);

      const newSavedProject = { ...project, ...allImages };

      const newP = await Project.findByIdAndUpdate(
        { _id: req.params.projectId },
        newSavedProject,
        { new: true }
      );

      return res.status(200).json({ newP });
    } catch (err) {
      next(err);
    }
  }
}

export { UploadProductImage };
