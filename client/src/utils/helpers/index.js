import { TYPES } from "./constants";
import { toast } from "react-toastify";
import { getImagePath } from "../services/services";
import { GET_IMAGE_UPLOAD_ROUTE } from "../services/apis";
import axios from "axios";

export const trimUserName = (name) => {
  //   const firstName = name.split(" ")[0];
  //   const secondName = name.split(" ")[1].split("")[0];
  //   return `Hello, ${firstName} ${secondName}.`;
  return name;
};

export const getBannerSizes = () => {
  return {
    fbCover: {
      width: 1000,
      height: 800,
    },
    fbPost: {
      width: 900,
      height: 600,
    },
    instaCover: {
      width: 500,
      height: 400,
    },
    instaPost: {
      width: 800,
      height: 600,
    },
  };
};

// get the banner's name based on the banner's size
export const getBannerType = (actualSize) => {
  const sizes = getBannerSizes();
  let actualType = "";

  for (let size in sizes) {
    if (sizes[size].width === actualSize) {
      actualType = size;
    }
  }

  return TYPES.find((type) => type.id === actualType);
};

export const addStyleBasedType = () => {
  return {
    heading: {
      fontSize: 40,
      color: "#fff",
    },

    subheading: {
      fontSize: 20,
      color: "#fff",
    },

    paragraph: {
      color: "#fff",
    },
  };
};

export const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.onerror = (error) => reject(error);
  });
};

export const postStyle = (path) => {
  return {
    backgroundImage: `linear-gradient(rgba(26, 11, 11, 0), rgb(23 20 25 / 72%)), url("${path}")`,
  };
};

export const notify = (style, message) => {
  toast[style](message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    theme: "dark",
    autoClose: 2000,
  });
};

export const uploadImageToPublicFolder = async (file, postTitle) => {
  const formData = new FormData();
  formData.append("image", file);
  formData.append("location", postTitle);
  let error, projectSS;

  try {
    const {
      data: {
        image: { src },
      },
    } = await axios.post(GET_IMAGE_UPLOAD_ROUTE, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    projectSS = src;
  } catch (err) {
    projectSS = null;
    error = err;
  }
  return { projectSS, error };
};
