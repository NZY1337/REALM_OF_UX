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

    // logo
   

    @media (min-width: 768px) {
      width: 250px;
    }

    .navbar {
      margin-top: 2rem;

      &-nav {
        a.active {
          color: lightgray;
          background: #e7e7e7;
          color: black;
          font-weight: 100;
          padding: 10px;
          border-left: 4px solid var(--text-color-orange);
          border-top-left-radius: 15px;
        }

        a {
          color: #fff;
          margin-bottom: 0.5rem;
          padding: 10px;

          &:hover {
            svg,
            span {
              color: var(--text-color-orange);
            }
          }
          span {
            font-size: 1rem;
          }
          svg {
            margin-right: 10px;
            width: 20px;
            height: 20px;
          }
        }
        flex-direction: column;
      }
    }
   
    height: 100%;
    max-height: 100%;
  }
`;

export default SideBarWrapper;
