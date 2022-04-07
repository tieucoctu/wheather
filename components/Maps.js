import styled from "styled-components";
import { useState, useEffect, memo } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1IjoiY29jdHUiLCJhIjoiY2wxb24waW05MG1pYjNrcGQ5eTE2cnI4cSJ9.HlZtH4wm3hLUEQspGSeT8w';

function Maps() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/coctu/cl1nxxk8m000514nzedn3ajqb",
      center: [105.841171, 21.0245],
      zoom: 2,
    });
  }, []);

  return <Map id="map"></Map>;
}
export default memo(Maps);
const Map = styled.div`
  flex: 1;
  width: 800px;
  height: 700px;
`;
