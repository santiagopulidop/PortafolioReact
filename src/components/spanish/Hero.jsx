import React from "react";
import santiagoImg from "../../images/santiagopulidop.jpg";
import Header from "./Header.jsx";

import Banderas from "./Banderas.jsx";

function Hero() {
  return (
    <>
      <Banderas />
      <Header />
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
              Hola! Soy <b>Santiago Pulido Peláez</b>
            </h2>
          </div>{" "}
          <div className="col-12">
            <h3 className="text-center">
              Desarrollador <b>Front End</b>{" "}
            </h3>
            <h5 className="mt-3 text-center">
              Apasionado por la tecnología, el aprendizaje, y la música.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
