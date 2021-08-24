import React from "react";
import "./Registration.styles.scss";
import Back from "/js/react/project/loft_school/loft-taxi/src/img/registration-background.png";

const Registration = ({ submitRegister, login }) => {
  return (
    <div
      className='register'
      style={{
        fontSize: "30px",
        backgroundImage: "url(" + Back + ")",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className='container'>
        <div className='register-logo'>
          <img src='loft__taxi-img.png' alt='' />
        </div>
        <div className='register-form'>
          <div className='register-title'>Регистрация</div>
          <div className='register__signup'>
            <p>Уже зарегистрирован? </p>{" "}
            <button className='register__signup-link' onClick={login}>
              Войти
            </button>
          </div>
          <div className='register__signin'>
            <form /* onSubmit={this.handleSubmit} */>
              <div className='register__signin-email'>
                <label htmlFor=''>
                  Адрес электронной почты
                  <br />
                  <input type='text' className='email-input' />
                </label>
              </div>
              <div className='signin__group'>
                <div className='register__signin-name'>
                  <label htmlFor=''>
                    Имя
                    <br />
                    <input
                    /* type='text'
                value={lastName}
                onChange={this.handleLastNameChange} */
                    />
                  </label>
                </div>
                <div className='register__signin-surname'>
                  <label htmlFor=''>
                    Фамилия
                    <br />
                    <input
                    /* type='text'
                value={lastName}
                onChange={this.handleLastNameChange} */
                    />
                  </label>
                </div>
              </div>

              <div className='register__signin-password'>
                <label htmlFor=''>
                  Пароль
                  <br />
                  <input
                  /* type='text'
                value={firstName}
                onChange={this.handleFirstNameChange} */
                  />
                </label>
              </div>
              <div className='register__signin-submit'>
                <input
                  type='submit'
                  value='Зарегистрироваться'
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                  onClick={submitRegister}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
