import React from "react";
import "./App.css";
import WindowResize from "./WindowResize.js";

function Footer() {
  return (
    <WindowResize>
      {(windowWidth) => (
        <footer
          className={`footer ${
            windowWidth < 800 ? "small-screen" : "large-screen"
          }`}
        >
          <p
            className={`copyrights ${
              windowWidth < 800 ? "small-screen" : "large-screen"
            }`}
          >
            &copy; 2023 snoozleEmily. All rights reserved. <br /> This website
            is licensed under the MIT License.
          </p>
        </footer>
      )}
    </WindowResize>
  );
}

export default Footer;
