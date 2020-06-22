import React from "react";
import redesContaco from "../Json/redes";
import crearImg from "../images/crear.jpg";
import Footer from "./Footer.jsx";

function Contacto() {
  function showMePosition(e) {
    console.dir(e.target);
    console.log(e.target.x, e.target.y);
  }
  return (
    <div id="contacto-container">
      <h2 className="text-center">¿Creamos algo juntos?</h2>
      <img src={crearImg} alt="crearImg" className="crear-img" />
      <div id="redes">
        {redesContaco.map((i) => {
          return (
            <a href={i.url} key={i.id} target="_blank">
              <img
                src={i.img}
                alt={i.red}
                id={i.red}
                className="red"
                onClick={(e) => {
                  showMePosition(e);
                }}
              />
            </a>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Contacto;
