import logo from './logo.svg';
import './App.css';
import React, {useContext} from "react";
import {Router, Route} from "react-router"
import {createBrowserHistory} from "history"
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import {HistoryProvider, HistoryContext} from "./Components/HistoryContext";
import CreateUser from "./Components/CreateUser"
import LoginScreen from "./Components/LoginScreen"
function App() {
  let history= createBrowserHistory()
  const [currentHistory, setCurrentHistory] = useContext(HistoryContext)
  return (
    
      <Router history={currentHistory}>
      <div className="App">

        <header className="App-header">
        <div className="nav-bar">
          <NavBar/>
        </div>
        <div className="container">
          <Route exact path="/" component={Home}/>
          <Route exact path = "/createuser" component={CreateUser}/>
          <Route exact path = "/login" component={LoginScreen}/>
        </div>
        </header><text>Welcome</text>
      
        
        
      </div>
      </Router>
  
  );
}

export default App;
