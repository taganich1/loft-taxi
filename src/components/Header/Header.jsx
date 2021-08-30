import React from "react";
import "./Header.styles.scss";

import logo from "../../img/logo.svg";
import PropTypes from "prop-types";

const Header = ({ handlePage }) => {
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
        <button
          className="navbar-item"
          value="registration"
          onClick={handlePage}
        >
          Зарегестрироваться
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  handlePage: PropTypes.func.isRequired,
};

export default Header;
