import styled from "styled-components";

const ImagePreviewActionsWrapper = styled.div`
  .image-preview {
    &-actions {
      border-radius: 5px;
      position: relative;
      flex-grow: 1;
      display: flex;
      position: relative;
      height: 150px;
      flex-grow: 1;
      box-shadow: var(--shadow-2);
      height: 150px;
      margin: 5px;

      svg {
        position: absolute;
        color: red;
        z-index: 2;
        top: 10px;
        right: 10px;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.2s;
        background-color: white;
        border-radius: 50%;
      }

      &:hover svg {
        opacity: 1;
      }

      img {
        position: relative;
        z-index: 1;
        object-fit: cover;
        border-radius: inherit;
      }

      &:hover:after {
        transform: rotateZ(0deg);
      }

      &:after {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0px;
        left: 0;
        transform: rotateZ(2deg);
        border-radius: 5px;
        content: "";
        background-color: orange;
        z-index: 0;
        transition: transform 0.2s;
      }
    }
  }
`;

export default ImagePreviewActionsWrapper;
