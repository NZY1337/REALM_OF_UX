import React from "react";

// components
import SideBar from "../SideBar";
import DashboardAdminWrapper from "../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import Container from "react-bootstrap/Container";
import DashTitle from "../MiniComponents/DashTitle";
import DashboardWrapper from "../../../assets/wrappers/Dashboard/DashboardWrapper";

const CommentDash = () => {
  return (
    <DashboardAdminWrapper>
      <SideBar />

      <DashboardWrapper>
        <Container fluid className="px-0">
          <DashTitle title="Comments" />
        </Container>
      </DashboardWrapper>
    </DashboardAdminWrapper>
  );
};

export default CommentDash;
