import styled from "styled-components";

const SideBarWrapper = styled.div`
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
    background: linear-gradient(0deg, rgb(0 0 0 / 70%), rgba(155, 50, 250, 0.3)),
      url(${(props) => props.cover});
    background-position: center center;
    background-size: cover;
    width: 100%;

    @media (min-width: 768px) {
      width: 250px;
    }

    height: 100%;
    max-height: 100%;
  }
`;

export default SideBarWrapper;
