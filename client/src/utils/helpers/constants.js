import React from "react";
import { AiOutlineProject } from "react-icons/ai";
import { FaRegComments } from "react-icons/fa";
import { GiTestTubes } from "react-icons/gi";
import { DiMongodb, DiReact, DiCss3 } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiAdobeillustrator } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

export const skills = {
  techSkills: [
    {
      title: "Plain Js",
      icon: <IoLogoJavascript className="javascript" />,
    },
    {
      title: "React Js",
      icon: <DiReact className="react" />,
    },
    {
      title: "MongoDB",
      icon: <DiMongodb className="mongo-db" />,
    },
    {
      title: "Node JS",
      icon: <IoLogoNodejs className="node-js" />,
    },
    {
      title: "Express",
      icon: <SiExpress className="express" />,
    },
    {
      title: "CSS3 | SCSS",
      icon: <DiCss3 className="css3" />,
    },
  ],

  designSkills: [
    {
      title: "Figma",
      icon: <FiFigma className="figma" />,
    },
    {
      title: "Adobe Illustrator",
      icon: <SiAdobeillustrator className="illustrator" />,
    },
  ],
};

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
