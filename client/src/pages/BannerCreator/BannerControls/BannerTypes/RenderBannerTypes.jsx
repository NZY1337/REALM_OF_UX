import React from "react";
import Form from "react-bootstrap/Form";

const RenderBannerType = ({ title, typeId }) => {
  return <option value={typeId}>{title}</option>;
};

export default RenderBannerType;
