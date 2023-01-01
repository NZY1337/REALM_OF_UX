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

    h1 {
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
  }
`;

export default TitleWrapper;
