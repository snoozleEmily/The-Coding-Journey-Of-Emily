import React from "react";
import "./App.css";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Flags from "./flags.js";

function Navbar({ setLanguage }) {
  return (
    <header className="navbar">
      <div className="icons">
        <FaGithubSquare
          className="icon"
          onClick={() =>
            window.open("https://github.com/snoozleEmily", "_blank")
          }
        />
        <FaInstagramSquare
          className="icon"
          onClick={() =>
            window.open("https://www.instagram.com/emilytechie/", "_blank")
          }
        />
        <FaLinkedin
          className="icon"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/emily-alvim-38bb97216/",
              "_blank"
            )
          }
        />
      </div>
      <Flags setLanguage={setLanguage} />
    </header>
  );
}

export default Navbar;
