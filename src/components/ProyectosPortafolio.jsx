import React from "react";
import lista from "../Json/portafolio";

function ProyectosPortafolio() {
  console.log(lista);
  return (
    <div id="portafolio-container">
      {lista.map((i) => {
        return (
          <div className="project card" key={i.id}>
            <div
              style={{
                backgroundImage: `url(${i.image})`,
                height: "300px",
                width: "250px",
              }}
              className="img-project card-img-top"
              id={i.idCss}
            />
            <h4 className="text-center mt-2 p-2 project-name">{i.project}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default ProyectosPortafolio;
