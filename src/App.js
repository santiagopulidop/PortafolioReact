import React from "react";
import "animate.css";
import "./App.scss";
import Hero from "./components/Hero.jsx";
import SobreMi from "./components/SobreMi.jsx";
import ProyectosPortafolio from "./components/ProyectosPortafolio";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App container-fluid p-0">
      <Route exact path="/">
        <Hero />
      </Route>
      <Route path="/sobremi" component={SobreMi} />
      <Route path="/Proyectos" component={ProyectosPortafolio} />
      <Route path="/contacto" component={Contacto} />
      <Footer />
    </Router>
  );
}

export default App;
