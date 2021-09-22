import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { addressListReducer } from "../../redux/reducers/addressListReducer";
import {
  getAddressListAction,
  setPaymentDataAction,
} from "../../redux/actions/actions";

const Map = () => {
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authReducer.token);
  /*  const getCardNumber = useSelector(
      (state) => state.paymentDataReducer.cardNumber
    );
    const getCardName = useSelector((state) => state.paymentDataReducer.cardName);
    const getCvc = useSelector((state) => state.paymentDataReducer.cvc);
    const getExpiryDate = useSelector(
      (state) => state.paymentDataReducer.expiryDate
    );*/
  const addresses = useSelector((state) => state.addressListReducer.addresses);
  const id = useSelector((state) => state.paymentDataReducer.id);
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [grab, setGrab] = useState(false);

  const mapContainer = useRef(null);

  useEffect(() => {
    dispatch(getAddressListAction(token));
    console.log(addresses, "vot adressis vot oni da");
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFnYW4xIiwiYSI6ImNrc3h1YmhkbDFhZHgycXB1ZDFlNDJ2ZzAifQ.1MOdxAoxX73tQKU7ffzgeA";
    let MapGL = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [36.69153636313456, 49.837295429283245],
      zoom: 13,
    });
    return () => {
      <MapGL />;
    };
  }, []);

  const form = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="map-container">
      <div className="map-wrapper" style={{ maxWidth: "100vw" }}>
        <div
          className={grab ? "map active" : "map"}
          data-testid="map"
          ref={mapContainer}
          style={{ position: "absolute" }}
          onMouseDown={() => setGrab(true)}
          onMouseUp={() => setGrab(false)}
        />
      </div>
      <div className="map-routes" style={{ position: "relative" }}>
        <form action="">
          <div className="form-group">
            <label>Откуда:</label>
            <select
              name="addresses"
              className="form-control"
              onChange={setDeparture}
            >
              {addresses &&
                addresses.map((address) => (
                  <option value={address}>{address}</option>
                ))}
            </select>
            <label>Куда:</label>
            <select name="addresses" className="form-control">
              {addresses &&
                addresses.map((address) => <option>{address}</option>)}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Map;
