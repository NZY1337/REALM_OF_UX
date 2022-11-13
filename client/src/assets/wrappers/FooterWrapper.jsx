import { Back } from "react-bootstrap-icons";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 4rem 0;
  color: var(--text-color-white);

  background: ${(props) => {
    return "black";
  }};

  .logo {
    color: var(--text-color-white);
    &:hover {
      color: var(--text-color-orange);
    }
  }

  h6 {
    margin-bottom: 14px;
    color: var(--text-color-white);
  }

  .wrapper {
    display: flex;
    justify-content: flex-end;
  }

  .footer-list {
    &.social {
      span a {
        margin-right: 15px;
      }

      li:last-child {
        margin-top: 1rem;
      }
    }

    li {
      display: flex;
      align-items: center;
      margin-bottom: 2.5px;
      color: white;

      svg {
        color: var(--text-color-orange);
      }

      span,
      a {
        color: inherit;
        font-size: 14px;
        font-weight: 300;
      }

      a:hover {
        color: var(--text-color-orange);
        filter: brightness(90%);
      }
    }
  }
`;

export default FooterWrapper;
