import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import { ButtonPrimary } from "../../../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: {
    opacity: 1,
    // scale: 1.01,
    transition: { duration: 0.5 },
    x: [0, 10, 0],
  },
  hidden: { opacity: 0 },
};

const h1Variants = {
  visible: {
    opacity: 1,
    // scale: 1.01,
    transition: { duration: 0.5 },
    x: [0, 20, 0],
  },
  hidden: { opacity: 0 },
};

const pVariants = {
  visible: {
    opacity: 1,
    // scale: 1.01,
    transition: { duration: 0.5 },
    x: [0, 30, 0],
  },
  hidden: { opacity: 0 },
};

const buttonVariants = {
  visible: {
    transition: { duration: 0.5 },
    y: 0,
  },
  hidden: { y: 10 },
};

const SliderItem = ({ subtitle, title, description }) => {
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
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-7 col-12">
          <div className="carousel-titles text-center">
            <motion.p
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={h1Variants}
              style={{ marginBottom: 0 }}
              className="design-font"
            >
              {subtitle}
            </motion.p>

            <motion.h1
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariants}
              className="square"
            >
              {title}
            </motion.h1>

            <motion.p
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={pVariants}
              className="square"
            >
              {description}
            </motion.p>
          </div>

          <div className="carousel-actions text-center">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={buttonVariants}
              className="square"
            >
              <ButtonPrimary
                href="https://google.com"
                className="mt-4"
                target="_blank"
              >
                <Link to="/asd">
                  Discover More <ArrowRight />
                </Link>
              </ButtonPrimary>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  subtitle:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default SliderItem;
