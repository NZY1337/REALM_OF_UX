import styled from "styled-components";

const ContactUsWrapper = styled.section`
  padding-bottom: 8rem;
  padding-top: 8rem;
  color: var(--text-color-gray);
  background: #e2e7ea;

  .design-font,
  .title-wrapper {
    color: black;

    p {
      color: black;
    }
  }

  .contact-form {
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px black inset !important;
      -webkit-text-fill-color: var(--text-color-gray) !important;
    }

    input {
      font-size: 14px;
      height: 38px;
      padding-left: 1rem !important;
    }

    .input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n + 3),
    .input-group:not(.has-validation)
      > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
      border-radius: 0;
      background: none;
      border-color: rgb(130 120 114);
    }

    .input-group
      > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
      margin-left: 0;
    }

    input,
    textarea {
      background-color: transparent;
      border-color: rgb(130 120 114);
      color: var(--text-color-black);
      border-top: none;
      border-left: none;
      border-right: none;
      padding-left: 0px;
      border-radius: 0px;
      transition: none;

      ::placeholder {
        color: var(--text-color-black);
        font-weight: 300;
      }

      &:focus {
        box-shadow: none;
        border-color: var(--text-color-orange);
      }
    }
  }
`;

export default ContactUsWrapper;
