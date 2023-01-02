import React, { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import LoginRegisterWrapper from "../../assets/wrappers/LoginRegister/LoginRegister";
import LoginRegisterForm from "./LoginRegisterForm";
import { useTranslateContext } from "../../utils/contexts/translate/translateContext";
import { useUserContext } from "../../utils/contexts/user/userContext";
import { useNavigate } from "react-router-dom";
import { notify } from "../../utils/helpers";

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
      isLoggedIn,
      isRegistred,
      isLoggedInTitle,
      isRegistredTitle,
      inputs: { login, register },
    },
  } = useTranslateContext();

  const { user, isLoading, registerUser, loginUser } = useUserContext();

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
      notify("warning", "Please provide all values!");
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
        <Row className="justify-content-end">
          <Col lg={12} id="login-register-form">
            <div>
              <h1>{values.isMember ? isLoggedInTitle : isRegistredTitle}</h1>
            </div>

            <LoginRegisterForm
              inputs={values.isMember ? login : register}
              toggleMember={toggleMember}
              handleChange={handleChange}
              onSubmit={onSubmit}
              isLoading={isLoading}
              isLoggedIn={isLoggedIn}
              isRegistred={isRegistred}
              isMember={values.isMember}
              isLoggedInTitle={isLoggedInTitle}
              isRegistredTitle={isRegistredTitle}
            />
          </Col>
        </Row>
      </Container>
    </LoginRegisterWrapper>
  );
};

export default LoginRegister;
