import React from "react";
import css from "../../images/css3.svg";
import html from "../../images/html-5.svg";
import js from "../../images/javascript-4.svg";
import bootstrap from "../../images/bootstrap-4.svg";
import sass from "../../images/sass-1.svg";
import git from "../../images/git-icon.svg";
import react from "../../images/react.svg";
import cpp from "../../images/c.svg";
import python from "../../images/python-5.svg";
import HeaderEnglish from "./HeaderEnglish.jsx";

function SobreMi() {
  return (
    <div id="sobre-mi-container">
      <HeaderEnglish />
      <div className="card text-justify sobreMi">
        <div className="card-body">
          <h2 className="text-center mt-3 card-title">
            <b>About me</b>
          </h2>
          <p className="card-text">Thanks for visiting my web site!</p>
          <p className="card-text">
            As you can see, I am passioned by tech, I love learnig about it
            because this way I can undersantand how devices we use each day
            works, and it's seems to have a superpower.
          </p>
          <p className="card-text">
            On the other hand, my hobbies are reading and improve my guitar
            skills; as a Latin guy, I like listen to salsa, cumbia, son cubano
            music, and it's a pleassure for me be able to play them in my
            guitar.
          </p>
          <p className="pb-3 card-text">
            Also I love sharing my math, code and music knowledgment, I think
            this is a way to clinch things I've learned and helping people.
          </p>
        </div>
      </div>
      <div className="card text-justify habilidades">
        <div className="card-body container-fluid">
          <h2 className="text-center mt-3 card-title">
            <b>Habilities</b>
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
    </div>
  );
}

export default SobreMi;
