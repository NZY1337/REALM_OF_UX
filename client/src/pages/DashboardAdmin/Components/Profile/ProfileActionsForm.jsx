import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from '../../../../utils/helpers/react/FormGroup';
import { DashTitleSection } from '../../MiniComponents/DashTitle';
import DashBtn from "../../MiniComponents/DashBtn";

const ProfileActionsForm = () => {
    return (
        <div className="dash-container-section-wrapper">
            <Col lg="12" xxl="4" xl="12" md="12">
                <DashTitleSection title="Edit Profile"/> 

                <Form>
                    <Row>
                        <Col lg="12" xxl="6">
                            <FormGroup
                                label="Search Project by title"
                                type="text"
                                name="name"
                                placeholder="Enter the project name"
                            />

                            <DashBtn variant="dark" type="submit" size="sm">Edit</DashBtn>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </div>
    )
   
}

export default ProfileActionsForm;