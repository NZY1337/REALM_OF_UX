import styled from "styled-components";

const NavWrapper = styled.div`
  background-color:${(props) => props.color}}

  .toggle-language {
    margin: 0 1rem;
  }

  .navbar-toggler {
    border: none;
    color: var(--text-color-orange);
    padding: unset;
    font-size: unset;
    font-family: var(--font-secondary);
    text-transform: uppercase;
    // letter-spacing: 1px;
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
    z-index:2;
    width:100%;
    position:absolute;
    top:0;
    left:0;
  }

  .not-home-nav {
    background-color:black!important;
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
