import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";
import cover from "../../assets/images/img9.jpeg";
import SideLinks from "./MiniComponents/SideLinks";

const SideBar = () => {
  const sideLinks = [
    {
      link: "/dashboard",
      icon: <FaRegComments />,
      title: "Projects",
    },
    {
      link: "/dashboard/comments",
      icon: <AiOutlineProject />,
      title: "Comments",
    },
    {
      link: "/dashboard/tests",
      icon: <GiTestTubes />,
      title: "Tests",
    },
  ];

  const { pathname } = useLocation();
  const handleAddActive = () => {
    const active = sideLinks.find((item) => item.link === pathname);
    return active.title;
  };

  handleAddActive();

  return (
    <SideBarWrapper cover={cover}>
      <div className="sidebar">
        <h3>Realm Of Ux</h3>
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
