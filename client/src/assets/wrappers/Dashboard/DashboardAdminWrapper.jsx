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
`;

export default DashboardAdminWrapper;
