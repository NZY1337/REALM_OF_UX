import styled from "styled-components";

const SideBarWrapper = styled.div`
  overflow: hidden;
  @media (min-width: 768px) {
    min-width: 300px;
    width: 0px;
  }

  .sidebar {
    @keyframes rotation {
      from {
        transform: rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg);
      }
    }

    padding: 2rem;
    padding-right: 0;
    background: linear-gradient(0deg, rgb(0 0 0 / 70%), rgb(49 48 50 / 30%)),
      url(${(props) => props.cover});
    background-position: center center;
    background-size: cover;
    width: 100%;

    height: 100%;
    max-height: 100%;
  }
`;

export default SideBarWrapper;
