// about
import {
  BarChart,
  BagX,
  Book,
  CalendarPlus,
  Eye,
  Envelope,
  Person,
  Phone,
} from "react-bootstrap-icons";

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

//dictionaries
import { aboutMeDict } from "../../../../pages/About/translate";
import { footerDict } from "../../../../components/Footer/translate";
import { sliderDict } from "../../../../pages/Home/Slider/translate";
import { aboutHomeDict } from "../../../../pages/Home/About/translate";
import { servicesHomeDict } from "../../../../pages/Home/Services/translate";
import { bannerHomeDict } from "../../../../pages/Home/Banner/translate";
import { contactHomeDict } from "../../../../pages/Home/ContactUs/translate";
import { navigationDict } from "../../../../components/Navigation/translate";

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
    blog: {
      titleSection: {
        title: "Projects",
        subtitle:
          "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form are all the varying",
      },
      subtitleSection: {
        description:
          "discover latest <b>tips & tricsk </b> that may help you reach your goals",
      },
    },
    banner: {
      ...bannerHomeDict.RO,
    },
    contactUs: {
      ...contactHomeDict.EN,
    },
  },
  loginRegister: {
    isLoggedIn: "Don't have an account? Please register",
    isRegistred: "Go back and log in",
    isLoggedInTitle: "Log in",
    isRegistredTitle: "Register",
    inputs: {
      login: [
        {
          name: "email",
          placeholder: "Email",
          type: "text",
          icon: Person,
        },
        {
          name: "password",
          placeholder: "Password",
          type: "password",
          icon: Eye,
        },
      ],
      register: [
        {
          name: "name",
          placeholder: "Name",
          type: "text",
          icon: Person,
        },
        {
          name: "email",
          placeholder: "Email",
          type: "text",
          icon: Envelope,
        },
        {
          name: "password",
          placeholder: "Password",
          type: "password",
          icon: Eye,
        },
      ],
    },
    titleSection: {
      login: {
        title: "Log in",
        subtitle: "explore the newest designs",
      },
      register: {
        title: "Register",
        subtitle: "find out what fits you better!",
      },
    },
  },
};

export default initialStateEN;
