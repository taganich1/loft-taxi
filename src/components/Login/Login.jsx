import React, { useContext } from "react";
import "./Login.styles.scss";
import Back from "../../img/registration-background.png";
import PropTypes from "prop-types";
import AuthContext from "../../contex/AuthContext";

const Login = ({ handlePage }) => {
  const { login } = useContext(AuthContext);
  return (
    <div
      className="login"
      style={{
        backgroundImage: "url(" + Back + ")",
      }}
    >
      <div className="container">
        <div className="login-logo">
          <img src="loft__taxi-img.png" alt="" width="156px" />
        </div>
        <div className="login-form">
          <div className="login-title">Войти</div>
          <div className="login__signup">
            <span> Новый пользователь? </span>
            <button
              className="login__signup-link"
              value="login"
              onClick={handlePage}
            >
              Зарегистрируйтесь
            </button>
          </div>
          <div className="login__signin">
            <form onSubmit={(event) => login(event)}>
              <div className="login__signin-email">
                <label htmlFor="">
                  Имя пользователя *
                  <br />
                  <input
                    type="text"
                    className="email-input"
                    name="email"
                    required
                  />
                </label>
              </div>

              <div className="login__signin-password">
                <label htmlFor="">
                  Пароль *
                  <br />
                  <input type="password" name="password" required />
                </label>
              </div>
              <div className="login__signin-submit">
                <input type="submit" value="Зарегистрироваться" required />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  handleRegister: PropTypes.func,
};

export default Login;
