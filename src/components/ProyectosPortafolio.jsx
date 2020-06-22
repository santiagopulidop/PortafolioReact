import React from "react";
import lista from "../Json/portafolio";
import Header from "./Header.jsx";

function ProyectosPortafolio() {
  console.log(lista);
  return (
    <>
      <Header />
      <div id="main-portafolio-container">
        <h2
          className="text-center"
          style={{ marginTop: "80px", textDecoration: "underline" }}
        >
          Portafolio
        </h2>
        <div id="portafolio-container" className="mb-5">
          {lista.map((i) => {
            return (
              <a
                href={i.url}
                target="_blank"
                key={i.id}
                rel="noopener noreferrer"
              >
                <div className="project card">
                  <div
                    style={{
                      backgroundImage: `url(${i.image})`,
                      height: "300px",
                      width: "250px",
                    }}
                    className="img-project card-img-top"
                    id={i.idCss}
                  />
                  <h4 className="text-center mt-2 p-2 project-name">
                    {i.project}
                  </h4>
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
