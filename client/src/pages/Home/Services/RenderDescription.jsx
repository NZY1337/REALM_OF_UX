import React from "react";

const RenderDescription = ({ descriptions }) => {
  return descriptions.map((description) => {
    return (
      <p key={description} dangerouslySetInnerHTML={{ __html: description }} />
    );
  });
};

export default RenderDescription;
