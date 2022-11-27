import styled from "styled-components";

const NavWrapper = styled.div`
  background-color:${(props) => props.color}}

  .toggle-language {
    margin: 0 1rem;
  }

  .navbar-toggler {
    border: none;
    color: var(--text-color-white);
    padding: unset;
    font-size: unset;
    background: linear-gradient(90deg, #f9f9f9 19.09%, #bc5318 98.42%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;

    &:focus {
      box-shadow: none;
    }
  }

  .logo {
    color: var(--text-color-white);
    &:hover {
      color: var(--text-color-orange);
    }
  }

  .navbar {
    .login {
      color: var(--text-color-white);
      display: flex;
      align-items: center;

      svg {
        margin-left: 0.5rem;
      }
      &:hover {
        color: var(--text-color-orange) !important;
      }
    }
  }
`;

export default NavWrapper;
