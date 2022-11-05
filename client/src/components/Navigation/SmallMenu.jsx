import React from "react";
import { UserLoggedIn, UserLoggedOut } from "../UserLoggedInOrLoggedOut";
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
      {user ? (
        <UserLoggedIn name={user.name} colorUser={colorUser} />
      ) : (
        <UserLoggedOut colorUser={colorUser} />
      )}
      <ToggleLanguage changeLanguage={changeLanguage} />
      <Navbar.Toggle>Menu</Navbar.Toggle>
    </div>
  );
};

export default SmallMenu;
