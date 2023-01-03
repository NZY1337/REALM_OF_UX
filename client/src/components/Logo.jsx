import React from "react";
import PropTypes from "prop-types";
import LogoWrapper from "../assets/wrappers/LogoWrapper";
import { Link } from "react-router-dom";
import logo from "../assets/images/icons8-logo.png";

const Logo = ({ color }) => {
  return (
    <LogoWrapper className="logo" color={color}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </LogoWrapper>
  );
};

Logo.proTypes = {
  color: PropTypes.string.isRequired,
};

export default Logo;
