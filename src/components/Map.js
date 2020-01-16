//Kartan som används
import React from 'react';
import "../sass/Map.scss";
import "../sass/CarInfo.scss";

import Map from 'ol/Map';
import View from 'ol/View';
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";
import { Vector as VectorLayer, Tile as TileLayer } from "ol/layer";
import { Vector as VectorSource, TileJSON } from "ol/source";
import { Style, Icon } from "ol/style";
import Overlay from "ol/Overlay";
import OSM from "ol/source/OSM";
import createFeature from "../logic/feature";
import vectorLayer from "../logic/vectorLayer";
import addOverlay from "../logic/popupOverlay";

let map

export default function OlMap({cars, selectCar}) {

    let iconStyle = new Style({
        image: new Icon({
            anchor: [0.5, 0.96],
            src: './markerIcon.png'
        })
    });

    const geoMarkerArray = cars.map(car => {
        return createFeature(car, iconStyle);
    });

    let rasterLayer = new TileLayer({
        source: new OSM()
    });

    map = new Map({
        layers: [rasterLayer, vectorLayer(geoMarkerArray)],
        target: document.getElementById('map'),
        view: new View({
            center: fromLonLat([14.8121, 56.8774]),
            zoom: 8
        })
    });

   addOverlay(map, selectCar);

    return (
        <div id="map">
            <div id="popup"/>
        </div>
    )
}

export function setLocation(cords) {
    console.log(cords);
    map.getView().setCenter(fromLonLat(cords))
}
