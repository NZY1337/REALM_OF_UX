import { useEffect, useState } from "react";


const PREFIX = 'codepen-clone-'

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


export const useLocalStorage = (key, initialValue) => {
  const prefixedKey = PREFIX + key

  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixedKey)
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === 'function') {
      return initialValue()
    } else {
      return initialValue
    }
  })

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value))
  }, [prefixedKey, value])

  return [value, setValue]
}