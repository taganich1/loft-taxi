import React, { useState } from "react";
import "./Login.styles.scss";
import Back from "../../img/registration-background.png";

import { Link, Route } from "react-router-dom";

import { useDispatch } from "react-redux";
import { authorize } from "../../redux/actions/actions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*  const { isLoggedIn } = useSelector((state) => state.auth);*/
  const dispatch = useDispatch();

  const authentication = (event) => {
    event.preventDefault();
    dispatch(authorize({ email, password }));
  };

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
            <Link
              to="/registration"
              className="login__signup-link"
              value="registration"
            >
              Зарегистрируйтесь
            </Link>
          </div>

          <div className="login__signin">
            <form onSubmit={authentication}>
              <div className="login__signin-email">
                <label htmlFor="email">
                  Имя пользователя *
                  <br />
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    className="email-input"
                    name="email"
                    required
                  />
                </label>
              </div>

              <div className="login__signin-password">
                <label htmlFor="password">
                  Пароль *
                  <br />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    required
                  />
                </label>
              </div>
              <div className="login__signin-submit">
                <input type="submit" value="Войти" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
Login.propTypes =
  {
    handleRegister: PropTypes.func,
  }
;
*/

export default Login;
