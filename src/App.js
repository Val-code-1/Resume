import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import History from "./screens/History/History.js";
import Portfolio from "./screens/Portfolio/Portfolio";
import Teacher from "./screens/Teacher/Teacher";
import brIcon from "./assets/brIcon.png";
import historyIcon from "./assets/history.png";
const App = () => {
  return (
    <Router>
      <div>
        <nav id="navBar">
          <div id="name">
            <Link to="/">
              <img src={brIcon} id="brIcon" />
            </Link>
            <p>Benjamin Reit</p>
          </div>
          <div id="pageIcons">
            <div id="historyThings">
              <Link to="/History">
                <img src={historyIcon} id="historyIcon" />
              </Link>
              <p id="historyText">History</p>
            </div>
            <button className="pageLink">
              <Link to="/Portfolio">Portfolio</Link>
            </button>
            <button className="pageLink">
              <Link to="/Teacher">Dustin</Link>
            </button>
          </div>
        </nav>
        <Switch>
          <Route path="/History">
            <History />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/Teacher">
            <Teacher />
          </Route>
          <Route path="/">
            <p>Title Page!!!</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
