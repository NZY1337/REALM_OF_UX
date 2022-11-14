import React from "react";
import DashboardAdminWrapper from "../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import { Container } from "react-bootstrap";
import SideBar from "../SideBar";
import DashTitle from "../MiniComponents/DashTitle";
import DashboardWrapper from "../../../assets/wrappers/Dashboard/DashboardWrapper";

const ProjectsDash = () => {
  return (
    <DashboardAdminWrapper>
      <SideBar />
      <DashboardWrapper>
        <Container fluid className="px-0">
          <DashTitle title="Projects" />
        </Container>
      </DashboardWrapper>
    </DashboardAdminWrapper>
  );
};

export default ProjectsDash;
