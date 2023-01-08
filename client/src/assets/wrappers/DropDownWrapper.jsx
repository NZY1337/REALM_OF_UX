import styled from "styled-components";

const DropDownWrapper = styled.div`
  .dropdown-menu {
    button {
      padding: 0 !important;
    }

    padding: 5px 0;
    box-shadow: var(--shadow-4);
    background: radial-gradient(
      187.6% 162.37% at 31.62% 76.54%,
      rgb(58 124 73) 0%,
      rgba(40, 65, 102, 0.659655) 71.94%,
      rgb(74 133 59 / 40%) 100%
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
      background: none;
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
