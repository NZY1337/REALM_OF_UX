//dictionaries
import { aboutMeDict } from "../../../../pages/About/translate";
import { footerDict } from "../../../../components/Footer/translate";
import { sliderDict } from "../../../../pages/Home/Slider/translate";
import { aboutHomeDict } from "../../../../pages/Home/About/translate";
import { servicesHomeDict } from "../../../../pages/Home/Services/translate";
import { bannerHomeDict } from "../../../../pages/Home/Banner/translate";
import { contactHomeDict } from "../../../../pages/Home/ContactUs/translate";
import { navigationDict } from "../../../../components/Navigation/translate";
import { loginRegisterDict } from "../../../../pages/LoginRegister/translate";
import { homeProjectsDict } from "../../../../pages/Home/Projects/translate";

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
      ...bannerHomeDict.RO,
    },
    contactUs: {
      ...contactHomeDict.EN,
    },
  },
  loginRegister: { ...loginRegisterDict.EN },
};

export default initialStateEN;
