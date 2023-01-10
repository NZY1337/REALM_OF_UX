import { GET_IMAGE_UPLOAD_ROUTE, DELETE_IMAGE_ROUTE } from "./apis";
import { makeRequest } from "./utils";
import axios from 'axios';

export const uploadImageToPublicFolder = async (file, postTitle, token) => {
    try {
        // Create a new FormData object to hold the file and other data
        const formData = new FormData();
        formData.append("image", file);
        formData.append("location", postTitle);
    
        // Set the headers for the request
        const headers = {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        };
    
        // Make the POST request
        const { data: src } = await axios.post(GET_IMAGE_UPLOAD_ROUTE, formData, { headers });
        return src;
    } catch (err) {
        return err.response.data;
    }
};

export const deleteSingleFile = async (imageId, body) => {
  const data = await makeRequest("put", DELETE_IMAGE_ROUTE(imageId), body, null);
  return data;
};
