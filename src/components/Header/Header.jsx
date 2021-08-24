import React, { useState } from "react";
import "./Header.styles.scss";
import About from "../About/About";
import Map from "../Map/Map";
import Profile from "../Profile/Profile";
import Login from "../Registration/Registration";

const Header = ({ handlePage }) => {
  return (
    <header className='App-header' style={{}}>
      <div className='header-logo'>
        <img
          src='logo.svg'
          alt=''
          className='logo__loftcshool'
          width='200px'
          height='100px'
        />
      </div>
      <div
        className='navbar'
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button value='map' className='navbar-item' onClick={handlePage}>
          Карта
        </button>
        <button value='profile' className='navbar-item' onClick={handlePage}>
          Профиль
        </button>
        <button
          className='navbar-item'
          value='registration'
          onClick={handlePage}
        >
          Зарегестрироваться
        </button>
      </div>
    </header>
  );
};

export default Header;
