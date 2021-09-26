import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAddressListAction } from "../../redux/actions/actions";
import { Link } from "react-router-dom";

const Map = () => {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [grab, setGrab] = useState(false);
  const defaultOptionValue = "";
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authReducer.token);
  const cardData = useSelector((state) => state.paymentDataReducer.cvc);
  const addresses = useSelector((state) => state.addressListReducer.addresses);
  const mapContainer = useRef(null);

  /* const setRoute = () => {
     if (departure && arrival) {
       const coordinates = [
         [36.69153636313456, 49.837295429283245],
         [36.232623094524115, 49.98716047375268],
       ];
       const drawRoute = (map, coordinates) => {
         map.flyTo({
           center: coordinates[0],
           zoom: 10,
         });
 
         map.addLayer({
           id: "route",
           type: "line",
           source: {
             type: "geojson",
             data: {
               type: "Feature",
               properties: {},
               geometry: {
                 type: "LineString",
                 coordinates,
               },
             },
           },
           layout: {
             "line-join": "round",
             "line-cap": "round",
           },
           paint: {
             "line-color": "#ffc617",
             "line-width": 8,
           },
         });
       };
       console.log(MapGL);
       drawRoute(MapGL, [
         [36.69153636313456, 49.837295429283245],
         [36.232623094524115, 49.98716047375268],
       ]);
     }
   };*/

  useEffect(() => {
    dispatch(getAddressListAction(token));

    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFnYW4xIiwiYSI6ImNrc3h1YmhkbDFhZHgycXB1ZDFlNDJ2ZzAifQ.1MOdxAoxX73tQKU7ffzgeA";
    let MapGL = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [36.69153636313456, 49.837295429283245],
      zoom: 13,
    });

    setTimeout(() => {
      if (!departure && !arrival) {
        /* const coordinates = [
           [36.69153636313456, 49.837295429283245],
           [36.232623094524115, 49.98716047375268],
         ];*/
        const drawRoute = () => {
          MapGL.flyTo({
            center: [36.69153636313456, 49.837295429283245],
            zoom: 10,
          });

          MapGL.addLayer({
            id: "route",
            type: "line",
            source: {
              type: "geojson",
              data: {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "LineString",
                  coordinates: [
                    [36.69153636313456, 49.837295429283245],
                    [36.232623094524115, 49.98716047375268],
                  ],
                },
              },
            },
            layout: {
              "line-join": "round",
              "line-cap": "round",
            },
            paint: {
              "line-color": "#ffc617",
              "line-width": 8,
            },
          });
        };
        setTimeout(() => {
          drawRoute();
        }, 1000);
      }
    }, 5000);
    return () => <MapGL />;
  }, []);

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
        {cardData ? (
          <form action="">
            <div className="form-group">
              <div className="addresses__departure">
                <label>Откуда:</label>
                <select
                  name="addresses"
                  className="form-control"
                  onChange={(e) => {
                    setDeparture(e.target.value);
                  }}
                >
                  <option>{defaultOptionValue}</option>
                  {addresses &&
                    addresses.map(
                      (address) =>
                        address !== arrival && (
                          <option key={address} value={address}>
                            {address}
                          </option>
                        )
                    )}
                </select>
              </div>
              <div className="addresses__arrival">
                <label>Куда:</label>
                <select
                  name="addresses"
                  className="form-control"
                  onChange={(e) => {
                    setArrival(e.target.value);
                  }}
                >
                  <option>{defaultOptionValue}</option>
                  {addresses &&
                    addresses.map(
                      (address, i) =>
                        address !== departure && (
                          <option key={i} value={address}>
                            {address}
                          </option>
                        )
                    )}
                </select>
              </div>
            </div>
          </form>
        ) : (
          <div>
            <div className="map-routes__error">
              Пожалуйста перейдите в профиль и заполните платежные данные, чтобы
              пользоваться такси.
            </div>
            <Link className="map-routes__error__link" to="/profile">
              Перейти в профиль
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Map;
