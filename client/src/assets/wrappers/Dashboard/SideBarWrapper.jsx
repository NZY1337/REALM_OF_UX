import styled from "styled-components";

const SideBarWrapper = styled.div`
  .sidebar {
    padding: 2rem;
    background: linear-gradient(
        0deg,
        rgb(0 0 0 / 30%),
        rgba(255, 155, 250, 0.3)
      ),
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
          color: orange;
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

    h3 {
      color: turquoise;
      font-weight: bold;
    }
    height: 100%;

    max-height: 100%;
  }
`;

export default SideBarWrapper;
