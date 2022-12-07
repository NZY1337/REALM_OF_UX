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
            <Container className='py-5' >
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
                <Row className='d-flex align-items-center about-me-description ps-5'>
                   <Col lg="6">
                        <img src={me} className="img-fluid"/>
                   </Col>

                   <Col lg="6" className="about-me-description-info">
                        <h3 className='mb-3' style={{fontWeight:'bold'}}>Hy. I'm Andrei Mocanu!</h3>
                        <h5 className='mb-5'>I'm a <u>fullstack software engineer</u> working at Cognizant.</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique iure culpa maiores amet illum nihil soluta nostrum in, dignissimos aspernatur inventore neque!
                            Voluptatem repudiandae in rerum natus, consequuntur ipsam.
                        </p>
                   </Col>
                </Row>

                <Row className='d-flex about-me-technologies' style={{marginTop: '10rem', marginBottom:'4rem'}}>
                   <Col lg="8">
                        <p className='mb-0'>Tech Stack: </p>
                        <hr/>
                        <Row className='mt-3'>
                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>MongoDB</p>
                                <DiMongodb className='mongo-db'/>
                            </Col>

                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>React JS</p>
                                <DiReact className='react'/>
                            </Col>

                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>Plain JS</p>
                                <IoLogoJavascript className='javascript'/>
                            </Col>

                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>Node JS</p>
                                <IoLogoNodejs className='node-js' />
                            </Col>
                            
                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>Express JS</p>
                                <SiExpress />
                            </Col>

                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>CSS3 | SASS</p>
                                <DiCss3 className='css3' />
                            </Col>
                        </Row>
                   </Col>

                   <Col lg="8 mt-3">
                        <p className='mb-0'>Design:</p>
                        <hr/>
                        <Row className='mt-3'>
                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>Figma</p>
                                <FiFigma className='mongo-db'/>
                            </Col>

                            <Col className='tech-holder' lg="2">
                                <p className='mb-0'>Illustrator</p>
                                <SiAdobeillustrator className='mongo-db'/>
                            </Col>
                        </Row>
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