import { Envelope, Person, Phone, Mailbox } from "react-bootstrap-icons";

export const contactHomeDict = {
  EN: {
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
  RO: {
    titleSection: {
      title: "Contacteaza-ne",
      subtitle:
        "Full-screen banner above the fold, sticky menu, filterable portfolio, client testimonials and a working contact form are all the varying",
    },
    subtitleSection: {
      description: "creste-ti afacerea <b>atragand</b> noi potentiali clienti",
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
};
