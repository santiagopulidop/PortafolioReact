import React, { useContext } from "react";
import spanishFlag from "../../images/espana.svg";
import englishFlag from "../../images/bandera.svg";
import { IdiomaContext } from "../idiomaContext";
function Banderas() {
  const [spanish, setIdioma] = useContext(IdiomaContext);
  return (
    <div id="banderas-container">
      <img
        src={spanishFlag}
        alt="spanish"
        id="spanish"
        onClick={() => {
          setIdioma(true);
        }}
      />
      <img
        src={englishFlag}
        alt="english"
        id="english"
        onClick={() => {
          setIdioma(false);
        }}
      />
    </div>
  );
}

export default Banderas;
