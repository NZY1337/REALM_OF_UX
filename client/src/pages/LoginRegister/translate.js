import { Eye, Envelope, Person } from "react-bootstrap-icons";

export const loginRegisterDict = {
  EN: {
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
  RO: {
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
};
