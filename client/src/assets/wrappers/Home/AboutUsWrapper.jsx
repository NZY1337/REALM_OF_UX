import styled from "styled-components";

const AboutUsWrapper = styled.section`
  padding: 8rem 0;
  display: flex;
  align-items: center;

  background:#e2e7ea;
  .about-us-find-more img {
    border-radius: 5px;
  }

  h1,
  .title-wrapper p,
  p {
    color: var(--text-color-black);
  }

  .about-us {
    
    &-find-more {
      position: relative;
      p {
        color:var(--text-color-black)
        bottom: 30px;
        left: 100px;
        padding: 1rem 2rem;
        margin: 0;
      }
    }

    &-facts {
      div {
        display: flex;

        svg {
          margin-right: 1rem;
          color: var(--text-color-orange);
        }
      }
    }
  }
`;

export default AboutUsWrapper;
