import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import bannerCover from "../../assets/images/img14.jpeg"
import me from "../../assets/images/eu.jpg"
import AboutWrapper from '../../assets/wrappers/AboutWrapper/AboutWrapper';
import { PageSectionTitle, PageSectionBanner }  from '../../components';


//icons 
import { DiMongodb, DiReact, DiCss3 } from "react-icons/di";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";

const About = () => {
    return (
        <AboutWrapper>
            <Container className='my-5' >
                <Row>
                    <Col lg="12">
                        <PageSectionTitle
                            subtitle="some insights about what I do"
                            titleBold="About Me"
                        />
                    </Col>
                </Row>
            </Container>

            <PageSectionBanner
                title="Some experiences are worth living, do not be affraid! :)"
                cover={bannerCover}
            />

            <Container className='about-me'>
                <Row className='d-flex align-items-center about-me-description my-5 py-5'>
                   <Col lg="6">
                        <img src={me} className="img-fluid"/>
                   </Col>
                   <Col lg="6" className="about-me-description-info">
                        <h3 className='mb-3'>Hy, my name is Andrei Mocanu!</h3>
                        <h5 className='mb-5'>I'm a <u>fullstack software engineer</u> working at Cognizant.</h5>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique iure culpa maiores amet illum nihil soluta nostrum in, dignissimos aspernatur inventore neque!
                            Voluptatem repudiandae in rerum natus, consequuntur ipsam.
                        </p>
                   </Col>
                </Row>

                <Row className='d-flex my-5 py-5 about-me-technologies'>
                   <Col lg="8">
                        <h6>Technologies I am currently working with:</h6>
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
                </Row>
            </Container>
        </AboutWrapper>
    )
}

export default About;