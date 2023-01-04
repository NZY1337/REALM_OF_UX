import React from "react";

// images
import cover from "../../../../assets/images/img9.jpeg";

// components
import DashboardAdminWrapper from "../../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import Container from "react-bootstrap/Container";
import SideBar from "../../SideBar";
import { DashTitle } from "../../MiniComponents/DashTitle";
import DashboardWrapper from "../../../../assets/wrappers/Dashboard/DashboardWrapper";

const TestDash = () => {
  return (
    <DashboardAdminWrapper cover={cover}>
      <SideBar />
      <DashboardWrapper>
        <Container fluid className="px-0">
          <DashTitle title="Tests" />
        </Container>
      </DashboardWrapper>
    </DashboardAdminWrapper>
  );
};

export default TestDash;
