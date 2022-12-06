// carousel
import carouselImg1 from "../../../../assets/images/img20.jpeg";
import carouselImg2 from "../../../../assets/images/binoclu.jpeg";
import carouselImg3 from "../../../../assets/images/img7.jpeg";

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
  Telephone,
  Instagram,
  Facebook,
  Twitter,
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

export default {
  globals: {
    footer: {
      level1: {
        col1: {
          identity:
            "The latest fashion news, beauty coverage, celebrity style, fashion week updates, culture reviews, and videos on Vogue.com.",
        },
        col2: {
          title: "Get in touch",
          links: [
            {
              icon: Envelope,
              contact: "mandreicosmin@yahoo.com",
            },
            {
              icon: Telephone,
              contact: "+076 114 919",
            },
            {
              icon: Envelope,
              contact: "Unirii 10, Piatra-Neamt",
            },
          ],
        },
        col3: {
          title: "Services",
          links: [
            {
              page: "Logo Design",
            },
            {
              page: "Social Media Insights",
            },
            {
              page: "SEO Optimization",
            },
            {
              page: "Marketing Insights",
            },
            {
              page: "Websites Templates",
            },
          ],
        },
        col4: {
          title: "Get in touch",
          links: [
            {
              icon: Facebook,
              link: "https://facebook.com",
            },
            {
              icon: Instagram,
              link: "https://instagram.com",
            },
            {
              icon: Twitter,
              link: "https://twitter.com",
            },
          ],
        },
      },
      level2: {
        copyrights:
          "© 2022 Condé Nast. All rights reserved. Use of this site constitutes acceptance of our User Agreement and Privacy Policy and Cookie Statement and Your California Privacy Rights.",
        estd: "Estd. 2022 - all rights reserved",
      },
    },
    navigation: [
      {
        title: "Home",
        link: "/",
      },

      {
        title: "About",
        link: "/about",
      },
      {
        title: "Services",
        link: "/services",
      },
      {
        title: "Projects",
        link: "/projects",
      },
      {
        title: "Contact",
        link: "/contact",
      },
      {
        title: "Dashboard",
        link: "/dashboard",
      },
    ],
  },
  homepage: {
    carousel: [
      {
        title: "Hi! I'm Andrei",
        subtitle: "from design to implementation",
        description:
          "I'm a fullstack software engineer based in Romania",
        image: carouselImg1,
      },
    ],
    about: {
      titleSection: {
        title: "About",
        subtitle:
          "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form are all the varying",
      },
      secondTitleSection: "We are a creative agency.",
      leftColumn: [
        {
          description:
            "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form",
          icon: BagX,
        },
        {
          description:
            "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form",
          icon: Book,
        },
        {
          description:
            "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form",
          icon: BarChart,
        },
        {
          description:
            "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form",
          icon: CalendarPlus,
        },
      ],
      rightColumn: {
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
      },
    },
    services: {
      titleSection: {
        title: "Services",
        subtitle:
          "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form are all the varying",
      },
      subtitleSection: {
        description:
          "level up your business <b>to reach</b> new potential clients!",
      },
      descriptionSection: [
        "<b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</b> Amet quos a quod corporis harum sequi tempore, soluta accusamus. Ut cum culpa iste eligendi repellat consequuntur non quos doloribus iusto magnam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Amet quos a quod corporis harum sequi tempore, soluta accusamus. Ut cum culpa iste eligendi repellat consequuntur non quos doloribus iusto magnam.",
      ],
      keysSection: [
        {
          title: "Media Ads",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: social,
        },
        {
          title: "Development",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: development,
        },
        {
          title: "Advertising",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: media,
        },
        {
          title: "SEO Campaigns",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: seo,
        },
      ],
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
      blogData: [
        {
          category: "development",
          title: "Creative Digital Agency",
          image: img9,
        },
        {
          category: "social",
          title: "Welcome Humans",
          image: img2,
        },
        { category: "social", title: "Social Media", image: img4 },
        {
          category: "marketing",
          title: "Marketing as a second Job",
          image: img10,
        },
        {
          category: "development",
          title: "Grow your social Network with our Api...",
          image: img5,
        },
        {
          category: "seo",
          title: "Viena SEO Congress",
          image: img6,
        },
      ],
    },
    banner: {
      title: "Want to know more?",
      subtitle: "send us a message",
    },
    contactUs: {
      titleSection: {
        title: "Contact",
        subtitle:
          "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form are all the varying",
      },
      subtitleSection: {
        description:
          "level up your business <b>to reach</b> new potential clients!",
      },
      form: {
        inputs: [
          {
            icon: Person,
            name: "First Name",
            id: "item-1",
          },
          {
            icon: Person,
            name: "Last Name",
            id: "item-2",
          },

          {
            icon: Envelope,
            name: "Email",
            id: "item-3",
          },
          {
            icon: Phone,
            name: "Phone",
            id: "item-4",
          },
        ],
        textarea: "Ask us everything...",
      },
    },
  },
  loginRegister: {
    isLoggedIn: "Don't have an account? Please register",
    isRegistred: "Go back and log in",
    isLoggedInTitle:"Log in",
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
