import axios from "axios";

export const makeRequest = async (method, url, data) => {
  try {
    const response = await axios({ method, url, data });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
