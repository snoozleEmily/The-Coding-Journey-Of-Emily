import React from "react";
import { PulseLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <PulseLoader color=" #0e2a35" />
    </div>
  );
}

export default LoadingSpinner;
