import React from "react";

function HeaderEnglish() {
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
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre-mi-container">
              About me
            </a>
          </li>
          <li className="nav-item">
            <a href="#main-portafolio-container" className="nav-link">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto-container">
              Contact me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderEnglish;
