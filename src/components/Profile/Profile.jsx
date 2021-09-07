import React from "react";
import Header from "../Header/Header";
import "./Profile.styles.scss";
import Back from "../../img/registration-background.png";
import masterCard from "../../img/mastercard-logo.svg";

const Profile = () => {
  return (
    <div className="profile" style={{ backgroundImage: "url(" + Back + ")" }}>
      <div className="profile-container">
        <div className="profile__title">
          <div className="profile__title-text">Профиль</div>
          <div className="profile__title-description">Способ оплаты</div>
        </div>

        <form onSubmit>
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
                    name="number"
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
                    name="data"
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
                    name="cvc"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="profile__card-submit">
            <input type="submit" value="Сохранить" required />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
