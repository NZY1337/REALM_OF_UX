//dictionaries
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

const initialStateEN = {
  globals: {
    footer: { ...footerDict.EN },
    navigation: [...navigationDict.EN],
  },
  aboutMe: { ...aboutMeDict.EN },
  homepage: {
    carousel: [...sliderDict.EN],
    about: { ...aboutHomeDict.EN },
    services: {
      ...servicesHomeDict.EN,
    },
    projects: { ...homeProjectsDict.EN },
    banner: {
      ...bannerHomeDict.EN,
    },
    contactUs: {
      ...contactHomeDict.EN,
    },
  },
  loginRegister: { ...loginRegisterDict.EN },
};

export default initialStateEN;
