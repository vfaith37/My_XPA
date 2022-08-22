/* eslint-disable no-lone-blocks */
// import React from "react";
import { useState } from "react";

function Location() {
const [location, gLocation] = useState("");
const getLocation = () => {
    const success = (position) => {
        const lat = position.coords.latitude
        const long = position.coords.longitude
    gLocation(lat + "," + long);
    {localStorage.setItem("apiLat", lat)}
    {localStorage.setItem("apiLong", long)}
    };
    const error = () => {
    console.log("Allow location first");
    };
    navigator.geolocation.getCurrentPosition(success, error);
};
    getLocation();
    console.log(location);
    {localStorage.setItem("apiLocation", location)} 
};

export default Location;
