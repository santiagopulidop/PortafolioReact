import React from "react";
import lista from "../../Json/portafolio";
import Header from "./Header.jsx";
import HeaderEnglish from "../english/HeaderEnglish.jsx";

function ProyectosPortafolio(props) {
  return (
    <>
      {props.state === true ? <Header /> : <HeaderEnglish />}
      <div id="main-portafolio-container">
        <h1 className="text-center font-weigth-bold" style={{ margin: "160px 0 40px 0" }}>
          {props.title}
        </h1>
        <div id="portafolio-container" className="mb-5">
          {lista.map((i) => {
            return (
              <a href={i.url} target="_blank" key={i.id} rel="noopener noreferrer" style={{ color: "black" }}>
                <div className="project card">
                  <div
                    style={{
                      backgroundImage: `url(${i.image})`,
                      height: "230px",
                    }}
                    className="img-project card-img-top"
                    id={i.idCss}
                  />
                  <h4 className="text-center mt-2 p-2 project-name">{i.project}</h4>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProyectosPortafolio;
