import React from "react";
import PropTypes from 'prop-types';
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import RenderBannerType from "./RenderBannerTypes";
import { getBannerSizes } from "../../../../utils/helpers";
import { TYPES } from "../../../../utils/helpers/constants";

const BannerTypes = ({ handleBannerTypeCb }) => {
  const handleBannerType = ({ target: { value } }) => {
    const bannerType = getBannerSizes()[value];
    handleBannerTypeCb(bannerType);
  };

  return (
    <Col lg="6">
      <div className="banner-control banner-control-types">
        <h5>Banner Types</h5>
        <p>Select your desirable layout.</p>
        <Form.Select
          onChange={handleBannerType}
          aria-label="Default select example"
        >
          {TYPES.map(({ title, id }) => (
            <RenderBannerType key={id} typeId={id} title={title} />
          ))}
        </Form.Select>
      </div>
    </Col>
  );
};

BannerTypes.propTypes = {
  handleBannerTypeCb: PropTypes.func.isRequired
}

export default BannerTypes;
