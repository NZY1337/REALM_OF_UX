import React, { useState } from "react";
import reactCSS from "reactcss";

import { SketchPicker } from "react-color";

const ColorPicker = ({ color, onChangeColorPicker, children }) => {
  const [displayPicker, setDisplayPicker] = useState(false);

  const handleClick = () => {
    setDisplayPicker(!displayPicker);
  };

  const handleClose = () => {
    setDisplayPicker(false);
  };

  const styles = reactCSS({
    default: {
      color: {
        width: "36px",
        height: "14px",
        borderRadius: "2px",
        background: "red",
      },
      swatch: {
        padding: "5px",
        background: "#fff",
        borderRadius: "1px",
        boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
        display: "inline-block",
        cursor: "pointer",
      },
      popover: {
        position: "absolute",
        zIndex: "2",
        marginTop: "1rem",
        top: "2rem",
        left: "1rem",
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    },
  });

  return (
    <>
      <button onClick={handleClick}> {children}</button>

      {displayPicker ? (
        <div style={styles.popover}>
          <div style={styles.cover} onClick={handleClose} />
          <SketchPicker color={color} onChangeComplete={onChangeColorPicker} />
        </div>
      ) : null}
    </>
  );
};

export default ColorPicker;
