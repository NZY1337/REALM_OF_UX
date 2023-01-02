import styled from "styled-components";

const NavWrapper = styled.div`
  //   border-bottom: 2px solid black;
  box-shadow: var(--shadow-4);
  .toggle-language {
    margin: 0 1rem;
  }

  .navbar-toggler {
    border: none;
    padding: unset;
    font-size: unset;
    font-family: var(--font-secondary);
    text-transform: uppercase;
    font-weight: bold;

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

  .home-nav {
    a,
    button.navbar-toggler {
      color: black;
    }
  }

  .not-home-nav {
    button {
      color: var(--text-color-orange);
    }
  }

  .navbar {
    .login {
      color: var(--text-color-orange);

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
