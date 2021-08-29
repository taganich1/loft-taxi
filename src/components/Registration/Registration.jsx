import React from 'react';
import './Registration.styles.scss';
import Back from '../../img/registration-background.png';

const Registration = ({
  submitRegister,
  login,
}) => {
  return (
    <div
      className="register"
      style={{
        backgroundImage: 'url(' + Back + ')',

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
            <button className="register__signup-link" onClick={login}>
              Войти
            </button>
          </div>
          <div className="register__signin">
            <form onSubmit={submitRegister}>
              <div className="register__signin-email">
                <label htmlFor="">
                  Адрес электронной почты
                  <br />
                  <input type="text" className="email-input" required />
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
                  <input type="password" required />
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

export default Registration;
