import axios from "axios";

// or (method, url, data = null, token = null)
export const makeRequest = async (method, url, data, token) => {
  const options = {
    method,
    url,
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
