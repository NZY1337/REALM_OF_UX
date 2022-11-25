import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HerroWrapper from "../../../assets/wrappers/Home/HeroWrapper";
import { useTranslateContext } from "../../../utils/contexts/translate/translateContext";
import SliderItem from "./SliderItem";

const carouselProps = (item) => {
  return {
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
    backgroundImage: ` url(${item.image})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 2000px rgba(0,0,0, 0.2)",
  };
};

const Slider = () => {
  const {
    homepage: { carousel },
  } = useTranslateContext();

  return (
    <HerroWrapper>
      <Carousel fade slide>
        {carousel.map((item) => (
          <Carousel.Item key={item.title}>
            <div style={{ ...carouselProps(item) }}>
              <SliderItem
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </HerroWrapper>
  );
};

export default Slider;
