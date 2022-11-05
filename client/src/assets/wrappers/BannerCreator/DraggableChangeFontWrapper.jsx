import styled from "styled-components";

const DraggableChangeFontWrapper = styled.div`
  display: flex;

  .draggable-change-font-wrapper {
    &:first-child {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }

    &:last-child {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }

    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border: 1px solid lightgray;
    margin-left: -1px;
  }
`;

export default DraggableChangeFontWrapper;
