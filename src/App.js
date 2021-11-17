import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Homepage from "./screens/Homepage/Homepage";
import History from "./screens/History/History.js";
import Portfolio from "./screens/Portfolio/Portfolio";
import About from "./screens/About/About.js";
import Contact from "./screens/Contact/Contact.js";
import brIcon from "./assets/brIcon.png";
import historyIcon from "./assets/history.png";
import portIcon from "./assets/portfolio.png";
import aboutIcon from "./assets/about.png";
import contactIcon from "./assets/contact.png";

const App = () => {
  return (
    <Router>
      <div>
        <nav id="navBar">
          <div id="name">
            <Link to="/">
              <img
                src={brIcon}
                id="brIcon"
                className="icon"
              />
            </Link>
            <p id="nameText">Benjamin Reit</p>
          </div>
          <div id="pageIcons">
            <div id="historyThings">
              <Link to="/History">
                <img
                  src={historyIcon}
                  id="historyIcon"
                  className="icon"
                />
              </Link>
              <p id="historyText">History</p>
            </div>
            <div>
              <Link to="/Portfolio">
                <img
                  src={portIcon}
                  id="portIcon"
                  className="icon"
                />
              </Link>
              <p id="portText">Portfolio</p>
            </div>
            <div>
              <Link to="/About">
                <img
                  src={aboutIcon}
                  id="aboutIcon"
                  className="icon"
                />
              </Link>
              <p id="aboutText">About</p>
            </div>
            <div>
              <Link to="/Contact">
                <img
                  src={contactIcon}
                  id="contactIcon"
                  className="icon"
                />
              </Link>
              <p id="contactText">Contact</p>
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
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
