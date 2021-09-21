import React from "react";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import Header from "../Header/Header";
import PrivateRoute from "../PrivateRout/PrivateRoute";

const MainRoutes = () => {
  return (
    <div>
      <Header />
      <PrivateRoute path="/map" component={Map} />
      <PrivateRoute path="/profile" component={Profile} />
    </div>
  );
};

export default MainRoutes;
