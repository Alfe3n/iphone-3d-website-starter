import React from "react";

function DisplaySection() {
  function handleTop() {
    document
      .querySelector(".jumbotron-section")
      .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="display-section wrapper">
      <h2 className="title">New</h2>
      <p className="text">Brilliant.</p>
      <span className="description">
        A display that's up to 2x brighter in the sun.
      </span>
      <button className="button">Try me!</button>
      <button className="back-button" onClick={handleTop}>
        TOP
      </button>
    </div>
  );
}

export default DisplaySection;
