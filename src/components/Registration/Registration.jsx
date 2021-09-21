import React, { useState } from "react";
import "./Registration.styles.scss";
import Back from "../../img/registration-background.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction } from "../../redux/actions/actions";

const Registration = () => {
  /* const dispatch = useDispatch();
   const authed = useSelector((state) => state.authReducer.authed);
 
   const register = (authed) => {
     dispatch({ type: "REGISTER", payload: authed });
   };*/

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const token = useSelector((state) => state.registrationReducer.token);

  /*  const createUser = async (event) => {
      event.preventDefault();
      let formData = {
        name: event.target[1].value,
        email: event.target[2].value,
        surname: event.target[3].value,
        password: event.target[4].value,
      };
      const isValid = await userSchema.isValid(formData);
      console.log(isValid);
    };*/

  const registration = (event) => {
    event.preventDefault();
    dispatch(registrationAction({ email, password, name, surname }));
  };

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
            <form onSubmit={registration}>
              <div className="register__signin-email">
                <label htmlFor="">
                  Адрес электронной почты
                  <br />
                  <input
                    type="text"
                    className="email-input"
                    name="email"
                    placeholder="email@email.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="signin__group">
                <div className="register__signin-name">
                  <label htmlFor="">
                    Имя
                    <br />
                    <input
                      type="text"
                      name="name"
                      placeholder="Name..."
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
                <div className="register__signin-surname">
                  <label htmlFor="">
                    Фамилия
                    <br />
                    <input
                      type="text"
                      name="surname"
                      placeholder="Surname..."
                      required
                      onChange={(e) => setSurname(e.target.value)}
                    />
                  </label>
                </div>
              </div>

              <div className="register__signin-password">
                <label htmlFor="">
                  Пароль
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="password123"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
              </div>
              <div className="register__signin-submit">
                <input type="submit" value="Зарегистрироваться" required />
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
