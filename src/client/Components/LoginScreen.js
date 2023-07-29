import React, { useContext, useState } from "react";
import { Router, Route, browserHistory } from "react-router";
import "./LoginScreen.css";
import usericon from "./usericon.png";
import { HistoryContext, HistoryProvider } from "./HistoryContext";

function LoginScreen() {
    const [name, setName] = useState("Victor")
  return (
    <div className="container">
        <text className="username-text">{name}</text>
      <div className="page-container">
          <button style={{width:'90%'}}>Click Me</button>
        
      </div>
    </div>
  );
}

export default LoginScreen;
