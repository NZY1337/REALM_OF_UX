import React from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "../../../../utils/helpers/react/FormGroup";
import { DashTitleSection } from "../../MiniComponents/DashTitle";
import DashBtn from "../../MiniComponents/DashBtn";
import { useUserContext } from "../../../../utils/contexts/user/userContext";

const ProfileActionsForm = () => {
  const {
    handleChange,
    userInfo: { name, email, avatar, password, newPassword },
  } = useUserContext();

  return (
    <>
      <Col col="12" xxl="4" lg="6">
        <div className="dash-container-section-wrapper">
          <DashTitleSection title="Profile" />

          <Form>
            <Row className="flex-column">
              <Col lg="12">
                <FormGroup
                  onHandleChange={handleChange}
                  label="Name"
                  type="text"
                  name="name"
                  placeholder="Enter the project name"
                  value={name}
                />
              </Col>

              <Col lg="12">
                <FormGroup
                  onHandleChange={handleChange}
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="Enter the project name"
                  value={email}
                />
              </Col>

              <Col lg="12">
                <FormGroup
                  onHandleChange={handleChange}
                  label="avatar"
                  type="file"
                  name="avatar"
                  placeholder="Enter the project name"
                />
              </Col>

              <Col lg="12">
                <FormGroup
                  onHandleChange={handleChange}
                  label="password"
                  type="password"
                  name="password"
                  placeholder="Enter the project name"
                  value={password}
                />
              </Col>

              <Col lg="12">
                <FormGroup
                  onHandleChange={handleChange}
                  label="repeat password"
                  type="password"
                  name="newPassword"
                  placeholder="Enter the project name"
                  value={newPassword}
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
