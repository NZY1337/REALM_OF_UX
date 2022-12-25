import React from "react";
import { Link, useLocation } from "react-router-dom";
import { sideLinks } from "../../utils/helpers/constants";

// images
import cover from "../../assets/images/img17.jpeg";
import logo from "../../assets/images/logo1.png";

// components
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SideLinks from "./MiniComponents/SideLinks";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";

const SideBar = () => {
  const { pathname } = useLocation();
  const handleAddActive = () => {
    const active = sideLinks.find((item) => item.link === pathname);
    return active.title;
  };

  return (
    <SideBarWrapper cover={cover}>
      <div className="sidebar">
        <Link className="logo text-center d-block" to="/">
          <img alt="logo" src={logo} />
        </Link>
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
