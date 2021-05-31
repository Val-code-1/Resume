import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import JobHistory from "./screens/JobHistory/JobHistory.js";
import Portfolio from "./screens/Portfolio/Portfolio";
import Teacher from "./screens/Teacher/Teacher";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <p>
            <Link to="/JobHistory">
              Job History
            </Link>
          </p>
          <p>
            <Link to="/Portfolio">Portfolio</Link>
          </p>
          <p>
            <Link to="/Teacher">Dustin</Link>
          </p>
        </nav>
        <Switch>
          <Route path="/JobHistory">
            <JobHistory />
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
