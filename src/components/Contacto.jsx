import React from "react";
import redesContaco from "../Json/redes";
import crearImg from "../images/crear.jpg";
import Header from "./Header.jsx";

function Contacto() {
  return (
    <>
      <Header />
      <div id="contacto-container">
        <h2 className="text-center">¿Creamos algo juntos?</h2>
        <img src={crearImg} alt="crearImg" className="crear-img" />
        <div id="redes">
          {redesContaco.map((i) => {
            return (
              <a
                href={i.url}
                key={i.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={i.img} alt={i.red} id={i.red} className="red" />
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Contacto;
