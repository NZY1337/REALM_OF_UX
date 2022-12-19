import fs from "fs";
console.log(fs);

const removeFile = (postTitle) => {
  const deletePath = `public/uploads/${postTitle}`;

  try {
    if (fs.existsSync(deletePath)) {
      fs.rmdirSync(deletePath, { recursive: true, force: true });
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeFile };
