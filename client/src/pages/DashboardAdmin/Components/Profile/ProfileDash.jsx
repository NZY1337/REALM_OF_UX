import React from "react";

// components
import SideBar from "../../SideBar";
import DashboardAdminWrapper from "../../../../assets/wrappers/Dashboard/DashboardAdminWrapper";
import Row from "react-bootstrap/Container";
import DashTitle from "../../MiniComponents/DashTitle";
import DashboardWrapper from "../../../../assets/wrappers/Dashboard/DashboardWrapper";
import ProfileActionsForm from "./ProfileActionsForm";
import DashContainer from "../../MiniComponents/DashContainer";

const ProfileDash = () => {
  return (
    <DashContainer>
        <ProfileActionsForm />
    </DashContainer>
  );
};

export default ProfileDash;
