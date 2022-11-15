import React, { useState } from "react";
import { PageSectionBanner, PageSectionTitle } from "../../../components";
import { Container, Row, Col } from "react-bootstrap";
import BannerCreatorWrapper from "../../../assets/wrappers/BannerCreator/BannerCreatorWrapper";
import BannerPreview from "../BannerPreview";
import BannerControls from "../BannerControls";
import { v4 as uuidv4 } from "uuid";
import bannerCover from "../../../assets/images/img17.jpeg";

import { getBannerSizes, addStyleBasedType } from "../../../utils/helpers";

const BannerCreator = () => {
  const [cover, setCover] = useState(null);
  const [colorPicker, setColorPicker] = useState("#d3d3d3");
  const [items, setItems] = useState([]);
  const [bannerSize, setBannerSize] = useState(getBannerSizes()["fbCover"]);

  const onChangeColorPicker = (color) => {
    setColorPicker(color.hex);
    setCover(null);
  };

  const handleBannerTypeCb = (size) => {
    setBannerSize(size);
  };

  const uploadCover = (e) => {
    e.preventDefault();
    if (e.target.files[0]) {
      setCover(URL.createObjectURL(e.target.files[0]));
      setColorPicker("#fff");
    }
  };

  const populateBannerText = (text, type) => {
    setItems([
      ...items,
      {
        id: uuidv4(),
        text,
        style: addStyleBasedType()[type],
      },
    ]);
  };

  const saveChanges = (itemId, newText) => {
    const newState = items.map((obj) => {
      if (obj.id === itemId) {
        return { ...obj, text: newText };
      }

      return obj;
    });

    setItems(newState);
  };

  const handleRemoveItem = (currTargetID) => {
    setItems((items) => items.filter((item) => item.id !== currTargetID));
  };

  const handleCloneItem = (currentTargetID) => {
    const item = items.find((item) => item.id === currentTargetID);

    setItems([
      ...items,
      {
        id: uuidv4(),
        text: item.text,
        style: item.style,
      },
    ]);
  };

  return (
    <BannerCreatorWrapper>
      <Container className="mt-5 pt-5">
        <Row className="mt-5">
          <Col className="my-5"></Col>
          <PageSectionTitle
            subtitle="explore the posibilities!"
            titleBold="Realm Of Ux's"
            titleNormal=" ultimate guide for creating stunning social media banners!"
          />
        </Row>
      </Container>

      <PageSectionBanner
        title="A Drive Through Experience"
        cover={bannerCover}
      />

      <Container fluid className="my-5 py-5">
        <Row className="mb-5">
          <Col lg="12" style={{ textAlign: "center" }}>
            <h1>Welcome to Our Banner Creator</h1>
            <h5 className="design-font">
              <u>rotate - drag - resize - add your own style</u>
            </h5>
          </Col>
        </Row>

        <Row>
          <Col lg="4" className="left-pannel-banner">
            <BannerControls
              uploadCover={uploadCover}
              onChangeColorPicker={onChangeColorPicker}
              color={colorPicker}
              populateBannerText={populateBannerText}
              handleBannerTypeCb={handleBannerTypeCb}
            />
          </Col>

          <Col lg="8" className="right-pannel-banner">
            <BannerPreview
              cover={cover}
              color={colorPicker}
              onChangeColorPicker={onChangeColorPicker}
              items={items}
              saveChanges={saveChanges}
              bannerSize={bannerSize}
              removeItem={handleRemoveItem}
              cloneItem={handleCloneItem}
            />
          </Col>
        </Row>
      </Container>
    </BannerCreatorWrapper>
  );
};

export default BannerCreator;
