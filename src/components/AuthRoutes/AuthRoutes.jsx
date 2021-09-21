import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../Login/Login";
import Registration from "../Registration/Registration";

const AuthRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
      </Switch>
    </div>
  );
};

export default AuthRoutes;
