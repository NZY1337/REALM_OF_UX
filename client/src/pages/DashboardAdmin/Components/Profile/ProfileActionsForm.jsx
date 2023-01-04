import React from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from '../../../../utils/helpers/react/FormGroup';

const ProfileActionsForm = () => {
    return (
        <div className="dash-container-projects-wrapper">
            <Col lg="12" xxl="4" xl="12" md="12">
                <Form>
                    <div className="d-flex align-items-start">
                        <h6 className="mb-4 me-2">Edit User</h6>
                    </div>
                    <Row>
                        <Col lg="12" xxl="6">
                            <FormGroup
                                label="Search Project by title"
                                type="text"
                                name="name"
                                placeholder="Enter the project name"
                            />
                        </Col>
                    </Row>
                </Form>
            </Col>
        </div>
    )
   
}

export default ProfileActionsForm;