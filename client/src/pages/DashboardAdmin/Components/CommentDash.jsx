import React from "react";
import SideBar from "../SideBar";
import DashboardAdminWrapper from "../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import cover from "../../../assets/images/img9.jpeg";
import { Container } from "react-bootstrap";
import DashTitle from "../MiniComponents/DashTitle";

const CommentDash = () => {
  return (
    <DashboardAdminWrapper cover={cover}>
      <SideBar />
      <div className="main">
        <Container fluid className="px-0">
          <DashTitle title="Comments" />
        </Container>
      </div>
    </DashboardAdminWrapper>
  );
};

export default CommentDash;
