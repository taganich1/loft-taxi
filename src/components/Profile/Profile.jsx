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

  const cardInfo = useSelector((state) => state.paymentDataReducer);

  console.log(cardInfo.cardNumber);
  const [card, setCard] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvc: "",
  });

  /* console.log(cardTest, "card state");
   const [cardNumberInput, setCardNumberInput] = useState("");
   const [expiryDateInput, setExpiryDateInput] = useState("");
   const [cardNameInput, setCardNameInput] = useState("");
   const [cvcInput, setCvcInput] = useState("");*/

  useEffect(() => {
    dispatch(getPaymentDataAction(token));
    console.log(cardInfo.cardNumber);

    /* handleCardInputs("cardName", cardInfo.cardName);
     handleCardInputs("expiryDate", cardInfo.expiryDate);
     handleCardInputs("cvc", cardInfo.cvc);*/
  }, []);

  useEffect(() => {
    setCard(cardInfo);
  }, [cardInfo]);

  const setPaymentData = (event) => {
    event.preventDefault();
    const test = { ...card };
    console.log(test);
    dispatch(
      setPaymentDataAction({
        ...test,
        token,
      })
    );
  };

  const handleCardInputs = (inputName, value) => {
    setCard((prev) => ({
      ...prev,
      [inputName]: value,
    }));
  };

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
                    value={card.cardNumber}
                    className="profile__card-number"
                    onChange={(e) =>
                      handleCardInputs("cardNumber", e.target.value)
                    }
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
                    value={card.expiryDate}
                    className="profile__card-data"
                    onChange={(e) =>
                      handleCardInputs("expiryDate", e.target.value)
                    }
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
                    value={card.cardName}
                    className="profile__card-name"
                    onChange={(e) =>
                      handleCardInputs("cardName", e.target.value)
                    }
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
                    value={card.cvc}
                    className="profile__card-cvc"
                    onChange={(e) => handleCardInputs("cvc", e.target.value)}
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
