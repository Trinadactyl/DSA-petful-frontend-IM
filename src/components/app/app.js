import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./app.scss";

import { Home, Adoption } from "../../routes";
import { Logo } from "../../images";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <nav>
          <div className="container">
            <div className="links">
              <Link className="logo" to="/"><Logo /></Link>
              <Link to="/adoption">Adoption</Link>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/adoption" component={Adoption} />
          <Route exact path="/" component={Home} />
        </Switch>

        <footer>
          <div className="container">&copy; Petful 2020.</div>
        </footer>
      </React.Fragment>
    );
  }
}
