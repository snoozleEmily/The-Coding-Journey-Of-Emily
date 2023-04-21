import React from "react";
import "./App.css";
import intros from "./data";
import usflag from "./images/us-flag.jpg";
import brflag from "./images/br-flag.jpg";
import esflag from "./images/es-flag.jpg";
import frflag from "./images/fr-flag.jpg";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

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
      <div className="flags">
        <img
          src={usflag}
          alt="us flag"
          className="flag"
          onClick={() => setLanguage(intros[0])}
        />
        <img
          src={brflag}
          alt="br flag"
          className="flag"
          onClick={() => setLanguage(intros[1])}
        />
        <img
          src={esflag}
          alt="es flag"
          className="flag"
          onClick={() => setLanguage(intros[2])}
        />
        <img
          src={frflag}
          alt="fr flag"
          className="flag"
          onClick={() => setLanguage(intros[3])}
        />
      </div>
    </header>
  );
}

export default Navbar;
