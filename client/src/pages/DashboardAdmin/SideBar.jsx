import React, { useRef, useState } from "react";

import ProfileSidebar from "./MiniComponents/ProfileSidebar";
import SideBarWrapper from "../../assets/wrappers/Dashboard/SideBarWrapper";
import { Link } from "react-router-dom";
import NavSidebar from "./MiniComponents/NavSidebar";
import { GiExitDoor } from "react-icons/gi";

const cover =
  "https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg";

const SideBar = () => {
  const sideBarRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  return (
    <SideBarWrapper cover={cover} ref={sideBarRef}>
      <div className="sidebar position-relative">
        <ProfileSidebar />
        {/* <button
          onClick={() => {
            setToggle(!toggle);
            console.log(sideBarRef.current);
            if (!toggle) {
              sideBarRef.current.style.minWidth = "40px";
            } else {
              sideBarRef.current.style.minWidth = "300px";
            }
          }}
        >
          ToggleSidebar
        </button> */}
        <NavSidebar />
        <Link
          to="/"
          className="position-absolute"
          style={{
            bottom: "4rem",
            left: "2rem",
            fontWeight: "bold",
            color: "#bc5318",
          }}
        >
          EXIT dashboard <GiExitDoor style={{ fontSize: "2rem" }} />
        </Link>
      </div>
    </SideBarWrapper>
  );
};

export default SideBar;
