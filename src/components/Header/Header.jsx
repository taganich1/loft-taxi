import React, { useContext } from "react";
import "./Header.styles.scss";
import { Link, NavLink, Route, Switch } from "react-router-dom";
import logo from "../../img/logo.svg";
import PropTypes from "prop-types";
import AuthContext from "../../contex/AuthContext";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Map from "../Map/Map";
import Registration from "../Registration/Registration";

const Header = () => {
  const context = useContext(AuthContext);

  return (
    <div>
      <header className="App-header">
        <div className="header-logo">
          <img
            src={logo}
            alt=""
            className="logo__loftcshool"
            width="200px"
            height="100px"
          />
        </div>
        <div className="navbar">
          <Link className="navbar-item" to="/map">
            Карта
          </Link>
          <Link className="navbar-item" to="/profile">
            Профиль
          </Link>
          <Link className="navbar-item" to="/login">
            Выйти
          </Link>
        </div>
      </header>
    </div>
  );
};

/*Header.propTypes = {
  handlePage: PropTypes.func.isRequired,
};*/

export default Header;
