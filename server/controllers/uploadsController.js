import path from "path";
import fs from "fs";
import Project from "../models/Project.js";
import { removeSingleFile, createNewProjectImgesArr } from "../utils/index.js";
const __dirname = path.resolve();

// // Check if the deleted image is in array
// const deletedImage = images.find((image) => image === req.params.filename);

// if (!deletedImage) {
//   // If the image was not found, send a response with a status code of 404 (Not Found) and return
//   return res
//     .status(404)
//     .send({ error: "file deleted from filesystem, not from database." });
// }

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

      return res.status(200).json({ image: { src: `${productImage.name}` } });
    } catch (err) {
      next(err);
    }
  }

  // from fileSystem & mongoose
  async deleteImageFromFsAndMongo(req, res, next) {
    if (!req.body.projectId) {
      await removeSingleFile(res, req.params.filename);
    } else {
      try {
        // remove image from path
        await removeSingleFile(null, req.params.filename);

        // Find the project in the database
        let project = await Project.findById(req.body.projectId);

        let clonedProject = { ...project.toObject() };

        // Create a new project object with the deleted image removed from the desktop, tablet, and mobile arrays
        const newProject = createNewProjectImgesArr(
          clonedProject,
          req.params.filename
        );

        // Update the project in the database with the new project object
        const editedProject = await Project.findByIdAndUpdate(
          { _id: req.body.projectId },
          newProject,
          { new: true }
        );

        // Send a response with a status code of 200 (OK) and the updated project object
        return res.status(200).json({ editedProject });
      } catch (err) {
        // If there was an error, call the next middleware function with the error
        next(err);
      }
    }
  }
}

export { UploadProductImage };
