import { Back } from "react-bootstrap-icons";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  padding: 4rem 0;
  color: var(--text-color-white);

  background: ${(props) => {
    return "black";
    // if (props.black) {
    //   return `var(--bg-color-primary)`;
    // }

    // if (props.blue) {
    //   return `var(--bg-color-secondary)`;
    //   //   return `radial-gradient(187.6% 162.37% at 31.62% 76.54%, rgba(21, 21, 21, 0.78) 0%, rgba(40, 65, 102, 0.659655) 71.94%, rgba(56, 101, 168, 0.38) 100%)`;
    // }

    // if (props.white) {
    //   return `radial-gradient( 187.6% 162.37% at 31.62% 76.54%,rgb(129 129 129) 0%,rgb(89 149 238 / 66%) 100%,rgba(56,101,168,0.38) 100% )`;
    // }
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
