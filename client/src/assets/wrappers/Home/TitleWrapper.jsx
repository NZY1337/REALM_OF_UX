import styled from "styled-components";

const TitleWrapper = styled.div`
  .title-wrapper {
    margin: ${(props) => props.centerMargin === "center" && "0 auto"};
    margin-left: ${(props) => props.centerMargin === "right" && "auto"};
    max-width: 450px;
    margin-bottom: ${(props) => props.marginB + "rem"};
    color: var(--text-color-white);
    padding: 1rem;
    position: relative;
    text-align: left;

    p {
      margin-bottom: 0;
      color: var(--text-color-gray);
    }

    h1:not(.design-font) {
      font-weight: 800;
      margin-bottom: 0;
      position: relative;

      &::before {
        position: absolute;
        content: "";
        width: 50px;
        height: 5px;
        background-color: var(--text-color-orange);
        top: -10px;
        left: 0;
        display: inline-block;
      }
    }

    h1.design-font {
      position: absolute;
      opacity: 0.2;
      color: var(--text-color-gray);
      font-size: 150px;
      font-weight: 800;
      //   font-family: var(--tertiary-font);
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
`;

export default TitleWrapper;
