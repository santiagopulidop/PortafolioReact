import React from "react";
import santiagoImg from "../../images/santiagopulidop.jpg";
import HeaderEnglish from "./HeaderEnglish.jsx";

import Banderas from "../spanish/Banderas.jsx";

function HeroEnlish() {
  return (
    <>
      <Banderas />
      <HeaderEnglish />
      <div className="hero">
        <div className="imgContainer text-center">
          <img
            src={santiagoImg}
            alt="myPhoto"
            className="photo img-fluid rounded-pill"
            id="santiagoImg"
          />
        </div>
        <div id="intro" className="intro mt-4">
          <div className="col-12">
            <h2 className="text-center">
              Hey! I am <b>Santiago Pulido Peláez</b>
            </h2>
          </div>{" "}
          <div className="col-12">
            <h3 className="text-center">
              <b>Front End</b> Developer{" "}
            </h3>
            <h5 className="mt-3 text-center">
              Passionate about technology, learning, and music.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroEnlish;
