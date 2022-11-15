import styled from "styled-components";

const DashboardWrapper = styled.div`
  overflow: auto;
  @media (min-width: 768px) {
    width: calc(100% - 260px);
  }
  width: 100%;
  background-color: rgba(203, 203, 210, 0.15);

  //TITLE SECTION
  .main-dash-title {
    padding: 2rem;
    border-bottom: 1px solid lightgray;
  }

  //CONTAINER SECTION
  .dash-container {
    padding: 2rem;

    &-projects {
      form {
        padding: 1rem;
        background: #fff;
        border-radius: 5px;
      }

      img {
        border-radius: 28px;
      }
    }
  }
`;

export default DashboardWrapper;
