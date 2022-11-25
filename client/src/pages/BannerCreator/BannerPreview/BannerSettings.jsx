import React from "react";
import PropTypes from 'prop-types';
import DraggableFontFamily from "../DraggableSettings/DraggableFontFamily";
import DraggableFontSize from "../DraggableSettings/DraggableFontSize";
import { Row, Col } from "react-bootstrap";
import DraggableTextSettings from "../DraggableSettings/DraggableTextSettings";

const BannerSettings = ({ bannerName }) => {
  return (
    <Row className="mb-3">
      <h5 className="font-weight-bold">Settings:</h5>

      <p className="my-0">
        Current Banner Type: <u>{bannerName}</u>
      </p>

      <Col className="d-flex">
        <DraggableFontFamily />

        <DraggableFontSize />

        <DraggableTextSettings />
      </Col>
    </Row>
  );
};

BannerSettings.propTypes = {
  bannerName: PropTypes.string.isRequired,
}

export default BannerSettings;
