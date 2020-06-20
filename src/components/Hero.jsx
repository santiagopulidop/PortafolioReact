import React from "react";
import santiagoImg from "../images/santiagopulidop.jpg";

function Hero() {
  return (
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
          <h3 className="text-center">Desarrollador Front End</h3>
          <p className="mt-3">
            Apasionado por la tecnología, la música, el aprendizaje y la
            enseñanza
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
