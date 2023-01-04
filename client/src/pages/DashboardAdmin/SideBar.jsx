import React from "react";

import ProfileSidebar from "./MiniComponents/ProfileSidebar";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";
import NavSidebar from "./MiniComponents/NavSidebar";

const cover =
  "https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg";

const SideBar = () => {
  return (
    <SideBarWrapper cover={cover}>
      <div className="sidebar">
        <ProfileSidebar />
        <NavSidebar />
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
