import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "./Map.styles.scss";
import Header from "../Header/Header";

const Map = () => {
  const mapContainer = useRef(null);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFnYW4xIiwiYSI6ImNrc3h1YmhkbDFhZHgycXB1ZDFlNDJ2ZzAifQ.1MOdxAoxX73tQKU7ffzgeA";
    let MapGL = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [36.69153636313456, 49.837295429283245],
      zoom: 13,
    });
    return () => {


        <MapGL />
    };
  }, []);

  return (
    <div className="map-wrapper">
      <div className="map" data-testid="map" ref={mapContainer} />
    </div>
  );
};

export default Map;
