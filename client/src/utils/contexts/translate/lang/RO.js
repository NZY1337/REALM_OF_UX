// about
import { Eye, Envelope, Person, Phone, Mailbox } from "react-bootstrap-icons";
// services
import seo from "../../../../assets/images/seo.svg";
import media from "../../../../assets/images/ads.svg";
import development from "../../../../assets/images/dev.svg";
import social from "../../../../assets/images/social.svg";

// blog
import img2 from "../../../../assets/images/img2.jpeg";
import img4 from "../../../../assets/images/img4.jpeg";
import img5 from "../../../../assets/images/img5.jpeg";
import img6 from "../../../../assets/images/img6.jpeg";
import img9 from "../../../../assets/images/img20.jpeg";
import img10 from "../../../../assets/images/img10.jpeg";

// dictionaries
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
