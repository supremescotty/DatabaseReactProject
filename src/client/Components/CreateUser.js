import React, { useContext } from "react";
import { Router, Route, browserHistory } from "react-router";
import "./CreateUser.css";
import usericon from "./usericon.png";
import { HistoryContext, HistoryProvider } from "./HistoryContext";

function CreateUser() {
  return (
    <div className="container">
      <div className="page-container"></div>
    </div>
  );
}

export default CreateUser;
