import React from "react";

import { Link } from "react-router-dom";

const SideLinks = ({ sideLinks, handleAddActive }) => {
  const active = handleAddActive();
  console.log(active);
  return (
    <>
      {sideLinks.map((item) => {
        return (
          <Link to={item.link} className={item.title === active && "active"}>
            {item.icon}
            <span>{item.title}</span>
          </Link>
        );
      })}
    </>
  );
};

export default SideLinks;
