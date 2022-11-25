import React from "react";
import PropTypes from 'prop-types';
import DraggableTextSettingsWrapper from "../../../assets/wrappers/BannerCreator/DraggableTextSettingsWrapper";
import { BiBold, BiUnderline, BiItalic } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";


import ColorPicker from "../../../components/ColorPicker";

const DraggableTextSettings = ({ color, onChangeColorPicker }) => {
  return (
    <DraggableTextSettingsWrapper>
      <ColorPicker color={color} onChangeColorPicker={onChangeColorPicker}>
        <AiOutlineBgColors />
      </ColorPicker>

      <EditButton cmd="bold">
        <BiBold />
      </EditButton>

      <EditButton cmd="italic">
        <BiItalic />
      </EditButton>

      <EditButton cmd="underline">
        <BiUnderline />
      </EditButton>

      <EditButton cmd="formatBlock" arg="h1" name="heading1">
        h1
      </EditButton>

      <EditButton cmd="formatBlock" arg="h2" name="heading2">
        h2
      </EditButton>

      <EditButton cmd="formatBlock" arg="h3" name="heading3">
        h3
      </EditButton>

      <EditButton cmd="formatBlock" arg="h4" name="heading4">
        h4
      </EditButton>

      <EditButton cmd="formatBlock" arg="h5" name="heading5">
        h5
      </EditButton>

      <EditButton cmd="formatBlock" arg="p" name="paragraph">
        p
      </EditButton>

      {/* <EditButton
        cmd="createLink"
        arg="https://github.com/lovasoa/react-contenteditable"
        name="hyperlink"
      /> */}
    </DraggableTextSettingsWrapper>
  );
};

DraggableTextSettings.propTypes = {
  color: PropTypes.string,
  onChangeColorPicker: PropTypes.func.isRequired
}

export default DraggableTextSettings;

const EditButton = ({ cmd, arg, name, children }) => {
  return (
    <button
      key={cmd}
      onMouseDown={(evt) => {
        evt.preventDefault(); // Avoids loosing focus from the editable area
        document.execCommand(cmd, false, arg); // Send the command to the browser
      }}
    >
      {children}
    </button>
  );
};
