import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { sideLinks } from "../../utils/helpers/constants";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";
import cover from "../../assets/images/img19.jpeg";
import SideLinks from "./MiniComponents/SideLinks";
import logo from "../../assets/images/logo1.png";

const SideBar = () => {
  const { pathname } = useLocation();
  const handleAddActive = () => {
    const active = sideLinks.find((item) => item.link === pathname);
    return active.title;
  };

  return (
    <SideBarWrapper cover={cover}>
      <div className="sidebar">
        <Link className="logo mb-3 d-block" to="/">
          <img src={logo} />
        </Link>
        <Navbar expand="md">
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
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
