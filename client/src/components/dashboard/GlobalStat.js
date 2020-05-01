import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as countryData from "./data/data_countries_copy.json";

function GlobalStat() {
  const [viewport, setViewport] = useState({
    latitude: 0,
    longitude: 0,
    zoom: 2,
    width: "100vw",
    height: "100vh",
  });
  const [selectedCountry, setSelectedCountry] = useState(null);

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
            key="country.properties.id"
            latitude={parseInt(country.geometry.coordinates[1])}
            longitude={parseInt(country.geometry.coordinates[0])}
          >
            <button
              className="marker-btn"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCountry(country);
              }}
            >
              <img className="icon" src="./garbage.png"></img>
            </button>
          </Marker>
        ))}
        {selectedCountry ? (
          <Popup
            latitude={selectedCountry.geometry.coordinates[1]}
            longitude={selectedCountry.geometry.coordinates[0]}
            onClose={() => {
              setSelectedCountry(null);
            }}
          ></Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}

export default GlobalStat;
