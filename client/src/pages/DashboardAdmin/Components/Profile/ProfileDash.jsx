import React from "react";

// components
import ProfileActionsForm from "./ProfileActionsForm";
import DashContainer from "../../MiniComponents/DashContainer";

const ProfileDash = () => {
    const profileSettings = {
        height:"100%",
        justifyContent:"center",
        alignItems:"center"
    }

  return (
    <DashContainer settings={{...profileSettings}} klassName="dash-profile-form">
        <ProfileActionsForm />
    </DashContainer>
  );
};

export default ProfileDash;
