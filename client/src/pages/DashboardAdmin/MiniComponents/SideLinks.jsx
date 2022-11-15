import React from "react";
import { Link } from "react-router-dom";

const SideLinks = ({ sideLinks, handleAddActive }) => {
  const active = handleAddActive();
  return (
    <>
      {sideLinks.map((item) => {
        return (
          <Link
            key={item.title}
            to={item.link}
            className={item.title === active ? "active" : undefined}
          >
            {item.icon}
            <span>{item.title}</span>
          </Link>
        );
      })}
    </>
  );
};

export default SideLinks;
