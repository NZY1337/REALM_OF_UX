import path from "path";
import fs from "fs";
import Project from "../models/Project.js";
import { createNewProjectImgesArr } from "../utils/index.js";

const checkDeletedImages = () => {
  // Check if the deleted image is in array
  const deletedImage = images.find((image) => image === filename);

  if (!deletedImage) {
    // If the image was not found, send a response with a status code of 404 (Not Found) and return
    return res
      .status(404)
      .send({ error: "file deleted from filesystem, not from database." });
  }
};

class UploadFile {
  uploadImage = async (req, res, next) => {
    try {
      const productImage = req.files.image;
      const dir = `public/uploads/Projects`;

      const dirExists = await fs.promises.stat(dir).catch(() => false);
      if (!dirExists) {
        await fs.promises.mkdir(dir, { recursive: true });
      }

      const imagePath = path.resolve(`${dir}/${productImage.name}`);
      await productImage.mv(imagePath);

      return res.status(200).json( { src: `${productImage.name}` } );
    } catch (err) {
      next(err);
    }
  };

  removeFile = async (res, filename) => {
    try {
      const filePath = `public/uploads/Projects/${filename}`;

      // Check if the file exists
      await fs.promises.stat(filePath);

      // If the file exists, attempt to delete it
      await fs.promises.unlink(filePath);

      if (res)
        return res.status(200).send({ message: "File deleted successfully" });
    } catch (error) {
      if (error.code === "ENOENT") {
        res.status(404).send({ error: "File not found" });
      } else {
        res.status(500).send({ error: "Error deleting file" });
      }
    }
  };

  // from fileSystem & mongoose
  removeFileFromFSandMongo = async (req, res, next) => {
    const { filename } = req.params;

    if (!req.body.projectId) {
      await this.removeFile(res, filename);
    } else {
      try {
        // remove image from path
        await this.removeFile(null, filename);

        let project = await Project.findById(req.body.projectId);

        let clonedProject = { ...project.toObject() };

        const newProject = createNewProjectImgesArr(clonedProject, filename);

        const editedProject = await Project.findByIdAndUpdate(
          { _id: req.body.projectId },
          newProject,
          { new: true }
        );

        return res.status(200).json({ editedProject });
      } catch (err) {
        next(err);
      }
    }
  };
}

export default UploadFile;
