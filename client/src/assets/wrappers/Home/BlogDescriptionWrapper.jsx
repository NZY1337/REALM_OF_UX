import styled from "styled-components";

const BlgoDescriptionWrapper = styled.div`
  .blog-description-content {
    padding: 1rem;
    border-radius: 5px;
    width: ${(props) => (props.width ? props.width + "%" : "100% ")};
    transition: all 0.5s;

    h4 {
      font-weight: 800;
      margin-bottom: 1rem;
      color: var(--text-color-white);
    }

    span {
      color: var(--text-color-white);
      font-weight: 300;
      letter-spacing: 1px;
    }

    a {
      color: var(--text-color-orange);
      font-weight: bold;
      transition: all 0.4s;

      //   position: absolute;
      //   bottom: 1rem;
      //   left: 1.25rem;
    }
  }
`;

export default BlgoDescriptionWrapper;
