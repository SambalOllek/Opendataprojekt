import React from 'react';
import "../sass/Map.scss";
import "../sass/CarInfo.scss";

import { initMap, addLayer } from "../logic/map";
import { fromLonLat } from "ol/proj";

let map;

export default function Map({ cars, selectCar }) {

    React.useEffect(() => {
        map = initMap(selectCar);
    }, []);
    React.useEffect(() => {
        addLayer(map, cars);
    }, [cars])


    return (
        <div id="map">
            <div id="overlay">
            </div>
        </div>


    )
}

export function setLocation(cords) {
    map.getView().setCenter(fromLonLat(cords))
}