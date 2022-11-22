import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";

export const sideLinks = [
  {
    link: "/dashboard",
    icon: <FaRegComments />,
    title: "Projects",
  },
  {
    link: "/dashboard/comments",
    icon: <AiOutlineProject />,
    title: "Comments",
  },
  {
    link: "/dashboard/tests",
    icon: <GiTestTubes />,
    title: "Tests",
  },
];

export const TYPES = [
  {
    title: "Facebook Cover",
    id: "fbCover",
  },
  {
    title: "Facebook Post",
    id: "fbPost",
  },
  {
    title: "Instagram Cover",
    id: "instaCover",
  },
  {
    title: "Instagram Post",
    id: "instaPost",
  },
];

export const DRAGGED_ITEM_NEWSTYLE = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid transparent",
};

export const DRAGGED_ITEM_DEFAULTSTYLE = {
  x: 0,
  y: 0,
  width: "auto",
  height: "auto",
  maxWidth: "300px",
  maxHeight: "100px",
};
