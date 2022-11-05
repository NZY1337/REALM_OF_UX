import React, { useState, useRef, useEffect } from "react";
import { Form, Col, Row, InputGroup, FormControl } from "react-bootstrap";
import { ButtonPrimary } from "../../../components";
import { Send } from "react-bootstrap-icons";

const ContactForm = ({ form }) => {
  const [itemBorder, setItemBorder] = useState("");
  const borderRef = useRef(null);

  const { inputs, textarea } = form;

  useEffect(() => {}, []);

  return (
    <Form className="contact-form">
      <Row>
        {inputs.map((item) => {
          return (
            <Col
              key={item.name}
              className="d-flex align-items-center col-lg-6 mb-4"
            >
              <InputGroup className="mb-3">
                <InputGroup.Text
                  ref={borderRef}
                  style={{
                    borderColor: itemBorder === item.id ? "#bc5318" : "#827872",
                  }}
                >
                  <item.icon color="#bc5318" size={22} />
                </InputGroup.Text>
                <FormControl
                  placeholder={item.name}
                  aria-label={item.name}
                  name={item.name}
                  id={item.id}
                  onFocus={(e) => {
                    setItemBorder(e.target.id);
                  }}
                  onBlur={() => {
                    setItemBorder("");
                  }}
                />
              </InputGroup>
            </Col>
          );
        })}
      </Row>

      <Row className="mb-4">
        <Col>
          <Form.Control as="textarea" placeholder={textarea} rows={5} />
        </Col>
      </Row>
      <Row className="mb-4 justify-content-end">
        <Col className="text-end">
          <ButtonPrimary>
            Send <Send />
          </ButtonPrimary>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactForm;
