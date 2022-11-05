import React from "react";
import { Trash } from "react-bootstrap-icons";
import { BiDuplicate } from "react-icons/bi";

const DraggedItemControls = ({ removeItem, cloneItem, item }) => {
  return (
    <div
      className="draggable-controls"
      style={{
        position: "absolute",
        top: "-50px",
        padding: "10px 8px",
        background: "white",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Trash
        className="trash-icon"
        onClick={() => {
          removeItem(item.id);
        }}
      />
      <BiDuplicate
        onClick={() => cloneItem(item.id)}
        className="duplicate"
        style={{ marginLeft: "10px" }}
      />
    </div>
  );
};

export default DraggedItemControls;
