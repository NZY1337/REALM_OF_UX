import React from "react";

import ProfileSidebar from "./MiniComponents/ProfileSidebar";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";
import NavSidebar from "./MiniComponents/NavSidebar";

const cover =
  "https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

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
