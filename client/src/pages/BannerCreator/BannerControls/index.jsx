import React from "react";
import BannerCover from "./BannerCover";
import BannerBackgroundCover from "./BannerBackgroundCover";
import BannerText from "./BannerText";
import BannerTypes from "./BannerTypes/index.jsx";
import { Row } from "react-bootstrap";
import "./index.scss";

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

export default BannerControls;
