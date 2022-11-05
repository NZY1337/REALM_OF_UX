import styled from "styled-components";

const TitleSectionDesignWrapper = styled.p`
  margin: ${(props) => props.centerMargin === "center" && "0 auto"};
  margin-left: ${(props) => props.centerMargin === "right" && "auto"};
  text-align: ${(props) => props.textAlign};
  max-width: 300px;
  b {
    color: var(--text-color-orange);
    text-decoration: underline;
    font-size: 16px;
  }
`;

export default TitleSectionDesignWrapper;
