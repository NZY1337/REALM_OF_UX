import React from "react";
import DashboardAdminWrapper from "../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import cover from "../../../assets/images/img9.jpeg";
import { Container } from "react-bootstrap";
import SideBar from "../SideBar";
import DashTitle from "../MiniComponents/DashTitle";

const TestDash = () => {
  return (
    <DashboardAdminWrapper cover={cover}>
      <SideBar />
      <div className="main">
        <Container fluid className="px-0">
          <DashTitle title="Tests" />
        </Container>
      </div>
    </DashboardAdminWrapper>
  );
};

export default TestDash;
