import React from "react";
import { DoorOpenFill, FileX } from "react-bootstrap-icons";
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
