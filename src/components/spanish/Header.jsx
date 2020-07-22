import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
      <a className="navbar-brand active" href="/">
        SP
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarToggleExternalContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#hero-container">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre-mi-container">
              Más sobre mi
            </a>
          </li>
          <li className="nav-item">
            <a href="#main-portafolio-container" className="nav-link">
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto-container">
              Contáctame
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
