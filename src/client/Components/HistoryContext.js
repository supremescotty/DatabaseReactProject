import React, { useState, createContext } from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
export const HistoryContext = createContext();

export const HistoryProvider = (props) => {
  const [currentHistory, setCurrentHistory] = useState(createBrowserHistory());

  return (
    <HistoryContext.Provider value={[currentHistory, setCurrentHistory]}>
      {props.children}
    </HistoryContext.Provider>
  );
};
