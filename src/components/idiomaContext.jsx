import React, { useState, createContext } from "react";

export const IdiomaContext = createContext();

export function IdiomaProvider(props) {
  const [spanish, setIdioma] = useState(true);
  return (
    <IdiomaContext.Provider value={[spanish, setIdioma]}>
      {props.children}
    </IdiomaContext.Provider>
  );
}
