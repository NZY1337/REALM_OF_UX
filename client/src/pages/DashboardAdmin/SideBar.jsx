import React from "react";

import ProfileSidebar from "./MiniComponents/ProfileSidebar";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";
import { Link } from "react-router-dom";
import NavSidebar from "./MiniComponents/NavSidebar";
import { GiExitDoor } from "react-icons/gi";

const cover =
  "https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg";

const SideBar = () => {
  return (
    <SideBarWrapper cover={cover}>
      <div className="sidebar position-relative">
        <ProfileSidebar />
        <NavSidebar />
        <Link
          to="/"
          className="position-absolute"
          style={{
            bottom: "4rem",
            left: "2rem",
            fontWeight: "bold",
            color: "#bc5318",
          }}
        >
          EXIT dashboard <GiExitDoor style={{ fontSize: "2rem" }} />
        </Link>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
