import React, { useContext } from "react";
import "./Header.styles.scss";

import logo from "../../img/logo.svg";
import PropTypes from "prop-types";
import AuthContext from "../../contex/AuthContext";

const Header = ({ handlePage }) => {
  const { logout } = useContext(AuthContext);

  return (
    <header className="App-header" style={{}}>
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
        <button value="map" className="navbar-item" onClick={handlePage}>
          Карта
        </button>
        <button value="profile" className="navbar-item" onClick={handlePage}>
          Профиль
        </button>
        <button className="navbar-item" value="registration" onClick={logout}>
          Выйти
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  handlePage: PropTypes.func.isRequired,
};

export default Header;
