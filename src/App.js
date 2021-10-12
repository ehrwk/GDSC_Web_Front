import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main";
import Board from "./pages/Board";
import Alarm from "./pages/Alarm";

import Login from "./pages/Account/Login";
import SignUp from "./pages/Account/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/board" component={Board} />
        <Route exact path="/alarm" component={Alarm} />

        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component = {SignUp}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
