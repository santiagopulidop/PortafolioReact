import React from "react";
import css from "../images/css3.svg";
import html from "../images/html-5.svg";
import js from "../images/javascript-4.svg";
import bootstrap from "../images/bootstrap-4.svg";
import sass from "../images/sass-1.svg";
import git from "../images/git-icon.svg";
import react from "../images/react.svg";
import cpp from "../images/c.svg";
import python from "../images/python-5.svg";
import Header from "./Header.jsx";

function SobreMi() {
  return (
    <>
      <Header />
      <div className="card text-justify sobreMi">
        <div className="card-body">
          <h2 className="text-center mt-3 card-title">
            <b>Sobre mí</b>
          </h2>
          <p className="card-text">Gracias por visitar mi sitio web!</p>
          <p className="card-text">
            Como te habrás dado cuenta al principio, soy una persona apasionada
            por la tecnología, me encanta aprender sobre esta porque puedo
            entender cómo funcionan los dispositivos que a diario utilizamos.
          </p>
          <p className="card-text">
            Por otro lado, la mayor parte de mi tiempo libre trato de dedicarlo
            a la lectura y a mejorar mis habilidades en mi guitarra; como buen
            latino, me gusta mucho la salsa, la cumbia, el son cubano, y para mí
            es un privilegio poder tocar estos ritmos en mi guitarra.
          </p>
          <p className="pb-3 card-text">
            Así mismo me gusta compartir mis conocimientos en matemáticas,
            programación y música a las personas que me piden ayuda, ya que
            pienso que esta es una forma de afianzar el aprendizaje y adquirir
            pensamiento crítico{" "}
          </p>
        </div>
      </div>
      <div className="card text-justify habilidades">
        <div className="card-body container-fluid">
          <h2 className="text-center mt-3 card-title">
            <b>Habilidades</b>
          </h2>
          <div className="row text-center mt-5">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <img src={css} alt="css3" className="habilidad css" title="Css" />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <img
                src={html}
                alt="html"
                className="habilidad html"
                title="HTML"
              />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <img
                src={js}
                alt="JavaScript"
                className="habilidad javaScript"
                title="JavaScript"
              />
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4">
              <img
                src={bootstrap}
                alt="Bootstrap"
                className="habilidad"
                id="bootstrap"
                title="Bootstrap"
              />
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4">
              <img
                src={sass}
                alt="sass"
                className="habilidad sass"
                title="sass"
              />
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4">
              <img
                src={react}
                alt="React"
                className="habilidad react"
                title="React"
              />
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4">
              <img
                src={python}
                alt="python"
                className="habilidad python"
                title="Python"
              />
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4">
              <img src={cpp} alt="cpp" className="habilidad cpp" title="C++" />
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4">
              <img src={git} alt="Git" className="habilidad git" title="Git" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SobreMi;
