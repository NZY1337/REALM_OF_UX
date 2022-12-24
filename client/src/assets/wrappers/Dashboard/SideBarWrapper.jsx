import styled from "styled-components";

const SideBarWrapper = styled.div`
  .sidebar {
    padding: 2rem;
    background: linear-gradient(0deg, rgb(0 0 0 / 70%), rgba(155, 50, 250, 0.3)),
      url(${(props) => props.cover});

    background-position: center center;
    background-size: cover;
    width: 100%;

    @media (min-width: 768px) {
      width: 260px;
    }

    .navbar {
      &-nav {
        a.active {
          color: #fff;
        }

        a {
          color: #fff;
          margin-bottom: 0.5rem;

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

    .logo span {
      display: flex;
      align-items: center;
      font-size: 1.1rem;
      color: turquoise;
      //   font-weight: bold;
    }
    height: 100%;

    max-height: 100%;
  }
`;

export default SideBarWrapper;
