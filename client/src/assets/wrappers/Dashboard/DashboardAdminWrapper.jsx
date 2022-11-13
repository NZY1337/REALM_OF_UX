import styled from "styled-components";

const DashboardAdminWrapper = styled.div`
  height: 100vh;
  display: flex;

  .main {
    &-dash-title {
      padding: 2rem;
      border-bottom: 1px solid lightgray;

      h5 {
        margin-bottom: 0;
      }
    }

    background-color: rgba(203, 203, 210, 0.15) !important;
    width: calc(100% - 260px);

    overflow: auto;
  }

  .sidebar {
    padding: 2rem;
    background: linear-gradient(
        0deg,
        rgba(255, 155, 250, 0.3),
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

export default DashboardAdminWrapper;
