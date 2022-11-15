import styled from "styled-components";

const DashboardWrapper = styled.div`
  @media (min-width: 768px) {
    width: calc(100% - 260px);
  }

  width: 100%;

  .main-dash-title {
    padding: 2rem;
    border-bottom: 1px solid lightgray;
  }

  &-dash-title {
    padding: 2rem;
    border-bottom: 1px solid lightgray;

    h5 {
      margin-bottom: 0;
    }
  }

  background-color: rgba(203, 203, 210, 0.15) !important;
`;

export default DashboardWrapper;
