import styled from "styled-components";

const DashboardAdminWrapper = styled.div`
  height: 100vh;
  display: flex;

  .main {
    background-color: lightgray !important;
    width: calc(100% - 260px);
    padding: 1rem;
    overflow: auto;
  }

  #projects {
    height: 800px;
    background: red;
  }

  #comments {
    height: 800px;
    background: yellow;
  }

  #test {
    height: 800px;
    background: orange;
  }

  .sidebar {
    .nav-link.active {
      color: var(--text-color-orange);
    }
    padding: 1rem;
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
        flex-direction: column;
      }
      a {
        color: #fff;
        padding: 0;
      }
    }
    h5 {
      color: #fff;
      font-weight: bold;
    }
    height: 100%;

    max-height: 100%;
  }
`;

export default DashboardAdminWrapper;
