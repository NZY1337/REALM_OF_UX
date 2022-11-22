import styled from "styled-components";

const DeleteEditWrapper = styled.div`
  button {
    background: transparent;
    border: none;
    color: black;

    &::after {
      display: none;
    }
  }
`;

export default DeleteEditWrapper;
