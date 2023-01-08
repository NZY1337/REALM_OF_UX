import React from "react";
import Carousel from "react-bootstrap/Carousel";
import HerroWrapper from "../../../assets/wrappers/Home/HeroWrapper";
import { useTranslateContext } from "../../../utils/contexts/translate/translateContext";
import SliderItem from "./SliderItem";

const carouselProps = (item) => {
  return {
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    // backgroundImage: ` url("https://images.pexels.com/photos/226460/pexels-photo-226460.jpeg")`,
    // backgroundImage: `url(
    //     "https://images.pexels.com/photos/2081166/pexels-photo-2081166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //   )`,
    backgroundImage: `url( "https://images.pexels.com/photos/4560142/pexels-photo-4560142.jpeg")`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
    boxShadow: "inset 0 0 0 2000px rgba(0,0,0, 0.5)",
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
