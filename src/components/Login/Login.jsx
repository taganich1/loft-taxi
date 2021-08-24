import React from "react";
import "./Login.styles.scss";
import Back from "/js/react/project/loft_school/loft-taxi/src/img/registration-background.png";

const Login = ({ register, submitRegister }) => {
  return (
    <div
      className='login'
      style={{
        fontSize: "30px",
        backgroundImage: "url(" + Back + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "fixed",
      }}
    >
      <div className='container'>
        <div className='login-logo'>
          <img src='loft__taxi-img.png' alt='' width='156px' />
        </div>
        <div className='login-form'>
          <div className='login-title'>Войти</div>
          <div className='login__signup'>
            <p> Новый пользователь? </p>{" "}
            <button className='login__signup-link' onClick={register}>
              Зарегистрируйтесь
            </button>
          </div>
          <div className='login__signin'>
            <form onSubmit={submitRegister}>
              <div className='login__signin-email'>
                <label htmlFor=''>
                  Имя пользователя *
                  <br />
                  <input type='text' className='email-input' required />
                </label>
              </div>

              <div className='login__signin-password'>
                <label htmlFor=''>
                  Пароль *
                  <br />
                  <input type='password' required />
                </label>
              </div>
              <div className='login__signin-submit'>
                <input type='submit' value='Зарегистрироваться' required />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
