import styled from "styled-components";
import { useState, useEffect } from "react";
import mapboxgl, { Marker, Popup } from "mapbox-gl";
import { Fragment } from "react";
import cities from "../../lib/city/city.list.json";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY29jdHUiLCJhIjoiY2wxb24waW05MG1pYjNrcGQ5eTE2cnI4cSJ9.HlZtH4wm3hLUEQspGSeT8w";

function Maps() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/coctu/cl1nxxk8m000514nzedn3ajqb",
      center: [105.841171, 21.0245],
      zoom: 2,
    });
  
  });


  return (
    <Fragment>
      <Map id="map">
        <Marker id="marker" />
      </Map>
    </Fragment>
  );
}
export default Maps;

const Map = styled.div`
  flex: 1;
  width: 100vw;
  height: 100vh;
`;
Marker = styled.div`
  background-image: url("mapbox-icon.png");
  background-size: cover;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
`;
