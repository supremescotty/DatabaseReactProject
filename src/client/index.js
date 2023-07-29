import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HistoryProvider } from "./Components/HistoryContext";
import { CurrentPageProvider } from "./Components/CurrentPageContext";

ReactDOM.render(
  <React.StrictMode>
    
      <HistoryProvider>
        <App />
      </HistoryProvider>
    
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
