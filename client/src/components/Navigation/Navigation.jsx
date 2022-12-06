import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Navbar, Offcanvas, Row} from "react-bootstrap";
import Logo from "../Logo";
import NavWrapper from "../../assets/wrappers/Home/NavWrapper";
import { useTranslateContext } from "../../utils/contexts/translate/translateContext";
import "../../utils/css/off-canvas-menu.scss";
import { useUserContext } from "../../utils/contexts/user/userContext";
import SmallMenu from "./SmallMenu";
import { BodyMenu } from "./Body";
import { HeaderMenu } from "./Header";

function Navigation() {
  const {
    globals: { navigation },
    changeLanguage,
  } = useTranslateContext();
  const { user } = useUserContext();
  const { pathname } = useLocation();
  const styleBasedOnRoute = pathname == "/" && "home-nav";
  const homeStyle = !styleBasedOnRoute ? { backgroundColor: 'black'} : null

  return (
    <NavWrapper as="header" style={homeStyle}> 
      {[false].map((expand, index) => (
          <Container key={index} className={`position-relative`}>
             <Navbar key={expand}  expand={expand} className={`py-4 ${styleBasedOnRoute}`} collapseOnSelect>
                <Logo />

                <SmallMenu  
                  user={user}
                  changeLanguage={changeLanguage}
                />

                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <HeaderMenu />
                  </Offcanvas.Header>

                  <Offcanvas.Body>
                    <BodyMenu navigation={navigation} />
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Navbar>
          </Container>
     
      ))}
    </NavWrapper>
  );
}

export default Navigation;
