import React, { useEffect, useState } from "react";
import AuthContext from "./contex/AuthContext";
import { Redirect, Route, Switch } from "react-router-dom";
import MainRoutes from "./components/MainRoutes/MainRoutes";
import AuthRoutes from "./components/AuthRoutes/AuthRoutes";
import { useSelector } from "react-redux";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

function App() {
  const [router, setRouter] = useState("registration");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    setIsLoggedIn(false);
    setRouter("registration");
  };

  const login = (event) => {
    let authData = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    setIsLoggedIn(true);
    setRouter("map");
  };

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const token = useSelector((state) => state.registrationReducer.token);


  return (
    <div className="App">
      <Switch>
        <Route exact path="/(login|registration)" component={AuthRoutes} />
        <Route exact component={MainRoutes} />
      </Switch>
    </div>
  );
}

export default App;
