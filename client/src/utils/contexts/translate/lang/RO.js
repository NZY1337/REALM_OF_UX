// dictionaries
import {
  aboutMeDict,
  footerDict,
  sliderDict,
  aboutHomeDict,
  servicesHomeDict,
  bannerHomeDict,
  contactHomeDict,
  navigationDict,
  loginRegisterDict,
  homeProjectsDict,
} from "./index.js";

// Do I really have to clone this?
const initialStateRO = {
  globals: {
    footer: { ...footerDict.RO },
    navigation: [...navigationDict.RO],
  },
  homepage: {
    carousel: [...sliderDict.RO],
    about: { ...aboutHomeDict.RO },
    services: {
      ...servicesHomeDict.RO,
    },
    projects: { ...homeProjectsDict.RO },
    banner: {
      ...bannerHomeDict.RO,
    },
    contactUs: {
      ...contactHomeDict.RO,
    },
  },
  loginRegister: { ...loginRegisterDict.RO },
  aboutMe: { ...aboutMeDict.RO },
};

export default initialStateRO;
