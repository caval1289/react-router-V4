import React from 'react';
import Header from '../containers/header';
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import Ressources from "./ressources";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/:id" component={Home} />
        <Route exact path="/ressources" component={Ressources} />
      </Switch>
    </div>
  );
}

export default App;
