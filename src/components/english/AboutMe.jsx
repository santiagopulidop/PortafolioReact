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
            As you can see, I am passionate about technology, I enjoy learning
            about it because it is like having a superpower and it also helps me
            understand a great deal of how the devices we use daily actually
            work.
          </p>
          <p className="card-text">
            On the other hand, my hobbies include reading and improving my
            guitar skills; as a Latin guy I like listening to salsa, cumbia and
            Cuban music and it's a priviledge to be able to play these musical
            genres on my guitar
          </p>
          <p className="pb-3 card-text">
            I also enjoy sharing or imparting my knowledge of mathematics,
            programming and music, I think this is a wonderful way of retaining
            what I've learned through helping people.
          </p>
        </div>
      </div>
      <div className="card text-justify habilidades">
        <div className="card-body container-fluid">
          <h2 className="text-center mt-3 card-title">
            <b>Skills</b>
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
