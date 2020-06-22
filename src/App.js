import React from "react";
import "animate.css";
import "./App.scss";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import SobreMi from "./components/SobreMi.jsx";
import ProyectosPortafolio from "./components/ProyectosPortafolio";
import Contacto from "./components/Contacto.jsx";
import Footer from "./components/Footer.jsx";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App container-fluid p-0">
      <Header />
      <Route exact path="/">
        <Hero />
      </Route>
      <Route path="/sobremi" component={SobreMi} />
      <Route path="/Proyectos" component={ProyectosPortafolio} />
      <Route path="/contacto" component={Contacto} />
    </Router>
  );
}

export default App;
