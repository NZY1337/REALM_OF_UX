import { GET_IMAGE_UPLOAD_ROUTE, DELETE_IMAGE_ROUTE, DELETE_IMAGE_ROUTE_NOID } from "./apis";
import { makeRequest } from "./utils";

export const uploadImageToPublicFolder = async (file, postTitle) => {
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

export const delteSingleImage = async (projectId, imageId) => {
    const data = await makeRequest("put", DELETE_IMAGE_ROUTE(projectId, imageId));
    return data;
}

export const deleteSingleImageNoID = async (filename) => {
    const data = await makeRequest("delete", DELETE_IMAGE_ROUTE_NOID(filename));
    return data;
}


