import React, { useContext } from "react";
import "animate.css";
import "./App.scss";
import { IdiomaContext } from "./components/idiomaContext.jsx";
import Hero from "./components/spanish/Hero.jsx";
import SobreMi from "./components/spanish/SobreMi.jsx";
import ProyectosPortafolio from "./components/spanish/ProyectosPortafolio";
import Contacto from "./components/spanish/Contacto.jsx";
import Footer from "./components/spanish/Footer.jsx";
/* EnglishComponents */
import HeroEnglish from "./components/english/HeroEnglish";
import AboutME from "./components/english/AboutMe.jsx";

function App() {
  const [spanish] = useContext(IdiomaContext);
  if (spanish) {
    return (
      <div className="App container-fluid p-0">
        <Hero />

        <SobreMi />

        <ProyectosPortafolio title="Portafolio" state={spanish} />

        <Contacto title="¿Creamos algo juntos?" state={spanish} />

        <Footer />
      </div>
    );
  } else {
    return (
      <div className="App container-fluid p-0">
        <HeroEnglish />

        <AboutME />

        <ProyectosPortafolio title="Portfolio" state={spanish} />

        <Contacto title="Let's create something together!" state={spanish} />

        <Footer />
      </div>
    );
  }
}

export default App;
