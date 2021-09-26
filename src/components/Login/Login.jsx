import React, { useEffect, useState } from "react";
import "./Login.styles.scss";
import Back from "../../img/registration-background.png";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authorize, registrationAction } from "../../redux/actions/actions";
import * as yup from "yup";
import { Formik } from "formik";

const Login = () => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Введите верный email")
      .required("Обязательное поле"),
    password: yup
      .string()
      .typeError("Имя должно содержать только строчные символы")
      .required("Обязательное поле"),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.authReducer.token);
  const dispatch = useDispatch();

  useEffect(() => {}, [token]);

  return (
    <div
      className="login"
      style={{
        backgroundImage: "url(" + Back + ")",
      }}
    >
      {token && <Redirect to="/profile" />}

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

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(authorize(values));
              console.log(values);
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
              <div className="login__signin">
                <div className="login__signin-email">
                  <label htmlFor="email">
                    Имя пользователя *
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
                <div className="login__signin-password">
                  <label htmlFor="password">
                    Пароль *
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
                <div className="login__signin-submit">
                  <button
                    type="submit"
                    className="login__signin-button"
                    disabled={!isValid && !dirty}
                    onClick={handleSubmit}
                  >
                    Войти
                  </button>
                </div>
              </div>
            )}
          </Formik>
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
