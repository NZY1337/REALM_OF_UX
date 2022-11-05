import React from "react";
import { Form } from "react-bootstrap";

const DraggableFontFamily = () => {
  return (
    <Form.Select
      aria-label="Default select example"
      style={{ width: "150px", marginRight: "1rem" }}
    >
      <option value="italic">Italic</option>
      <option value="sans-serif">Sans Serif</option>
      <option value="bold">Boldic</option>
    </Form.Select>
  );
};

export default DraggableFontFamily;
