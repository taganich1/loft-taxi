import React, { useEffect, useState } from "react";
import "./Profile.styles.scss";
import Back from "../../img/registration-background.png";
import masterCard from "../../img/mastercard-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentDataAction,
  setPaymentDataAction,
} from "../../redux/actions/actions";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import Loader from "react-loader-spinner";
import InputMask from "react-input-mask";

const Profile = () => {
  const validationSchema = yup.object().shape({
    cardNumber: yup
      .string("Неверный номер карты")
      /*.matches(
        "^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$",
        "Неверный номер карты"
      )*/
      /* .min(19, "Поле должно содержать 16 численных значения")
       .max(19, "Поле должно содержать 16 численных значения")*/
      .required("Обязательное поле"),
    cardName: yup
      .string("Имя должно содержать только латинсикие буквы")
      .typeError("Имя должно содержать только латинсикие буквы")
      /*.matches(
        "^([a-zA-Z]{2,}\\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\\s?([a-zA-Z]{1,})?)",
        "Имя должно содержать только латинсикие буквы"
      )*/
      .required("Обязательное поле"),
    expiryDate: yup
      .string()
      /* .matches(/^[0-9]+$/, "Поле должно содержать только численные значения")
       .max(5, "Поле должно быть в формате MM/YY")
       .min(5, "Поле должно быть в формате MM/YY")*/
      .required("Обязательное поле"),
    cvc: yup
      .string()
      /*.matches("/^[0-9]{3}$/", "Поле должно содержать 3 численных значения aaa")*/
      /*.max(3, "Поле должно содержать 3 численных значения")
      .min(3, "Поле должно содержать 3 численных значения")*/
      .required("Обязательное поле"),
  });
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const cardInfo = useSelector((state) => state.paymentDataReducer);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPaymentDataAction(token));
    }, 1000);
  }, []);

  /* useEffect(() => {
     setCard(cardInfo);
   }, [cardInfo]);
 */
  /* const setPaymentData = (event) => {
     event.preventDefault();
     const test = { ...card };
     console.log(test);
     dispatch(
       setPaymentDataAction({
         ...test,
         token,
       })
     );
   };*/

  /* const handleCardInputs = (inputName, value) => {
     setCard((prev) => ({
       ...prev,
       [inputName]: value,
     }));
   };
 */

  return (
    <div className="profile" style={{ backgroundImage: "url(" + Back + ")" }}>
      {token && <Redirect to="/profile" />}
      <div className="profile-container">
        <div className="profile__title">
          <div className="profile__title-text">Профиль</div>
          <div className="profile__title-description">Способ оплаты</div>
        </div>
        {cardInfo.cardName === "" ? (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={4000}
            style={{ textAlign: "center" }}
          />
        ) : (
          <Formik
            initialValues={{
              cardNumber: cardInfo.cardNumber,
              cardName: cardInfo.cardName,
              expiryDate: cardInfo.expiryDate,
              cvc: cardInfo.cvc,
            }}
            validateOnBlur
            validationSchema={validationSchema}
            onSubmit={(values) => {
              dispatch(
                setPaymentDataAction({
                  ...values,
                  token,
                })
              );

              console.log({
                ...values,
                token,
              });
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
              <div>
                <div className="profile__card-group">
                  <div className="profile__number">
                    <img
                      className="profile__number-img"
                      src={masterCard}
                      alt=""
                      width="42px"
                    />
                    <div className="card__name">
                      <label htmlFor="">
                        <span>Номер карты *</span>
                        <br />
                        <input
                          placeholder="0000 0000 0000 0000"
                          type="text"
                          className="profile__card-number"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={
                            values.cardNumber
                            /*.replace(/\s/g, "")
                            .replace(/(\d{4})/g, "$1 ")
                            .trim()*/
                          }
                          name="cardNumber"
                        />
                        {touched.cardNumber && errors.cardNumber && (
                          <p className="form-error">{errors.cardNumber}</p>
                        )}
                      </label>
                    </div>
                    <div className="card__expires">
                      <label htmlFor="">
                        Срок действия карты*
                        <br />
                        <input
                          placeholder="MM/YY"
                          type="text"
                          className="profile__card-data"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={
                            values.expiryDate
                            /*.replace(/^([1-9]\/|[2-9])$/g, "0$1/")
                            .replace(/^(0[1-9]|1[0-2])$/g, "$1/")
                            .replace(/^([0-1])([3-9])$/g, "0$1/$2")
                            .replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, "$1/$2")
                            .replace(/^([0]+)\/|[0]+$/g, "0")
                            .replace(/[^\d\/]|^[\/]*$/g, "")
                            .replace(/\/\//g, "/")*/
                          }
                          name="expiryDate"
                        />
                      </label>
                      {touched.expiryDate && errors.expiryDate && (
                        <p className="form-error">{errors.expiryDate}</p>
                      )}
                    </div>
                  </div>

                  <div className="profile__name">
                    <div className="card__owner">
                      <label htmlFor="">
                        Имя владельца *
                        <br />
                        <input
                          placeholder="Name..."
                          type="text"
                          className="profile__card-name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.cardName}
                          name="cardName"
                        />
                      </label>
                      {touched.cardName && errors.cardName && (
                        <p className="form-error">{errors.cardName}</p>
                      )}
                    </div>
                    <div className="card__cvc">
                      <label htmlFor="">
                        CVC*
                        <br />
                        <input
                          placeholder="000"
                          type="text"
                          className="profile__card-cvc"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.cvc}
                          name="cvc"
                        />
                        {touched.cvc && errors.cvc && (
                          <p className="form-error">{errors.cvc}</p>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="profile__card-submit">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={!isValid && !dirty}
                    className="profile__card-button"
                  >
                    Сохранить
                  </button>
                </div>
              </div>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Profile;
