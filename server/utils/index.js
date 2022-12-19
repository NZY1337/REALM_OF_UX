import * as fs from "fs";

const removeFile = (postTitle) => {
  const deletePath = `public/uploads/${postTitle}`;

  try {
    if (fs.existsSync(deletePath)) {
      fs.rmSync(deletePath, { recursive: true });
    }
  } catch (error) {
    nextTick(error);
  }
};

export { removeFile };
