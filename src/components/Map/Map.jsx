import React from "react";
import mapboxgl from "mapbox-gl";
import "./Map.styles.scss";

class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGFnYW4xIiwiYSI6ImNrc3h1YmhkbDFhZHgycXB1ZDFlNDJ2ZzAifQ.1MOdxAoxX73tQKU7ffzgeA";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [36.69153636313456, 49.837295429283245],
      zoom: 13,
    });
  }

  render() {
    return (
      <div className="map-wrapper">
        <div className="map" data-testid="map" ref={this.mapContainer} />
      </div>
    );
  }
}

export default Map;
