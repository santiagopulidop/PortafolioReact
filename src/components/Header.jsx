import React from "react";
import { Link } from "react-router-dom";

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
      <div
        className="collapse navbar-collapse"
        id="navbarToggleExternalContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobremi">
              Más sobre mi
            </Link>
          </li>
          <li className="nav-item">
            <Link to="Proyectos" className="nav-link">
              Proyectos
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contacto">
              Contáctame
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
