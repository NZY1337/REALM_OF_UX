import React, { useState } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import LoginRegisterWrapper from "../../assets/wrappers/LoginRegister/LoginRegister";
import LoginRegisterForm from "./LoginRegisterForm";
import { Alert, TitleSectionDesign } from "../../components";
import { useTranslateContext } from "../../utils/contexts/translate/translateContext";
import { useUserContext } from "../../utils/contexts/user/userContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

//https://quart.ro/

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true, // only a switch used to toggle from login/register inputs
};

const LoginRegister = () => {
  const navigate = useNavigate();

  const {
    loginRegister: {
      titleSection: {
        login: { title, subtitle },
        register: { description },
      },
      inputs: { login, register },
    },
  } = useTranslateContext();

  const { user, isLoading, displayAlert, showAlert, registerUser, loginUser } =
    useUserContext();

  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;

    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }

    const currentUser = { name, email, password };

    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <LoginRegisterWrapper>
      <Container fluid>
        <Row>
          <Col lg={12} id="login-register-form">
            <div>
              <TitleSectionDesign
                textAlign="center"
                centerMargin="center"
                description={subtitle}
              />
              <h1>{title}</h1>
            </div>
            {showAlert && <Alert />}
            <LoginRegisterForm
              inputs={values.isMember ? login : register}
              toggleMember={toggleMember}
              handleChange={handleChange}
              onSubmit={onSubmit}
              isLoading={isLoading}
            />
          </Col>
        </Row>
      </Container>
    </LoginRegisterWrapper>
  );
};

export default LoginRegister;
