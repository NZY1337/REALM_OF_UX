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
    blog: {
      titleSection: {
        title: "Articole",
        subtitle:
          "Banner pe ecran complet deasupra pliului, meniul lipicios, portofoliul filtrabil, mărturiile clienților și un formular de contact funcțional sunt toate cele mai diferite",
      },
      subtitleSection: {
        description:
          "descopera ultimele <b>articole</b> care te-ar putea ajuta sa-ti dezvolti afacerea",
      },
      blogData: [
        {
          category: "dezvoltare",
          title: "Agentie digitala creativa",
          image: img9,
        },
        { category: "social", title: "Bun venit!", image: img2 },
        { category: "social", title: "Retele Sociale", image: img4 },
        {
          category: "social",
          title: "Marketingul in 2k22",
          image: img10,
        },
        {
          category: "dezvoltare",
          title: "Valorifica-ti afacerea cu API-ul nostru...",
          image: img5,
        },

        { category: "seo", title: "Viena SEO Congres", image: img6 },
      ],
    },
    banner: {
      ...bannerHomeDict.RO,
    },
    contactUs: {
      ...contactHomeDict.RO,
    },
  },
  loginRegister: {
    isLoggedIn: "Nu ai cont? Te rugam creaza-ti cont",
    isRegistred: "Intoarce-te si logheaza-te",
    isLoggedInTitle: "Logheaza-te",
    isRegistredTitle: "Creaza Cont",
    titleSection: {
      login: {
        title: "Logheaza-te",
        subtitle: "exploreaza cele mai in voga tehnici de design ",
      },
      register: {
        title: "Inregistreaza-te",
        subtitle: "descoperea ceea ce ti se potriveste cel mai bine",
      },
    },
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
          placeholder: "Parola",
          type: "password",
          icon: Eye,
        },
      ],
      register: [
        {
          name: "name",
          placeholder: "Nume",
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
          placeholder: "Parola",
          type: "password",
          icon: Eye,
        },
      ],
    },
  },
  aboutMe: { ...aboutMeDict.RO },
};

export default initialStateRO;
