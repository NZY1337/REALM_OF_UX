import styled from "styled-components";

const DashboardAdminWrapper = styled.div`
  height: 100vh;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export default DashboardAdminWrapper;
