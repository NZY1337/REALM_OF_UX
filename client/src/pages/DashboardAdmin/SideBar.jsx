import React from "react";
import { useLocation } from "react-router-dom";
import { sideLinks } from "../../utils/helpers/constants";
import ProfileSidebar from "./MiniComponents/ProfileSidebar";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SideLinks from "./MiniComponents/SideLinks";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";

const cover =
  "https://images.pexels.com/photos/3876407/pexels-photo-3876407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

const SideBar = () => {
  const { pathname } = useLocation();
  const handleAddActive = () => {
    const active = sideLinks.find((item) => item.link === pathname);
    return active.title;
  };

  return (
    <SideBarWrapper cover={cover}>
      <div className="sidebar">
        <ProfileSidebar />
        <Navbar expand="md">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="my-2 my-lg-0 w-100" navbarScroll>
              <SideLinks
                sideLinks={sideLinks}
                handleAddActive={handleAddActive}
              />
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
