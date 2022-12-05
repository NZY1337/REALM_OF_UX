import { unlink } from 'node:fs';

const removeFile = (imgPath) => {
    unlink(`public/${imgPath}`, (err) => {
        if (err) throw err;
        console.log(`${imgPath} path/file.txt was deleted`);
    });
}

export { removeFile }