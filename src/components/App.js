import React from 'react';
import Header from '../containers/header';
import { Route, Switch } from "react-router-dom";
import Home from "./home";
import TodoApp from "./todo-app"
import Ressources from "./ressources";
import RequireAuthentification from "../helpers/require-authentification";
import Signin from "./signin";
import Signout from "./signout";
import Signup from "./signup";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/liste" component={RequireAuthentification(TodoApp)} />
        <Route exact path="/ressources" component={RequireAuthentification(Ressources)} />
        <Route exact path ="/signin" component={Signin}/>
        <Route exact path ="/signout" component={Signout}/>
        <Route exact path ="/signup" component={Signup}/>
      </Switch>
    </div>
  );
}

export default App;
