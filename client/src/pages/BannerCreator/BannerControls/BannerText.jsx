import React from "react";
import { Col } from "react-bootstrap";

const BannerText = ({ uploadCover, populateBannerText }) => {
  return (
    <Col lg="6">
      <div className="banner-control banner-control-text">
        <h5>Upload Banner Text</h5>

        <button
          className="heading banner-control-text-heading"
          onClick={() => populateBannerText("Add Heading", "heading")}
        >
          Add Heading
        </button>
        <button
          className="heading banner-control-text-subheading"
          onClick={() => populateBannerText("Add Subheading", "subheading")}
        >
          Add Subheading
        </button>
        <button
          className="heading banner-control-text-paragraph"
          onClick={() =>
            populateBannerText(
              "Add small text to enhance your audience",
              "paragraph"
            )
          }
        >
          Add small text to enhance your audience
        </button>
      </div>
    </Col>
  );
};

export default BannerText;
