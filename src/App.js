import React, { useContext } from "react";
import "animate.css";
import "./App.scss";
import { IdiomaContext } from "./components/idiomaContext.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
  console.log(spanish);
  if (spanish) {
    return (
      <Router className="App container-fluid p-0">
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/sobremi" component={SobreMi} />
        <Route path="/Proyectos">
          <ProyectosPortafolio title="Portafolio" state={spanish} />
        </Route>
        <Route path="/contacto">
          <Contacto title="¿Creamos algo juntos?" state={spanish} />
        </Route>
        <Footer />
      </Router>
    );
  } else {
    return (
      <Router className="App container-fluid p-0">
        <Route exact path="/">
          <HeroEnglish />
        </Route>
        <Route path="/sobremi" component={AboutME} />
        <Route path="/Proyectos">
          <ProyectosPortafolio title="Portfolio" state={spanish} />
        </Route>
        <Route path="/contacto">
          <Contacto title="Let's create something together!" state={spanish} />
        </Route>
        <Footer />
      </Router>
    );
  }
}

export default App;
