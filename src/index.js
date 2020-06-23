import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainPage from "./pages/MainPage.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "jquery/dist/jquery.slim";

ReactDOM.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById("root")
);
