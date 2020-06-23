import React from "react";
import redesContaco from "../../Json/redes";
import crearImg from "../../images/crear.jpg";
import Header from "./Header.jsx";
import HeaderEnglish from "../english/HeaderEnglish.jsx";

function Contacto(props) {
  return (
    <>
      {props.state === true ? <Header /> : <HeaderEnglish />}
      <div id="contacto-container">
        <h1 className="text-center">{props.title}</h1>
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
