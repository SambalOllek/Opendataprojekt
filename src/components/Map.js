//Kartan som används
import React from 'react';
import "../sass/Map.scss";

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

const $ = window.$;

let karta;

export default function map() {

    const coordinatesArray = [
        {
            longitude: 59.334591,
            latitude: 18.063240
        },
        {
            longitude: 56.523961,
            latitude: 14.483262
        }];

    let iconStyle = new Style({
        image: new Icon({
            anchor: [0.5, 0.96],
            src: './markerIcon.png'
        })
    });

    const geoMarkerArray = coordinatesArray.map(coordinates => {
        let marker = new Feature({
            geometry: new Point(fromLonLat([coordinates.latitude, coordinates.longitude])),
            name: 'Null Island',
            population: 4000,
            rainfall: 500
        });
        marker.setStyle(iconStyle);
        return marker;
    });

    let vectorSource = new VectorSource({
        features: [...geoMarkerArray]
    });
    let vectorLayer = new VectorLayer({
        source: vectorSource
    });

    let rasterLayer = new TileLayer({
        source: new OSM()
    });

    karta = new Map({
        layers: [rasterLayer, vectorLayer],
        target: document.getElementById('map'),
        view: new View({
            center: fromLonLat([14.8121, 56.8774]),
            zoom: 8
        })
    });

}
export function setLocation(cords) {
    console.log(cords);
    karta.getView().setCenter(fromLonLat(cords))

}
 