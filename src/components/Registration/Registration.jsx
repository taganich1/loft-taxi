import React, { useContext } from "react";
import "./Registration.styles.scss";
import Back from "../../img/registration-background.png";
import PropTypes from "prop-types";
import AuthContext from "../../contex/AuthContext";
import { Link, Route } from "react-router-dom";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";

const Registration = () => {
  /* const dispatch = useDispatch();
   const authed = useSelector((state) => state.authedReducer.authed);
 
   const register = (authed) => {
     dispatch({ type: "REGISTER", payload: authed });
   };*/

  return (
    <div
      className="register"
      style={{
        backgroundImage: "url(" + Back + ")",
      }}
    >
      <div className="container">
        <div className="register-logo">
          <img src="loft__taxi-img.png" width="156px" alt="" />
        </div>
        <div className="register-form">
          <div className="register-title">Регистрация</div>
          <div className="register__signup">
            <span>Уже зарегистрирован? </span>
            <Link to="/login" className="register__signup-link" value="login">
              Войти
            </Link>
          </div>
          <div className="register__signin">
            <form onSubmit>
              <div className="register__signin-email">
                <label htmlFor="">
                  Адрес электронной почты
                  <br />
                  <input
                    type="text"
                    className="email-input"
                    name="email"
                    required
                  />
                </label>
              </div>
              <div className="signin__group">
                <div className="register__signin-name">
                  <label htmlFor="">
                    Имя
                    <br />
                    <input type="text" required />
                  </label>
                </div>
                <div className="register__signin-surname">
                  <label htmlFor="">
                    Фамилия
                    <br />
                    <input type="text" required />
                  </label>
                </div>
              </div>

              <div className="register__signin-password">
                <label htmlFor="">
                  Пароль
                  <br />
                  <input type="password" name="password" required />
                </label>
              </div>
              <div className="register__signin-submit">
                <input
                  type="submit"
                  value="Зарегистрироваться"
                  required
                  onClick
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
Registration.propTypes = {
  handleLogin: PropTypes.func,
};
*/

export default Registration;
