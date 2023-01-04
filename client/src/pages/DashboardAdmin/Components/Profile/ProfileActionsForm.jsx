import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from '../../../../utils/helpers/react/FormGroup';
import { DashTitleSection } from '../../MiniComponents/DashTitle';
import DashBtn from "../../MiniComponents/DashBtn";
import abstractVideo from "../../../../assets/videos/ai.mp4";
import smile from "../../../../assets/images/smile.png";

const ProfileActionsForm = () => {
    return (
        <>
            <Col col="12" xxl="3" lg="6">
                <div className="dash-container-section-wrapper">
                    <DashTitleSection title="Settings"/> 

                    <Form>
                        <Row className='flex-column'>
                            <Col lg="12">
                                <FormGroup
                                    label="Name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter the project name"
                                />
                            </Col>

                            <Col lg="12">
                                <FormGroup
                                    label="Email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter the project name"
                                />
                            </Col>

                            <Col lg="12">
                                <FormGroup
                                    label="password"
                                    type="password"
                                    name="password"
                                    placeholder="Enter the project name"
                                />
                            </Col>
                        </Row>
                        <DashBtn klassName="ms-auto d-block" variant="dark" type="submit" size="sm">Edit</DashBtn>
                    </Form>
                    </div>
            </Col>

            <Col col="12" xxl="3" lg="6" className='p-5'>
                <video  muted autoPlay={"autoplay"} preload="auto" loop
                    style={{objectFit:"initial", width:"100%", boxShadow:"rgb(189 167 167 / 75%) 0px 7px 29px 0px", borderRadius:"10px"}}>
                    <source src={abstractVideo} type="video/mp4"></source>
                </video>

                <div className='mt-4'>
                    <h4 className='mb-2'>EDIT, UPDATE, DELETE /profile ~</h4>
                    <p className='mb-0'>
                        And just so you know, if you change your name to <b>Bob Ross</b>, we'll definitely be impressed.
                    </p>
                </div>
            </Col>
        </>
    )
}

export default ProfileActionsForm;