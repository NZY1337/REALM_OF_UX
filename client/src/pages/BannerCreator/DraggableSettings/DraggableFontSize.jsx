import React from "react";
import DraggableChangeFontWrapper from "../../../assets/wrappers/BannerCreator/DraggableChangeFontWrapper";
import { PlusSquare, FileMinus } from "react-bootstrap-icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const DraggableFontSize = () => {
  return (
    <DraggableChangeFontWrapper style={{ marginRight: "1rem" }}>
      <div className="draggable-change-font-wrapper">
        <AiOutlinePlus />
      </div>
      <div className="draggable-change-font-wrapper">2</div>
      <div className="draggable-change-font-wrapper">
        <AiOutlineMinus />
      </div>
    </DraggableChangeFontWrapper>
  );
};

export default DraggableFontSize;
