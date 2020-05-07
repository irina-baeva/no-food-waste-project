import React, { useState, useEffect, Fragment } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as countryData from "./data/data_countries.json";
import Drawer from "./Drawer";

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
  //       setSelectedCountry(null);
  //     }
  //   };
  //   window.addEventListener("keydown", listener);
  // }, []);
  return (
    <div className="map">
      <Fragment>
        <Drawer />
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/irsidev/ck9op03tm1mwu1ilehmo42ozl"
          onViewportChange={(viewport) => {
            setViewport(viewport);
          }}
        >
          {countryData.features.map((country, index) => (
            <Marker
              key={index}
              latitude={country.geometry.coordinates[1]}
              longitude={country.geometry.coordinates[0]}
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
            >
              <h3>{selectedCountry.properties.name}</h3>
              <div>
                Food losses: {selectedCountry.properties.value_waste} tonnes
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </Fragment>
    </div>
  );
}

export default GlobalStat;
