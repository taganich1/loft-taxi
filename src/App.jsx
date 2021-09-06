import React, { useState } from "react";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Profile from "./components/Profile/Profile";
import Registration from "./components/Registration/Registration";
import Login from "./components/Login/Login";
import Back from "./img/registration-background.png";
import AuthContext from "./contex/AuthContext";
import logo from "./img/logo.svg";
import { Link, Route, Switch } from "react-router-dom";
import MainRoutes from "./components/MainRoutes/MainRoutes";
import AuthRoutes from "./components/AuthRoutes/AuthRoutes";

function App() {
  const [router, setRouter] = useState("registration");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const shouldShowHeader = window.location.pathname !== "/registration";

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

  /*
    const handlePage = (event) => {
      setRouter(event.target.value);
    };
  */

  const backImg = () => {
    return Back;
  };

  return (
    <div className="App">
      <AuthContext.Provider
        value={{
          logout,
          login,
        }}
      >
        <Switch>
          <Route path="/(login|registration)" component={AuthRoutes} />
          <Route component={MainRoutes} />
        </Switch>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
