import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import axios from "axios";

const Map = (props) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    width: "50vw",
    height: "50vh",
    zoom: 10,
  });

  // useEffect(() => {
  //   axios({
  //     url: "/local_bars/coordinate",
  //     method: "POST",
  //     data: { idArray: props.searchId },
  //   }).then((res) => console.log(res.data));
  // }, [props.searchId]);
  console.log(props.coordinate);
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoiYnJhY2Ftb24iLCJhIjoiY2ttbWMwcWYxMWpsdjJvczJlNHllYW94aCJ9.uIQoCpsbD0DytIkcTduDJg"
        }
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGL>
    </div>
  );
};

export default Map;
