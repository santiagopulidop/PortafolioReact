import React from "react";
import App from "../App";
import { IdiomaProvider } from "../components/idiomaContext.jsx";

function MainPage() {
  return (
    <IdiomaProvider>
      <App />
    </IdiomaProvider>
  );
}

export default MainPage;
