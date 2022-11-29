import path from 'path';
const __dirname = path.resolve();

//LEARNING FILE UPLOAD in NODE JS :D

class UploadProductImage {
    async uploadImage(req, res, next) {
        const productImage = req.files.image
        const imagePath = path.join(__dirname, `./public/uploads/${productImage.name}`);

        await productImage.mv(imagePath);
        return res.status(200).json({image: {src: `/uploads/${productImage.name}`}})
    }
}

export { UploadProductImage }