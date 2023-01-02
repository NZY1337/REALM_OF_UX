import React from "react";
import PropTypes from "prop-types";
import { DoorOpenFill, DoorClosed } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { trimUserName } from "../utils/helpers";
import { DropDown } from "./index";

const IsLoggedIn = ({ user, colorUser }) => {
  const userStatus = () => {
    if (user && user.name) {
      return (
        <>
          <DropDown title={trimUserName(user.name)} klassName="dropdown-nav">
            <Link className="logout" style={{ color: colorUser }}>
              Sign out <DoorClosed />
            </Link>
          </DropDown>
        </>
      );
    } else {
      return (
        <Link to="/login" className="login" style={{ color: colorUser }}>
          Sign in <DoorOpenFill />
        </Link>
      );
    }
  };

  return userStatus();
};

export default IsLoggedIn;

IsLoggedIn.propTypes = {
  name: PropTypes.string.isRequired,
  colorUser: PropTypes.string,
};
