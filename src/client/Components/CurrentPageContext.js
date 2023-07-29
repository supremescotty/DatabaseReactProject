import React, { useState, createContext } from "react";
import Home from "./Home";
import App from  "./../App";
export const CurrentPageContext = createContext();

export const CurrentPageProvider = (props) => {
  const [currentPage, setCurrentPage] = useState(undefined);

  return (
    <CurrentPageProvider.Provider value={[currentPage, setCurrentPage]}>
      <Home/>
      <App/>
      {props.children}
    </CurrentPageProvider.Provider>
  );
};
