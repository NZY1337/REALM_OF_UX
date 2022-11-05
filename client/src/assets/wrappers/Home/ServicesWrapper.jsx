import styled from "styled-components";

const ServicesWrapper = styled.section`
  padding: 8rem 0;
  background: radial-gradient(
    187.6% 162.37% at 31.62% 76.54%,
    rgba(21, 21, 21, 0.88) 0%,
    rgba(40, 65, 102, 0.659655) 71.94%,
    rgba(56, 101, 168, 0.38) 100%
  );

  .services {
    p {
      color: var(--text-color-white);

      b {
        font-weight: 800;
      }
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;

      img {
        object-fit: cover;
        border-radius: 5px;
        box-shadow: var(--shadow-4);
        height: 100%;
      }
    }
  }
`;

export default ServicesWrapper;
