import React from "react";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";

const BannerCover = ({ uploadCover }) => {
  return (
    <Col lg="6">
      <div className="banner-control banner-control-cover">
        <h5>Upload Banner Cover</h5>

        <p>
          you can always add <u>an image to replace a background color</u>.
        </p>
        <input type="file" onChange={uploadCover} />
      </div>
    </Col>
  );
};

BannerCover.propTypes = {
  uploadCover: PropTypes.func.isRequired
}

export default BannerCover;
