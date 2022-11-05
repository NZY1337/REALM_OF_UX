import styled from "styled-components";

const DraggableTextSettingsWrapper = styled.div`
  display: flex;
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
    margin-right: 0.5rem;

    svg {
      font-size: x-large;
    }
  }
`;

export default DraggableTextSettingsWrapper;
