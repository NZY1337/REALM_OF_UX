import fs from "fs";
import path from "path";


// refactor these two functions into one fn
const removePathGetFilename = (filesToDelete) => {
  return filesToDelete.map((file) => {
    const splitPath = file.split("/");
    return splitPath[splitPath.length - 1];
  });
};

const removePathGetSingleFileName = (file) => {
  const splitPath = file.split("/");
  return splitPath[splitPath.length - 1];
};

const removeFile = (filestoDelete, next) => {
  try {
    const projectFileNames = removePathGetFilename(filestoDelete);
    const folderPath = "public/uploads/Projects";
    fs.readdir(folderPath, (err, files) => {
      console.log(files);
      if (err) {
        throw new Error(`An error occurred while reading the folder: ${err}`);
      }

      for (const file of files) {
        if (projectFileNames.includes(file)) {
          const filePath = path.join(folderPath, file);
          fs.unlink(filePath, (unlinkErr) => {
            if (unlinkErr) {
              throw new Error(
                `An error occurred while deleting the file: ${unlinkErr}`
              );
            }
          });
        }
      }
    });
  } catch (error) {
    next(error);
    console.error(error);
  }
};

export { removeFile, removePathGetSingleFileName };
