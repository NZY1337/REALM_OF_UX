import React, { useState, useRef } from "react";
import { Rnd } from "react-rnd";
import {
  DRAGGED_ITEM_NEWSTYLE,
  DRAGGED_ITEM_DEFAULTSTYLE,
} from "../../../utils/helpers/constants";
import ContentEditable from "react-contenteditable";
import { useOnClickOutside } from "../../../utils/hooks";
import DraggedItemControls from "./DraggedItemControls";
import "./styles.scss";

const Draggable = ({ item, saveChanges, removeItem, cloneItem }) => {
  const [dragStart, setDragStart] = useState(false);
  const [draggable, setDraggable] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const text = useRef(item.text);
  const dragRef = useRef();
  const [delta, setDelta] = useState(null);
  const [finalStyle, setFinalStyle] = useState(null);
  const [resizeStop, setResizeStop] = useState(false);

  useOnClickOutside(dragRef, () => {
    setDragStart(false);
    setShowControls(false);
    setDraggable(false);
  });

  const handleOnResize = (e, direction, ref, { height, width }, position) => {
    setDelta(height);
    console.log(height, width);
  };

  const handleChange = (evt) => {
    text.current = evt.target.value;
    saveChanges(item.id, text.current);
  };

  const handleOnDragStart = (e) => {
    setDragStart(true);
    setShowControls(true);

    if (e.target.className !== "react-draggable") {
      setDraggable(true);
    }
  };

  const handleOnResizeStart = () => {
    setDragStart(true);
    setShowControls(false);
    setResizeStop(false);
  };

  const handleOnDrag = () => {
    setShowControls(false);
  };

  const handleOnDragStop = () => {
    setShowControls(true);
  };

  const handleOnResizeStop = (e, direction, ref) => {
    setShowControls(true);

    setResizeStop(true);
    setFinalStyle({
      ...finalStyle,
      minWidth: "auto",
      minHeight: "auto",
      spanac: "css",
    });
  };

  const newStyle = dragStart
    ? {
        ...DRAGGED_ITEM_NEWSTYLE,
        border: "2px solid #7000d9",
      }
    : {
        ...DRAGGED_ITEM_NEWSTYLE,
        ...finalStyle,
        textAlign: "center",
        width: "auto",
        height: resizeStop && "auto",
      };

  return (
    <>
      <Rnd
        style={{ ...newStyle }}
        bounds="parent"
        onDragStart={handleOnDragStart}
        onResizeStop={handleOnResizeStop}
        onDrag={handleOnDrag}
        onResize={handleOnResize}
        onDragStop={handleOnDragStop}
        onResizeStart={handleOnResizeStart}
        disableDragging={draggable}
        default={{ ...DRAGGED_ITEM_DEFAULTSTYLE }}
        resizeGrid={[15, 15]}
        dragGrid={[15, 15]}
      >
        <div className="draggable-wrapper" ref={dragRef}>
          {showControls && (
            <DraggedItemControls
              removeItem={removeItem}
              item={item}
              cloneItem={cloneItem}
            />
          )}
          <ContentEditable
            style={item.style}
            html={text.current}
            onChange={handleChange}
            className="content-editable"
          />
        </div>
      </Rnd>
    </>
  );
};

export default Draggable;
