import React from "react";
import { createPortal } from "react-dom";
import "./Model.css";

const Model = (props) => {
  const modelContainer = document.getElementById("model");

  console.log(modelContainer);
  return createPortal(
    <div className="model-overlay">
      <div className="model-container">
        <section className="upper-section"></section>
        <section className="middel-section"></section>
        <section className="lower-section"></section>
      </div>
    </div>,
    modelContainer
  );
};

export default Model;
