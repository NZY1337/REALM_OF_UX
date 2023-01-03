import axios from "axios";

export const makeRequest = async (method, url, data, token) => {
  const options = {
    method,
    url,
    data,
  };
  
  if (token) {
    options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  if (data) {
    options.data = data;
  }

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
