import { unlink } from 'node:fs';
import fs from 'fs';

const removeFile = (postTitle) => {
    // unlink(`public/uploads/${postTitle}`, (err) => {
    //     if (err) throw err;
    //     console.log(`${imgPath} path/file.txt was deleted`);
    // });

    fs.rmSync(`public/uploads/${postTitle}`, { recursive: true, force: true });
}

export { removeFile }