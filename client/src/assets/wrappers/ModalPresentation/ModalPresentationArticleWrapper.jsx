import styled from "styled-components";
import "./index.scss";

const ModalPresentationArticleWrapper = styled.div`
  position: relative;
  overflow-y: auto;

  .close-modal-btn {
    position: fixed;
    top: 15px;
    right: 15px;
    color: white;
    font-size: 20px;
    cursor: pointer;
    // padding: 10px;
  }

  .modal-body {
    overflow-y: unset;
    padding: 0;

    img {
      height: auto;
    }
  }

  .modal-content {
    img {
      height: 100%;
    }
  }

  .modal-header {
    .btn-close {
      display: none;
    }
  }

  .modal-footer {
    padding: 2rem;
    width: 80%;
    margin: auto;
  }
`;

export default ModalPresentationArticleWrapper;
