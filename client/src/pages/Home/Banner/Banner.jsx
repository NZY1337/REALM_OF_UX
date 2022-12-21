import React from "react";
import BannerWrapper from "../../../assets/wrappers/Home/BannerWrapper";
import { Arrow90degDown } from "react-bootstrap-icons";
import abstractVideo from "../../../assets/videos/video2.mp4";
import { useTranslateContext } from "../../../utils/contexts/translate/translateContext";

const Banner = () => {
  const {
    homepage: {
      banner: { title, subtitle },
    },
  } = useTranslateContext();

  return (
    <BannerWrapper>
      <video muted autoPlay={"autoplay"} preload="auto" loop>
        <source src={abstractVideo} type="video/mp4"></source>
      </video>

      <div className="wrapper-content">
        <h1>{title}</h1>
        <h4 className="my-4">{subtitle}</h4>
        <Arrow90degDown size="50" />
      </div>
    </BannerWrapper>
  );
};

export default Banner;
