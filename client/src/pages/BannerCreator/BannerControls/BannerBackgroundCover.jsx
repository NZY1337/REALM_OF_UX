import React from "react";
import PropTypes from 'prop-types';
import ColorPicker from "../../../components/ColorPicker";
import { Col } from "react-bootstrap";

const BannerBackgroundCover = ({ color, onChangeColorPicker }) => {
  return (
    <Col lg="6">
      <div className="banner-control banner-control-background position-relative">
        <h5>Add Banner Color</h5>
        <p>
          you can always add <u>a background color to replace an image</u>.
        </p>
        <ColorPicker color={color} onChangeColorPicker={onChangeColorPicker}>
          Background Color
        </ColorPicker>
      </div>
    </Col>
  );
};

BannerBackgroundCover.propTypes = {
  color: PropTypes.string.isRequired,
  onChangeColorPicker: PropTypes.func.isRequired
}

export default BannerBackgroundCover;
