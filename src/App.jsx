import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AppContext } from "./AppContext";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Movie from "./Movie";
import Login from "./Login";
import "./assets/App.css";

const App = () => {
  const [login] = useContext(AppContext);
  return (
    <Router>
      <Nav />
      <div className="section">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          {login === "true" ? (
            <Route path="/movie" component={Movie} />
          ) : (
            <Route path="/login" component={Login} />
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
