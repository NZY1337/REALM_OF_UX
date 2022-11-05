import React from "react";

// https://codesandbox.io/s/egghead-blog-post-demo-forked-jvioyz?file=/src/App.js - framer Motion in view animation
// https://www.framer.com/docs/component/
// https://www.conceptweb.ro/
// http://trydo.rainbowit.net/main-demo

import Slider from "./Slider/Slider";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Services from "./Services/Services";

const Home = () => (
  <>
    <Slider />
    <div>
      <About />
      <Services />
      <Projects />
      <Banner />
      <ContactUs />
    </div>
  </>
);

export default Home;
