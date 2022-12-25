import { GET_IMAGE_UPLOAD_ROUTE } from "./apis";
import { makeRequest } from "./utils";

export const uploadImageToPublicFolder = async (file, postTitle) => {
  console.log(file);
  const formData = new FormData();
  formData.append("image", file);
  formData.append("location", postTitle);
  const headers = { "Content-Type": "multipart/form-data" };
  const { image } = await makeRequest(
    "post",
    GET_IMAGE_UPLOAD_ROUTE,
    formData,
    headers
  );

  return image;
};
