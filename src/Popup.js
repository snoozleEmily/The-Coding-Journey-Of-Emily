import React, { useState, useEffect } from "react";
import WindowResize from "./WindowResize";
import "./popup.css";

function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup after 2 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Hide popup after 9 seconds
  useEffect(() => {
    if (!showPopup) return;

    const popupTimer = setTimeout(() => {
      setShowPopup(false);
    }, 9000);

    return () => {
      clearTimeout(popupTimer);
    };
  }, [showPopup]);

  // Hide popup after 3 seconds of mouse hover is finished
  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <WindowResize>
      {(windowWidth) => {
        if (windowWidth < 750) return undefined;

        return (
          <>
            {showPopup && (
              <div className="popup-container" onMouseLeave={handleMouseLeave}>
                <div className="arrow show"></div>
                <div className="popup show">Change the language here</div>
              </div>
            )}
          </>
        );
      }}
    </WindowResize>
  );
}

export default Popup;
