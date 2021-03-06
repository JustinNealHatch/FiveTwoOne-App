import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Invitations from "./pages/Invitations";
import Profile from "./pages/Profile";
import CardBuilder from "./pages/CardBuilder";

import ChoicesTable from "./pages/ChoicesTable";
import MovieChoices from "./pages/MovieChoices";
import movie from "../images/movie.jpeg";

class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/choicestable" component={ChoicesTable} />
          <Route path="/moviechoice" component={MovieChoices} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default AuthenticatedApp;
