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
  const styleBasedOnRoute = pathname === "/" ? "home-nav" : "not-home-nav";
  const bgColor = pathname !== "/" ? "black" : "white";

  const hideHeaderFooter =
    pathname === "/dashboard" ||
    pathname === "/dashboard/comments" ||
    pathname === "/dashboard/tests" ||
    pathname === "/login";

  return (
    <>
      {pathname === "/" && (
        <p
          className="text-center mb-0 py-2 bg-dark"
          style={{ color: "lightgray" }}
        >
          Save 5% on your purchase with our limited time offer! Free
          registration coupon code:{" "}
          <i style={{ fontWeight: "bold", color: "turquoise" }}>realm5</i>.
        </p>
      )}
      {!hideHeaderFooter && (
        <NavWrapper as="header" style={{ backgroundColor: `${bgColor}` }}>
          {[false].map((expand, index) => (
            <Container fluid key={index} className={`px-0`}>
              <Container className={`position-relative `}>
                <Navbar
                  key={expand}
                  expand={expand}
                  className={`${styleBasedOnRoute}`}
                  collapseOnSelect
                >
                  <Logo />

                  <SmallMenu user={user} changeLanguage={changeLanguage} />

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
            </Container>
          ))}
        </NavWrapper>
      )}
    </>
  );
}

export default Navigation;
