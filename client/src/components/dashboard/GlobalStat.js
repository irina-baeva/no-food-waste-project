import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as countryData from "./data/countries.json";

function GlobalStat() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 2,
    width: "100vw",
    height: "100vh",
  });
  // const [selectedPark, setSelectedPark] = useState(null);

  // useEffect(() => {
  //   const listener = (e) => {
  //     if (e.key === "Escape") {
  //       setSelectedPark(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);
  // }, []);
  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/irsidev/ck9kagpcu1lht1iqortip975m"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {countryData.features.map((country) => (
          <Marker
            key="country.properties.country"
            latitude={parseInt(country.properties.latitude)}
            longitude={parseInt(country.properties.longitude)}
          >
            <p>country</p>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
  );
}

export default GlobalStat;
