import path from 'path';
import fs from 'fs';

const __dirname = path.resolve();

//LEARNING FILE UPLOAD in NODE JS :D
class UploadProductImage {
    async uploadImage(req, res, next) {
        try {
            const productImage = req.files.image;
            const postTitle = req.body.location;
            const dir = `./public/uploads/${postTitle}`

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, {recursive: true})
            }

            const imagePath = path.join(__dirname, `${dir}/${productImage.name}`);
            await productImage.mv(imagePath);
            
            return res.status(200).json({image: {src: `/uploads/${postTitle}/${productImage.name}`}})
        } catch(err) {
            next(err)
        }
    }
}

export { UploadProductImage }
  
 