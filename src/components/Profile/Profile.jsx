import React, { useEffect, useState } from "react";
import "./Profile.styles.scss";
import Back from "../../img/registration-background.png";
import masterCard from "../../img/mastercard-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentDataAction,
  registrationAction,
  setPaymentDataAction,
} from "../../redux/actions/actions";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";

const Profile = () => {
  const validationSchema = yup.object().shape({
    cardNumber: yup
      .string("Неверный номер карты")
      .matches(
        "^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$",
        "Неверный номер карты"
      )
      .required("Обязательное поле"),
    cardName: yup
      .string()
      .typeError("Имя должно содержать только латинсикие буквы")
      .required("Обязательное поле"),
    expiryDate: yup.number().integer().positive().required("Обязательное поле"),
    cvc: yup
      .string()
      /*.matches("/^[0-9]{3,4}$/", "Поле должно содержать 3 численных значения")*/
      .required("Обязательное поле"),
  });

  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
  });
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const cardInfo = useSelector((state) => state.paymentDataReducer);

  useEffect(() => {
    dispatch(getPaymentDataAction(token));
  }, []);

  useEffect(() => {}, [cardInfo]);

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
            setPaymentDataAction({
              ...values,
              token,
            });
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
                        type="text"
                        className="profile__card-number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cardNumber}
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
                        type="text"
                        className="profile__card-data"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.expiryDate}
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
      </div>
    </div>
  );
};

export default Profile;
