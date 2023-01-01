import React from "react";
import PropTypes from "prop-types";
import LogoWrapper from "../assets/wrappers/LogoWrapper";
import { Link } from "react-router-dom";

const Logo = ({ color }) => {
  return (
    <LogoWrapper className="logo" color={color}>
      <Link to="/">Realmify</Link>
    </LogoWrapper>
  );
};

Logo.proTypes = {
  color: PropTypes.string.isRequired,
};

export default Logo;
