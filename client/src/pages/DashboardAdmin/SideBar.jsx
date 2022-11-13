import React from "react";
import { Col, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h3>Realm Of Ux</h3>
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link to="/dashboard/projects">
              <AiOutlineProject />
              <span>Projects</span>
            </Link>
            <Link to="/dashboard">
              <FaRegComments />
              <span>Comments</span>
            </Link>
            <Link to="/dashboard/tests">
              <GiTestTubes />
              <span>Tests</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SideBar;
