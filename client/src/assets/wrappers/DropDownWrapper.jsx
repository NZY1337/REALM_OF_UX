import styled from "styled-components";

const DropDownWrapper = styled.div`
  .dropdown-menu {
    button {
      padding: 0 !important;
    }

    padding: 5px 0;
    border-top: 2px solid var(--text-color-orange) !important;
    box-shadow: var(--shadow-4);
    background: radial-gradient(
      187.6% 162.37% at 31.62% 76.54%,
      rgb(0 0 0 / 88%) 0%,
      rgba(40, 65, 102, 0.659655) 71.94%,
      rgba(56, 101, 168, 0.38) 100%
    );
    min-width: 120px;
    border: none;
    transition: all 0.2s !important;

    &:hover {
    }

    a,
    svg {
      color: lightgray !important;
      font-weight: 400;
    }
  }

  .dropdown-item {
    padding: 0 10px;
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
