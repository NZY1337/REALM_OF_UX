import styled from "styled-components";
import cover from "../../images/img15.jpeg";

//https://online-free-tools.com/en/css_pattern_generator_background
// 430px, 76px = 506px

const LoginRegisterWrapper = styled.div`
  .container-fluid {
    height: 100vh;
  }

  .row {
    height: inherit;
    position: relative;
    height: inherit;
    background-image: url(${cover});
    background-position: center bottom;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.4);
  }

  #login-register-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: var(--text-color-white);
      font-weight: bold;
      text-align: center;
      margin-bottom: 5rem;
    }

    .logo {
      color: var(--text-color-white);
      font-size: 3rem;
      margin-bottom: 5rem;
      display: block;
    }

    form {
      svg {
        color: var(--text-color-orange);
      }

      .password-icon {
        position: absolute;
        bottom: 15px;
        right: 10px;

        &:hover {
          cursor: pointer;
        }
      }

      //   width: 70%;

      button {
        svg {
          color: var(--text-color-white);
        }
        &:hover {
          color: white;
          border-color: white;
        }
      }

      .form-group {
        position: relative;
        &:last-child {
          margin-top: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;

          small {
            text-decoration: underline;
            color: var(--text-color-white);

            &:hover {
              cursor: pointer;
              opacity: 80%;
            }
          }
        }
      }

      label {
        color: white;
      }

      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      input:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px #131b24 inset !important;
        -webkit-font-size: 1rem !important;
        -webkit-text-fill-color: var(--text-color-gray) !important;
      }

      .style {
        color: red;
      }

      input {
        background-color: transparent;
        color: white;
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid var(--text-color-white);
        border-radius: 0;
        padding-left: 0;
        color: var(--text-color-gray);
        padding: 10px;

        &::placeholder {
          color: var(--text-color-gray);
        }

        &:focus {
          box-shadow: none;
          border-color: var(--text-color-orange);
        }
      }
    }
  }
`;

export default LoginRegisterWrapper;
