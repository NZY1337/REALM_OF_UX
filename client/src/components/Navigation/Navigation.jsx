import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Navbar, Offcanvas } from "react-bootstrap";
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

  const colorBasedOnRoute = pathname !== "/" && "black";

  return (
    <NavWrapper as="header" color={colorBasedOnRoute.toString()}>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="my-4" collapseOnSelect>
          <Container>
            <Logo />

            <SmallMenu
              user={user}
              changeLanguage={changeLanguage}
              //   colorUser={colorBasedOnRoute}
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
          </Container>
        </Navbar>
      ))}
    </NavWrapper>
  );
}

export default Navigation;
