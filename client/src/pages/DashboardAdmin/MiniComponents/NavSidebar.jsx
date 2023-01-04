import React from 'react';
import { useLocation } from 'react-router-dom';
import NavSidebarWrapper from '../../../assets/wrappers/Dashboard/NavSidebarWrapper';
import SideLinks from './SideLinks';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { sideLinks } from "../../../utils/helpers/constants"

const NavSidebar = () => {
    const { pathname } = useLocation();

    const handleAddActive = () => {
        const active = sideLinks.find((item) => item.link === pathname);
        return active.title;
    };
    
    return (
        <NavSidebarWrapper>
            <Navbar expand="md">
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="my-2 my-lg-0 w-100" navbarScroll>
                    <SideLinks sideLinks={sideLinks} handleAddActive={handleAddActive} />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavSidebarWrapper>
    )
}

export default NavSidebar