import styled from "styled-components";

const PageSectionWrapper = styled.div`
  .container-fluid {
    background-image: url(${(props) => props.cover});
    background-position: center center;
    background-size: cover;
    width: 100%;
    height: 500px;

    .row {
      height: inherit;
      background: rgba(0, 0, 0, 0.3);
    }

    .banner-section-container {
      text-align: center;

      h1 {
        font-weight: bold;
        background: linear-gradient(90deg, #f9f9f9 19.09%, #bc5318 98.42%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export default PageSectionWrapper;
