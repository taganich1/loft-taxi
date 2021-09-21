import React, { useEffect, useState } from "react";
import "./Profile.styles.scss";
import Back from "../../img/registration-background.png";
import masterCard from "../../img/mastercard-logo.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getPaymentDataAction,
  setPaymentDataAction,
} from "../../redux/actions/actions";
import { authReducer } from "../../redux/reducers/authReducer";
import mapboxgl from "mapbox-gl";

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const id = useSelector((state) => state.paymentDataReducer.id);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cardName, setCardName] = useState("masterCard");
  const [cvc, setCvc] = useState("");

  const setPaymentData = (event) => {
    event.preventDefault();
    dispatch(
      setPaymentDataAction({ cardNumber, expiryDate, cardName, cvc, token })
    );
  };
  useEffect(() => {
    dispatch(getPaymentDataAction({ cardNumber }));
  }, [token]);

  return (
    <div className="profile" style={{ backgroundImage: "url(" + Back + ")" }}>
      <div className="profile-container">
        <div className="profile__title">
          <div className="profile__title-text">Профиль</div>
          <div className="profile__title-description">Способ оплаты</div>
        </div>

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
                    className="profile__card-number"
                    onChange={(e) => setCardNumber(e.target.value)}
                    name="card-number"
                    required
                  />
                </label>
              </div>
              <div className="card__expires">
                <label htmlFor="">
                  <br />
                  <input
                    type="text"
                    className="profile__card-data"
                    onChange={(e) => setExpiryDate(e.target.value)}
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
                    className="profile__card-name"
                    onChange={(e) => setCardName(e.target.value)}
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
                    className="profile__card-cvc"
                    onChange={(e) => setCvc(e.target.value)}
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
