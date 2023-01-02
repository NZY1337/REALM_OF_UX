import styled from "styled-components";

const DropDownWrapper = styled.div`
  .dropdown-menu {
    box-shadow: var(--shadow-4);
    background: radial-gradient(
      187.6% 162.37% at 31.62% 76.54%,
      rgb(0 0 0 / 88%) 0%,
      rgba(40, 65, 102, 0.659655) 71.94%,
      rgba(56, 101, 168, 0.38) 100%
    );
    border: none;
    transition: all 0.2s !important;

    &:hover {
    }

    a,
    svg {
      color: turquoise !important;
      font-weight: 400;
    }
  }

  .dropdown-item {
    &:hover {
      background: radial-gradient(
        187.6% 162.37% at 31.62% 76.54%,
        rgb(49 43 43 / 88%) 0%,
        rgb(42 70 111 / 66%) 71.94%,
        rgb(97 114 140 / 38%) 100%
      );
    }

    &:active {
      background: none;
    }

    &:focus {
      border: none;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default DropDownWrapper;
