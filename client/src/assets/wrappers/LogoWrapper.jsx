import styled from "styled-components";

const LogoWrapper = styled.div`
  a {
    color: ${(props) => props.color || "var(--text-color-white)"};
    font-weight: 800;
    font-size: 1.5rem;
    transition: color 0.5s;

    &:hover {
      color: var(--text-color-orange);
    }

    span {
      color: var(--text-color-orange);
      font-size: inherit;
    }
  }
`;

export default LogoWrapper;
