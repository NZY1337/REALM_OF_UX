import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import bannerCover from "../../assets/images/img15.jpeg"
import me from "../../assets/images/eu.jpg"
import AboutWrapper from '../../assets/wrappers/AboutWrapper/AboutWrapper';
import { PageSectionTitle, PageSectionBanner }  from '../../components';


//icons 
import { DiMongodb, DiReact, DiCss3 } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiExpress, SiAdobeillustrator } from "react-icons/si";
import { FiFigma } from "react-icons/fi";

const About = () => {
    return (
        <AboutWrapper>
            <Container className='pt-5 pb-0 py-lg-5  container'>
                <Row>
                    <Col lg="12">
                        <PageSectionTitle
                            subtitle="some insights about what I do"
                            titleBold="About Me"
                        />
                    </Col>
                </Row>
            </Container>

            <Container className='about-me'>
                <Row className='d-flex align-items-center about-me-description'>
                   <Col lg="6">
                        <img src={me} className="img-fluid"/>
                   </Col>

                   <Col lg="6 mt-3 mt-lg-0">
                    <div className="about-me-description-info p-4 p-lg-5"> 
                        <h3 className='mb-3' style={{fontWeight:'bold'}}>Hy. I'm Andrei Mocanu!</h3>
                        <h5 className='mb-5'>I'm a <u>fullstack software engineer</u> working at Cognizant.</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique iure culpa maiores amet illum nihil soluta nostrum in, dignissimos aspernatur inventore neque!
                            Voluptatem repudiandae in rerum natus, consequuntur ipsam.
                        </p>
                    </div>
                   </Col>
                </Row>
 
                <Row className='about-me-technologies'>
                   <Col lg="8">
                        <div className='about-me-technologies__info'>
                            <p className='mb-0'>Tech Stack: </p>
                            <hr/>

                            <div className='about-me-technologies__info-stack'>
                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>MongoDB</p>
                                    <DiMongodb className='mongo-db'/>
                                </div>

                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>React JS</p>
                                    <DiReact className='react'/>
                                </div>

                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>Plain JS</p>
                                    <IoLogoJavascript className='javascript'/>
                                </div>

                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>Node JS</p>
                                    <IoLogoNodejs className='node-js' />
                                </div>
                                
                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>Express JS</p>
                                    <SiExpress />
                                </div>

                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>CSS3 | SASS</p>
                                    <DiCss3 className='css3' />
                                </div>
                            </div>
                        </div>
                   </Col>

                   <Col lg="8 mt-3">
                        <div className='about-me-technologies__info'>
                            <p className='mb-0'>Design:</p>
                            <hr/>
                            
                            <div className='mt-3 about-me-technologies__info-stack'>
                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>Figma</p>
                                    <FiFigma className='figma'/>
                                </div>

                                <div className='tech-holder' lg="2">
                                    <p className='mb-0'>Illustrator</p>
                                    <SiAdobeillustrator className='mongo-db'/>
                                </div>
                            </div>
                        </div>
                   </Col>
                </Row>
            </Container>

            <PageSectionBanner
                title="Some experiences are worth living, do not be affraid! :)"
                cover={bannerCover}
            />
        </AboutWrapper>
    )
}

export default About;