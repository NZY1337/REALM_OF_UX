import fs from "fs";

const removeSingleFile = async (res, filename) => {
  try {
    const filePath = `public/uploads/Projects/${filename}`;
    console.log(filename);

    // Check if the file exists
    await fs.promises.stat(filePath);

    // If the file exists, attempt to delete it
    await fs.promises.unlink(filePath);

    // If the file was successfully deleted, send a response with a status code of 200 (OK)
    if (res)
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

const createNewProjectImgesArr = (clonedProject, filename) => {
  return {
    ...clonedProject,
    desktop: clonedProject.desktop.filter((img) => img !== filename),
    tablet: clonedProject.tablet.filter((img) => img !== filename),
    mobile: clonedProject.mobile.filter((img) => img !== filename),
  };
};

export { removeSingleFile, createNewProjectImgesArr };
