import { useState, useEffect } from "react";

// This component is to make the website accessible in smaller devices.

function WindowResize({ children }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return children(windowWidth);
}

export default WindowResize;
