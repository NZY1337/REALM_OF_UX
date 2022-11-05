import styled from "styled-components";

const DraggableChangeColorWrapper = styled.div`
  position: relative;

  button {
    background: none;
    height: 38px;
    width: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: x-large;
    }
  }
`;

export default DraggableChangeColorWrapper;
