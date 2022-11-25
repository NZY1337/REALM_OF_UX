import React from "react";
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { ButtonSecondary } from "../../../../components";

const FormComment = ({ hadleChange, addComment, comment }) => {
  return (
    <div className="mb-5 position-relative">
      <div className="mb-5">
        <h3 className="mb-2">Add A Comment</h3>
        <p>You must be logged in in order to add a comment!</p>
      </div>

      <Form onSubmit={addComment}>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Place your comment here..."
        >
          <Form.Control
            as="textarea"
            onChange={hadleChange}
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={comment}
          />
        </FloatingLabel>

        <ButtonSecondary type="submit" disabled={!comment} className="mt-3">
          Add Comment
        </ButtonSecondary>
      </Form>
    </div>
  );
};

FormComment.propTypes = { 
  hadleChange: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired
}

export default FormComment;
