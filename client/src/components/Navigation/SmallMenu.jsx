import React from "react";
import PropTypes from "prop-types";
import IsLoggedIn from "../UserLoggedInOrLoggedOut";
import ToggleLanguage from "../ToggleLanguage";
import { Navbar } from "react-bootstrap";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const SmallMenu = ({ user, changeLanguage, colorUser }) => {
  return (
    <div style={{ ...style }}>
      <IsLoggedIn user={user} colorUser={colorUser} />

      <ToggleLanguage changeLanguage={changeLanguage} />
      <Navbar.Toggle>Menu</Navbar.Toggle>
    </div>
  );
};

SmallMenu.propTypes = {
  user: PropTypes.object,
  changeLanguage: PropTypes.func.isRequired,
  colorUser: PropTypes.string,
};

export default SmallMenu;
