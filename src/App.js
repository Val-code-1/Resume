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
const App = () => {
  return (
    <Router>
      <div>
        <nav id="navBar">
          <Link to="/">
            <img src={brIcon} id="brIcon" />
          </Link>
          <p className="pageLink">
            <Link to="/History">History</Link>
          </p>
          <p className="pageLink">
            <Link to="/Portfolio">Portfolio</Link>
          </p>
          <p className="pageLink">
            <Link to="/Teacher">Dustin</Link>
          </p>
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
