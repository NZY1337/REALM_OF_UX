import React from "react";
import DashboardAdminWrapper from "../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import cover from "../../../assets/images/img9.jpeg";
import { Container } from "react-bootstrap";
import SideBar from "../SideBar";
const ProjectsDash = () => {
  return (
    <DashboardAdminWrapper cover={cover}>
      <SideBar />
      <div className="main">
        <Container>
          <p>Project Dash</p>
        </Container>
      </div>
    </DashboardAdminWrapper>
  );
};

export default ProjectsDash;
