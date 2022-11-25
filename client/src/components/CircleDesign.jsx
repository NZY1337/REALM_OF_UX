import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import CircleDesignWrapper from "../assets/wrappers/Home/CircleDesignWrapper";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: {
    opacity: 1,
    scale: 1,

    transition: { duration: 1, transitionTimingFunction: "ease-in-out" },
  },
  hidden: {
    opacity: 0,
    scale: 0,
    transition: { duration: 1, transitionTimingFunction: "ease-in-out" },
  },
};

const CircleDesign = ({ img }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <CircleDesignWrapper>
      <div className="circle-wrapper">
        <motion.img
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={squareVariants}
          className="square"
          src={img}
        ></motion.img>
      </div>
    </CircleDesignWrapper>
  );
};

CircleDesign.propTypes = {
  img: PropTypes.string.isRequired
}

export default CircleDesign;
