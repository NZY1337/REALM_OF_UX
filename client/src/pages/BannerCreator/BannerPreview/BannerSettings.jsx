import React from "react";
import DraggableFontFamily from "../DraggableSettings/DraggableFontFamily";
import DraggableFontSize from "../DraggableSettings/DraggableFontSize";
import { Row, Col } from "react-bootstrap";
import DraggableTextSettings from "../DraggableSettings/DraggableTextSettings";

const BannerSettings = ({ bannerName, color, onChangeColorPicker }) => {
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

export default BannerSettings;
