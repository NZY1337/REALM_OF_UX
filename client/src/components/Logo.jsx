import React from "react";
import LogoWrapper from "../assets/wrappers/LogoWrapper";
import { Link } from "react-router-dom";

const Logo = ({ color }) => {
  return (
    <LogoWrapper className="logo" color={color}>
      <Link to="/">
        Realm of <span>UX</span>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
