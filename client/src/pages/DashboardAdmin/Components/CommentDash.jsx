import React from "react";
import SideBar from "../SideBar";
import DashboardAdminWrapper from "../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import cover from "../../../assets/images/img9.jpeg";
import { Container } from "react-bootstrap";

const CommentDash = () => {
  return (
    <DashboardAdminWrapper cover={cover}>
      <SideBar />
      <div className="main">
        <Container>
          <p>Comment Dash</p>
        </Container>
      </div>
    </DashboardAdminWrapper>
  );
};

export default CommentDash;
