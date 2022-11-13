import React from "react";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from "react-bootstrap";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h5>Realm Of Ux</h5>
      <Navbar expand="md">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#comments">Comments</Nav.Link>
            <Nav.Link href="#test">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default SideBar;
