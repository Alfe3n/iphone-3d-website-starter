import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";
function Jumpotron() {
  function handleLearnMore() {
    document
      .querySelector(".sound-section")
      .scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" alt="iphone 14 pro" src={Iphone}></img>
      <p className="text">Big and bigger.</p>
      <span className="description">
        From $41.62/mo. or $999 before trade-in.
      </span>
      <ul className="links">
        <li>
          <button className="button">Buy</button>
        </li>
        <li>
          <a className="link" onClick={handleLearnMore}>
            Learn more
          </a>
        </li>
      </ul>
      <img className="iphone-img" src={HoldingIphone} alt="iphone"></img>
    </div>
  );
}

export default Jumpotron;
