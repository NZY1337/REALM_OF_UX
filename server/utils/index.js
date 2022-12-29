import fs from "fs";
import path from "path";

// refactor these two functions into one fn
const removePathGetFilename = (data) => {
  const getFilename = (file) => {
    const splitPath = file.split("/");
    return splitPath[splitPath.length - 1];
  };

  if (Array.isArray(data)) {
    return data.map(getFilename);
  } else {
    return getFilename(data);
  }
};

const removeFile = async (filestoDelete, next) => {
  try {
    const folderPath = "public/uploads/Projects";
    const files = await fs.promises.readdir(folderPath);
    console.log(files);

    for (const file of files) {
      if (filestoDelete.includes(file)) {
        const filePath = path.join(folderPath, file);
        await fs.promises.unlink(filePath);
      }
    }
  } catch (error) {
    next(error);
    console.error(error);
  }
};

const removeSingleImage = async (res, filename, isEdited = true) => {
  try {
    const filePath = `public/uploads/Projects/${filename}`;
    console.log(filename);

    // Check if the file exists
    await fs.promises.stat(filePath);

    // If the file exists, attempt to delete it
    await fs.promises.unlink(filePath);

    // If the file was successfully deleted, send a response with a status code of 200 (OK)
    if (isEdited)
      return res.status(200).send({ message: "File deleted successfully" });
  } catch (error) {
    if (error.code === "ENOENT") {
      // If the file was not found, send a response with a status code of 404 (Not Found)
      res.status(404).send({ error: "File not found" });
    } else {
      // If there was an error deleting the file, send a response with a status code of 500 (Internal Server Error)
      res.status(500).send({ error: "Error deleting file" });
    }
  }
};

export { removeFile, removeSingleImage, removePathGetFilename };
