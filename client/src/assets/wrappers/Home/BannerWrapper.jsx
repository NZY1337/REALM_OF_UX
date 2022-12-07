import styled from "styled-components";
import image from "../../images/img11.jpeg";

const BannerWrapper = styled.div`
  position: relative;

  &::after {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.85);
  }

  height: 50vh;

  video {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }

  .wrapper-content {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 1;
    text-align: center;

    h1 {
      background: linear-gradient(90deg, #f9f9f9 19.09%, #bc5318 98.42%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }

    svg,
    h4 {
      color: white;
    }
  }
`;

export default BannerWrapper;
