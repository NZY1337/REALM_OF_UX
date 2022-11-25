import React from "react";
import PropTypes from "prop-types";
import BannerCover from "./BannerCover";
import BannerBackgroundCover from "./BannerBackgroundCover";
import BannerText from "./BannerText";
import BannerTypes from "./BannerTypes/index.jsx";
import { Row } from "react-bootstrap";
import "./index.scss";
import { propTypes } from "react-bootstrap/esm/Image";

const BannerControls = ({
  uploadCover,
  color,
  onChangeColorPicker,
  populateBannerText,
  handleBannerTypeCb,
}) => {
  return (
    <Row>
      <BannerCover uploadCover={uploadCover} />
      <BannerBackgroundCover
        color={color}
        onChangeColorPicker={onChangeColorPicker}
      />
      <BannerText populateBannerText={populateBannerText} />
      <BannerTypes handleBannerTypeCb={handleBannerTypeCb} />
    </Row>
  );
};

BannerControls.propTypes = {
  uploadCover:PropTypes.func.isRequired,
  color:PropTypes.string.isRequired,
  onChangeColorPicker: PropTypes.func.isRequired,
  populateBannerText: PropTypes.func.isRequired, 
  handleBannerTypeCb: PropTypes.func.isRequired,
}

export default BannerControls;
