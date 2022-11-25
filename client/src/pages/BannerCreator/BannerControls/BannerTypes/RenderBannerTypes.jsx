import React from "react";
import PropTypes from 'prop-types';

const RenderBannerType = ({ title, typeId }) => {
  console.log(typeof typeId)
  return <option value={typeId}>{title}</option>;
};

RenderBannerType.propTypes = {
  title: PropTypes.string.isRequired,
  typeId: PropTypes.string.isRequired
}

export default RenderBannerType;
