import React from "react";
import PropTypes from 'prop-types';
import { DoorOpenFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { trimUserName } from "../utils/helpers";

export const UserLoggedIn = ({ name, colorUser }) => {
  const userName = trimUserName(name);
  return (
    <Link to="/login" className="login" style={{ color: colorUser }}>
      {userName}
    </Link>
  );
};


export const UserLoggedOut = ({ colorUser }) => {
  return (
    <Link to="/login" className="login" style={{ color: colorUser }}>
      Sign in <DoorOpenFill />
    </Link>
  );
};

UserLoggedIn.propTypes = {
  name: PropTypes.string.isRequired,
  colorUser: PropTypes.string
}

UserLoggedOut.propTypes = {
  colorUser: PropTypes.string.isRequired
}

