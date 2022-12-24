import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";
import { ButtonPrimary } from "../../../components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const squareVariants = {
  visible: {
    opacity: 1,
    // scale: 1.01,
    color: "black",
    transition: { duration: 0.5 },
    x: [0, 10, 0],
  },
  hidden: { opacity: 0 },
};

const h4Variants = {
  visible: {
    opacity: 1,
    // scale: 1.01,
    color: "#184843",
    transition: { duration: 0.5 },
    x: [0, 10, 0],
  },
  hidden: { opacity: 0 },
};

const pVariants = {
  visible: {
    opacity: 1,
    color: "lightgray",
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
      <div className="row flex-column justify-content-center align-items-start">
        <div className="col-lg-6 col-12 mt-5 pt-5">
          <div className="carousel-titles">
            <motion.h1
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={squareVariants}
              className="square mb-2"
            >
              {title}
            </motion.h1>

            <motion.h4
              variants={h4Variants}
              animate={controls}
              ref={ref}
              className="mb-5"
            >
              Fight the fog hidden in front of your eyes!
            </motion.h4>

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

          <div className="carousel-actions">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={buttonVariants}
              className="square"
            >
              <ButtonPrimary href="https://google.com" target="_blank">
                <Link to="/asd">
                  Discover More <ArrowRight />
                </Link>
              </ButtonPrimary>
            </motion.div>
          </div>
        </div>
        <div className="col-lg-4 col-12 d-flex align-self-end">
          <div className="hero-small-description">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              mollitia et voluptas nam ipsum commodi animi architecto, unde
              accusantium nostrum suscipit incidunt in vel illum itaque ab quo?
              Eveniet, incidunt.
            </p>

            <div className="d-flex ">
              <span>active</span>
              <span>passion</span>
              <span>happiness</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SliderItem;
