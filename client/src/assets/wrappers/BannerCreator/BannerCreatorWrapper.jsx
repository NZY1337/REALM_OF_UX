import styled from "styled-components";

const BannerCreatorWrapper = styled.div`
  [type="file"] {
    /* Style the color of the message that says 'No file chosen' */
    color: #878787;
  }

  .rect {
    cursor: move;
    user-select: none;
  }

  .content-editable {
    &:focus-visible {
      outline: none;
    }
  }

  .right-pannel-banner {
    h1,
    h2,
    h3,
    h4,
    h5,
    p {
      margin-bottom: 0;
    }

    b,
    strong {
      font-weight: bold;
    }

    p {
      font-size: 16px;
    }
  }

  [type="file"]::-webkit-file-upload-button {
    background: #ed1c1b;
    border: 2px solid #ed1c1b;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 12px;
    outline: none;
    padding: 5px 15px;
    text-transform: uppercase;
    transition: all 0.5s ease;
  }

  [type="file"]::-webkit-file-upload-button:hover {
    background: #fff;
    border: 2px solid #535353;
    color: #000;
  }
`;

export default BannerCreatorWrapper;
