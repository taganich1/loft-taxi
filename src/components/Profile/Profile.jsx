import React, { useEffect, useRef, useState } from "react";
import "./Profile.styles.scss";
import Back from "../../img/registration-background.png";
import masterCard from "../../img/mastercard-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentDataAction,
  setPaymentDataAction,
} from "../../redux/actions/actions";
import { authReducer } from "../../redux/reducers/authReducer";

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);

  const { id, cardName, cvc, cardNumber, expiryDate } = useSelector(
    (state) => state.paymentDataReducer
  );

  const [cardNumberInput, setCardNumberInput] = useState(cardNumber);
  const [expiryDateInput, setExpiryDateInput] = useState(expiryDate);
  const [cardNameInput, setCardNameInput] = useState(cardName);
  const [cvcInput, setCvcInput] = useState(cvc);
  const [loading, setLoading] = useState(false);

  const setPaymentData = (event) => {
    event.preventDefault();
    dispatch(
      setPaymentDataAction({
        cardNumberInput,
        expiryDateInput,
        cardNameInput,
        cvcInput,
        token,
      })
    );
  };

  useEffect(() => {
    dispatch(getPaymentDataAction(token));
  }, [dispatch]);

  return (
    <div className="profile" style={{ backgroundImage: "url(" + Back + ")" }}>
      <div className="profile-container">
        <div className="profile__title">
          <div className="profile__title-text">Профиль</div>
          <div className="profile__title-description">Способ оплаты</div>
        </div>
        {loading ? <div>...Loading</div> : null}
        <form onSubmit={setPaymentData}>
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
                    value={cardNumberInput}
                    className="profile__card-number"
                    onChange={(e) => setCardNumberInput(e.target.value)}
                    name="card-number"
                    required
                  />
                </label>
              </div>
              <div className="card__expires">
                <label htmlFor="">
                  Срок действия карты*
                  <br />
                  <input
                    type="text"
                    value={expiryDateInput}
                    className="profile__card-data"
                    onChange={(e) => setExpiryDateInput(e.target.value)}
                    name="expiry-date"
                    required
                  />
                </label>
              </div>
            </div>

            <div className="profile__name">
              <div className="card__owner">
                <label htmlFor="">
                  Имя владельца *
                  <br />
                  <input
                    type="text"
                    value={cardNameInput}
                    className="profile__card-name"
                    onChange={(e) => setCardNameInput(e.target.value)}
                    name="number"
                    required
                  />
                </label>
              </div>
              <div className="card__cvc">
                <label htmlFor="">
                  CVC*
                  <br />
                  <input
                    type="text"
                    value={cvcInput}
                    className="profile__card-cvc"
                    onChange={(e) => setCvcInput(e.target.value)}
                    name="cvc"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="profile__card-submit">
            <input type="submit" value="Сохранить" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
