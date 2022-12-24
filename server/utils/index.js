import fs from "fs";

// const removeFile = (postTitle) => {
//   const deletePath = `public/uploads/${postTitle}`;

//   try {
//     if (fs.existsSync(deletePath)) {
//       fs.rm(deletePath, { recursive: true }, (error) => {
//         if (error) console.log(error);
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

const removeFile = (folderPath) => {
  fs.readdir(folderPath, (error, files) => {
    if (error) {
      console.log(error);
      return;
    }

    for (const file of files) {
      fs.unlink(`${folderPath}/${file}`, (error) => {
        if (error) console.log(error);
      });
    }

    fs.rmdir(folderPath, (error) => {
      if (error) console.log(error);
    });
  });
};

export { removeFile };
