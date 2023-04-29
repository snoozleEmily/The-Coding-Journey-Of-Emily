import React from "react";
import image from "./images/head-photo.jpg";
import WindowResize from "./WindowResize";
import "./App.css";

function Portrait() {
  return (
    <WindowResize>
      {(windowWidth) => (
        <picture>
          <img
            src={image}
            alt="Emily's portrait"
            className={`${windowWidth < 540 ? "portraitsmall" : "portrait"}`}
          />
        </picture>
      )}
    </WindowResize>
  );
}

export default Portrait;
