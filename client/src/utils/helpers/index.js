import { TYPES } from "./constants";

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
      fontWeight: "bold",
      color: "#fff",
    },

    subheading: {
      fontSize: 20,
      color: "#fff",
    },

    paragraph: {
      fontWeight: "100",
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
    backgroundImage: `linear-gradient(rgba(26, 11, 11, 0), rgb(91 47 124 / 42%)), url(${path})`,
  };
};
