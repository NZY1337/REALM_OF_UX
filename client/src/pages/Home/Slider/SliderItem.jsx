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
    color: "turquoise",
    // textShadow: "rgb(0 0 0) 5px 10px 7px, rgb(58 58 70) -3px 6px 7px",
    textShadow: `rgb(0 0 0 / 0%) 5px 3px 0px, rgb(0 0 0) 3px 3px 1px, rgb(223 89 89) 7px 4px 0px`,
    letterSpacing: "5px",
    fontSize: "80px",
    transition: { duration: 0.5 },
    x: [0, 10, 0],
  },
  hidden: { opacity: 0 },
};

const h4Variants = {
  visible: {
    opacity: 1,
    // scale: 1.01,
    color: "lightgray",
    fontSize: "25px",
    letterSpacing: "10",
    transition: { duration: 0.5 },
    x: [0, 10, 0],
  },
  hidden: { opacity: 0, letterSpacing: "-100" },
};

const pVariants = {
  visible: {
    opacity: 1,
    color: "white",
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
              Transform your study habits and boost your academic productivity
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
              Effortlessly organize and optimize your study sessions with our
              powerful note-taking and summarization tools. Revolutionize the
              way you learn with{" "}
              <span
                style={{
                  color: "white",
                  background: "black",
                  fontWeight: "bold",
                  padding: "5px",
                }}
              >
                TIMEBOXED
              </span>
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
