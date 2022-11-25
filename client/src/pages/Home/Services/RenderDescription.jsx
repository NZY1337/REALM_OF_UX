import React from "react";
import PropTypes from 'prop-types';

const RenderDescription = ({ descriptions }) => {
  return descriptions.map((description) => {
    return (
      <p key={description} dangerouslySetInnerHTML={{ __html: description }} />
    );
  });
};


RenderDescription.propTypes = {
  descriptions: PropTypes.array.isRequired
}

export default RenderDescription;
