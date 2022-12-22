import React from "react";
import { useProjectContext } from "../../utils/contexts/project/projectContext";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function TextEditor({ readOnly }) {
  const {
    project: { content },
    handleCreateProjectContent,
  } = useProjectContext();

  return (
    <ReactQuill
      readOnly={readOnly}
      theme="snow"
      value={content}
      onChange={handleCreateProjectContent}
    />
  );
}

export default TextEditor;
