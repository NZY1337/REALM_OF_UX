import styled from "styled-components";

const CircleDesignWrapper = styled.div`
  .circle-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    margin-left: auto;
    background: linear-gradient(
      247.22deg,
      #181b71 -76.6%,
      rgba(67, 127, 141, 0) 64.79%
    );

    img {
      mix-blend-mode: hard-light;
      width: 80%;
      height: 80%;
      object-fit: cover;
      border-radius: 50%;
      box-shadow: var(--shadow-4);
    }
  }
`;

export default CircleDesignWrapper;
