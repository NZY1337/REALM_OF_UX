import styled from "styled-components";

const BlgoDescriptionWrapper = styled.div`
  .blog-description-content {
    padding: 1rem;
    border-radius: 5px;
    width: ${(props) => (props.width ? props.width + "%" : "100% ")};
    transition: all 0.5s;

    h4 {
      margin-bottom: 1rem;
      color: var(--text-color-white);
    }

    span {
      color: var(--text-color-white);
      font-weight: bold;
      letter-spacing: 1px;
    }

    a {
      color: var(--text-color-orange);
      transition: all 0.4s;
    }
  }
`;

export default BlgoDescriptionWrapper;
