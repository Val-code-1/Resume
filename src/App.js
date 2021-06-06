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
import About from "./screens/About/About";
import brIcon from "./assets/brIcon.png";
import historyIcon from "./assets/history.png";
import portIcon from "./assets/portfolio.png";
import bojack from "./assets/Bojack.jpg";
import aboutIcon from "./assets/about.png";
const App = () => {
  return (
    <Router>
      <div>
        <nav id="navBar">
          <div id="name">
            <Link to="/">
              <img src={brIcon} id="brIcon" />
            </Link>
            <p id="nameText">Benjamin Reit</p>
          </div>
          <div id="pageIcons">
            <div id="historyThings">
              <Link to="/History">
                <img src={historyIcon} id="historyIcon" />
              </Link>
              <p id="historyText">History</p>
            </div>
            <div>
              <Link to="/Portfolio">
                <img src={portIcon} id="portIcon" />
              </Link>
              <p id="portText">Portfolio</p>
            </div>
            <div>
              <Link to="/About">
                <img src={aboutIcon} id="aboutIcon" />
              </Link>
              <p id="aboutText">About</p>
            </div>
          </div>
        </nav>
        <Switch>
          <Route path="/History">
            <History />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/">
            <img src={bojack} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
