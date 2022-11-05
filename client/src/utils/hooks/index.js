import { useEffect, useState } from "react";

// Hook
export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export const useConvertBase64ToBlob = (project) => {
  const [blogPath, setBlobPath] = useState("");

  useEffect(() => {
    fetch(project.desktop)
      .then((res) => res.blob())
      .then((res) => {
        const blob = window.URL.createObjectURL(res);
        setBlobPath(blob);
      })
      .catch((err) => console.log(err));
  }, []);

  return blogPath;
};
