import React from "react";
import "./App.css";

function Presentation({ language = {} }) {
  const presentationText = language.presentation || "";
  
  if (!presentationText.trim()) {
    console.log("Language prop is empty or undefined");
  }

  return (
    <article>
      <div className="presentation-container">
        <p className="introduction">{presentationText}</p>
      </div>
    </article>
  );
}

export default Presentation;
