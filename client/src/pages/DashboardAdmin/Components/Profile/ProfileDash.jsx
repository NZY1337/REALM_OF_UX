import React from "react";

// components
import SideBar from "../../SideBar";
import DashboardAdminWrapper from "../../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import Row from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import DashTitle from "../../MiniComponents/DashTitle";
import DashboardWrapper from "../../../../assets/wrappers/Dashboard/DashboardWrapper";
import ProfileActionsForm from "./ProfileActionsForm";
import DashContainer from "../../MiniComponents/DashContainer";

const ProfileDash = () => {
  return (
    <DashboardAdminWrapper>
      <SideBar />

      <DashboardWrapper>
        <DashTitle title="Profile" />
            <DashContainer fluid className="px-0">
                <Row className="dash-container-projects">
                    <ProfileActionsForm />
                </Row>
                
             </DashContainer>
      </DashboardWrapper>
    </DashboardAdminWrapper>
  );
};

export default ProfileDash;
