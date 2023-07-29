import React, { useContext } from "react";
import { Router, Route, browserHistory } from "react-router";
import home from "./home.png";
import usericon from "./usericon.png";
import { HistoryContext } from "./HistoryContext";
import "./NavBar.css";
function NavBar() {
  const [currentHistory, setCurrentHistory] = useContext(HistoryContext);
  return (
    <div className="navbar-container">
      <input
        type="image"
        src={home}
        className={"homeicon-container"}
        onClick={() => {
          currentHistory.push("/");
        }}

      ></input>
      <text className="title">Home</text>
    </div>
  );
}

export default NavBar;
