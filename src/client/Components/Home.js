import React, { useContext } from "react";
import { Router, Route, browserHistory } from "react-router";
import "./Home.css";
import usericon from "./usericon.png";
import { HistoryContext } from "./HistoryContext";

function Home() {
  const [currentHistory, setCurrentHistory] = useContext(HistoryContext);
  return (
    <div className="container">
        <text style={{color:'black',}}>HOME</text>
      <div className="login-container">
        <div className="usericon-container">
          <img src={usericon} className="usericon" />
          <button
            className="login-button"
            onClick={() => currentHistory.push("/login")}
          >
            Login
          </button>
          <button
            className="signup-button"
            onClick={() => currentHistory.push("/createuser")}
          >
            Create User
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
