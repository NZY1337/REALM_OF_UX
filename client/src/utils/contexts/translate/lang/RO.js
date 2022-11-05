// carousel
import carouselImg1 from "../../../../assets/images/img3.jpeg";
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
  Mailbox,
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
import img9 from "../../../../assets/images/img9.jpeg";
import img10 from "../../../../assets/images/img10.jpeg";

export default {
  globals: {
    footer: {
      level1: {
        col1: {
          identity:
            "Cele mai recente știri despre modă, acoperire despre frumusețe, stilul celebrităților, actualizări în săptămâna modei, recenzii culturale și videoclipuri pe RealmOfUx.com",
        },
        col2: {
          title: "Contacteaza-ne",
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
          title: "Servicii",
          links: [
            {
              page: "Design Logo",
            },
            {
              page: "Statistici Social Media",
            },
            {
              page: "Optimizare SEO",
            },
            {
              page: "Realizare Site Web",
            },
          ],
        },
        col4: {
          title: "Ne gasest pe:",
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
          "© 2022 Condé Nast. Toate drepturile rezervate. Utilizarea acestui site constituie acceptarea Acordului de utilizare și a Politicii noastre de confidențialitate și a Declarației privind cookie-urile și a drepturilor dumneavoastră de confidențialitate din California.",
        estd: "Creat in 2022 - toate drepturile rezervate",
      },
    },
    navigation: [
      {
        title: "Acasa",
        link: "/",
      },
      {
        title: "Despre",
        link: "/despre",
      },
      {
        title: "Servicii",
        link: "/servicii",
      },
      {
        title: "Proiecte",
        link: "/proiect",
      },
      {
        title: "Contact",
        link: "/contact",
      },
      {
        title: "Creator Banere",
        link: "/banner-creator",
      },
    ],
  },
  homepage: {
    carousel: [
      {
        title: "Dezvoltare Site",
        subtitle: "de la design la implementare",
        description:
          "Sunt multe tipuri de variatii pentru Lorem Ipsum disponibile dar majoritatea au suferite alteratii",
        image: carouselImg2,
      },
    ],
    about: {
      titleSection: {
        title: "Despre",
        subtitle:
          "Banner pe ecran complet deasupra pliului, meniul lipicios, portofoliul filtrabil, mărturiile clienților și un formular de contact funcțional sunt toate cele mai diferite",
      },
      leftColumn: [
        {
          description:
            "Banner pe ecran complet deasupra pliului, meniul lipicios, portofoliul filtrabil, mărturiile clienților și un formular de contact funcțional sunt toate cele mai diferit",
          icon: BagX,
        },
        {
          description:
            "Banner pe ecran complet deasupra pliului, meniul lipicios, portofoliul filtrabil, mărturiile clienților și un formular de contact funcțional sunt toate cele mai diferit",
          icon: Book,
        },
        {
          description:
            "Banner pe ecran complet deasupra pliului, meniul lipicios, portofoliul filtrabil, mărturiile clienților și un formular de contact funcțional sunt toate cele mai diferit",
          icon: BarChart,
        },
        {
          description:
            "Banner pe ecran complet deasupra pliului, meniul lipicios, portofoliul filtrabil, mărturiile clienților și un formular de contact funcțional sunt toate cele mai diferit",
          icon: CalendarPlus,
        },
      ],
      rightColumn: {
        description:
          "Lorem Ipsum este pur și simplu un text fals al industriei de tipărire și de tipărire. Lorem Ipsum a fost textul fals standard al industriei încă din anii 1500",
      },
    },
    services: {
      titleSection: {
        title: "Proiecte",
        subtitle:
          "Banner pe ecran complet deasupra pliului, meniul lipicios, portofoliul filtrabil, mărturiile clienților și un formular de contact funcțional sunt toate cele mai diferite",
      },
      subtitleSection: {
        description:
          "promoveaza-ti afacerea pentru <b>a atinge</b> noi potentiali clienti!",
      },
      descriptionSection: [
        "<b>Aceasta platforma este dedicata oamenilor care vor sa bla bla bla.</b> Amet quos a quod corporis harum sequi tempore, soluta accusamus. Ut cum culpa iste eligendi repellat consequuntur non quos doloribus iusto magnam.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Amet quos a quod corporis harum sequi tempore, soluta accusamus. Ut cum culpa iste eligendi repellat consequuntur non quos doloribus iusto magnam.",
      ],
      keysSection: [
        {
          title: "Servicii Media",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: social,
        },
        {
          title: "Dezvoltare Site Web",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: development,
        },
        {
          title: "Reclama Social Media",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: media,
        },
        {
          title: "Campanii SEO",
          description:
            "For start, end, and center alignment, responsive classes are available that use the same viewport width breakpoints as the grid system.",
          svg: seo,
        },
      ],
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
      title: "Vrei sa afli mai multe?",
      subtitle: "trimite-ne un mesaj",
    },
    contactUs: {
      titleSection: {
        title: "Contacteaza-ne",
        subtitle:
          "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form are all the varying",
      },
      subtitleSection: {
        description:
          "creste-ti afacerea <b>atragand</b> noi potentiali clienti",
      },
      form: {
        inputs: [
          {
            icon: Person,
            name: "Nume",
            id: "item-1",
          },
          {
            icon: Person,
            name: "Prenume",
            id: "item-2",
          },

          {
            icon: Mailbox,
            name: "Email",
            id: "item-3",
          },
          {
            icon: Phone,
            name: "Telefon",
            id: "item-4",
          },
        ],
        textarea: "Intreaba-ne orice...",
      },
    },
  },
  loginRegister: {
    titleSection: {
      login: {
        title: "Logheaza-te",
        subtitle: "exploreaza cele mai noii web designuri",
      },
      register: {
        title: "Inregistreaza-te",
        subtitle: "descoperea ceea ce ti se potriveste cel mai bine",
      },
    },
    isLoggedIn: "nu ai un cont? Creaza-ti unul",
    isRegistred: "intoarce-te si logheaza-te",
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
};
