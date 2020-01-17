//Kartan som används
import React from 'react';
import "../sass/Map.scss";
import "../sass/CarInfo.scss";

import View from 'ol/View';
import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";
import { Vector as VectorLayer, Tile as TileLayer } from "ol/layer";
import { Vector as VectorSource, TileJSON } from "ol/source";
import { Style, Icon } from "ol/style";
import OSM from "ol/source/OSM";
import createFeature from "../logic/feature";
import vectorLayer from "../logic/vectorLayer";
import addOverlay from "../logic/popupOverlay";

import {
    interaction, layer, custom, control, //name spaces
    Interactions, Overlays, Controls,     //group
    Map, Layers, Overlay, Util    //objects
} from "react-openlayers";

let map

export default function OlMap({cars, selectCar}) {

    let marker = new custom.style.MarkerStyle("./markerIcon.png");

    const geoMarkerArray = cars.map(car => {
        return createFeature(car);
    });


   addOverlay(map, selectCar);

    return (
        <Map>
            <Layers>
                <layer.Tile/>
                <layer.Vector source={geoMarkerArray} style={marker.style} zIndex="1"/>
            </Layers>
        </Map>
    )
}

export function setLocation(cords) {
    console.log(cords);
    map.getView().setCenter(fromLonLat(cords))
}
