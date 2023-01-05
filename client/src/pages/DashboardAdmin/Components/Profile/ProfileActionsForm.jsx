import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "../../../../utils/helpers/react/FormGroup";
import { DashTitleSection } from "../../MiniComponents/DashTitle";
import DashBtn from "../../MiniComponents/DashBtn";

const ProfileActionsForm = () => {
  return (
    <>
      <Col col="12" xxl="4" lg="6">
        <div className="dash-container-section-wrapper">
          <DashTitleSection title="Settings" />

          <Form>
            <Row className="flex-column">
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
            <DashBtn
              klassName="ms-auto d-block"
              variant="dark"
              type="submit"
              size="sm"
            >
              Edit
            </DashBtn>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default ProfileActionsForm;
