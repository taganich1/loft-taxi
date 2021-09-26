import React from "react";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRout/PrivateRoute";
import { useSelector } from "react-redux";

const MainRoutes = () => {
  return (
    <div>
      <Header />
      <PrivateRoute exact path="/map" component={Map} />
      <PrivateRoute exact path="/profile" component={Profile} />
    </div>
  );
};

export default MainRoutes;
