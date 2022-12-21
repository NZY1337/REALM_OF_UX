import React from "react";
import { useProjectContext } from "../../utils/contexts/project/projectContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor() {
  const {
    project: { content },
    handleCreateProjectContent,
  } = useProjectContext();

  console.log(content);

  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={handleCreateProjectContent}
    />
  );
}

export default TextEditor;
