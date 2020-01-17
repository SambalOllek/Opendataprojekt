import React from 'react';
import "../sass/Map.scss";
import "../sass/CarInfo.scss";

import {initMap, addLayer} from "../logic/map";
import Popup from "./Popup";

import Map from 'ol/Map';
import View from 'ol/View';
import {fromLonLat} from "ol/proj";
import {Tile as TileLayer} from "ol/layer";
import {Style, Icon} from "ol/style";
import OSM from "ol/source/OSM";

let map;

export default function OlMap({cars, selectCar}) {

    React.useEffect(()=>{
        map = initMap(selectCar);
    },[]);
    React.useEffect(()=>{
        addLayer(map, cars);
    },[cars])


    return (
        <div id="map">
            <Popup map={map} selectCar={selectCar}></Popup>
        </div>
    )
}

export function setLocation(cords) {
    console.log(cords);
    map.getView().setCenter(fromLonLat(cords))
}