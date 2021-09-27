import React, { useEffect, useState } from "react";
import "./Registration.styles.scss";
import Back from "../../img/registration-background.png";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationAction } from "../../redux/actions/actions";
import { Formik } from "formik";
import * as yup from "yup";

const Registration = () => {
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .typeError("Имя должно содержать только строчные символы")
      .required("Обязательное поле"),
    surname: yup
      .string()
      .typeError("Фамилия должна содержать только строчные символы")
      .required("Обязательное поле"),
    email: yup
      .string()
      .email("Введите верный email")
      .required("Обязательное поле"),
    password: yup
      .string()
      .typeError("Имя должно содержать только строчные символы")
      .required("Обязательное поле")
      .min(5, "Пароль должен содержать более 5 символов")
      .max(16, "Пароль должен содержать менее 16 символлов"),
  });

  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  console.log(token, "opa");

  useEffect(() => {}, [token]);

  return (
    <div
      className="register"
      style={{
        backgroundImage: "url(" + Back + ")",
      }}
    >
      {token && <Redirect to="/profile" />}

      <div className="container">
        <div className="register-logo">
          <img src="loft__taxi-img.png" width="156px" alt="" />
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
            surname: "",
          }}
          validateOnBlur
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(registrationAction(values));
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            isValid,
            handleSubmit,
            dirty,
          }) => (
            <div className="register-form">
              <div className="register-title">Регистрация</div>
              <div className="register__signup">
                <span>Уже зарегистрирован? </span>
                <Link
                  to="/login"
                  className="register__signup-link"
                  value="login"
                >
                  Войти
                </Link>
              </div>
              <div className="register__signin">
                <div className="register__signin-email">
                  <label htmlFor="email">
                    Адрес электронной почты
                    <br />
                    <input
                      type="text"
                      className="email-input"
                      name="email"
                      placeholder="email@email.com"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {touched.email && errors.email && (
                      <p className="form-error">{errors.email}</p>
                    )}
                  </label>
                </div>
                <div className="signin__group">
                  <div className="register__signin-name">
                    <label htmlFor="name">
                      Имя
                      <br />
                      <input
                        type="text"
                        name="name"
                        placeholder="Name..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      {touched.name && errors.name && (
                        <p className="form-error">{errors.name}</p>
                      )}
                    </label>
                  </div>
                  <div className="register__signin-surname">
                    <label htmlFor="surname">
                      Фамилия
                      <br />
                      <input
                        type="text"
                        name="surname"
                        placeholder="Surname..."
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.surname}
                      />
                      {touched.surname && errors.surname && (
                        <p className="form-error">{errors.surname}</p>
                      )}
                    </label>
                  </div>
                </div>

                <div className="register__signin-password">
                  <label htmlFor="password">
                    Пароль
                    <br />
                    <input
                      type="password"
                      name="password"
                      placeholder="password123"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                    />
                    {touched.password && errors.password && (
                      <p className="form-error">{errors.password}</p>
                    )}
                  </label>
                </div>
                <div className="register__signin-submit">
                  <button
                    className="register__signin-button"
                    disabled={!isValid && !dirty}
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Зарегистрироваться
                  </button>
                </div>
              </div>
            </div>
          )}
        </Formik>
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
