//Kartan som används
//import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import markerIcon from './sass/Addons/markerIcon.png';



import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util,    //objects
  geocoder
} from "react-openlayers";
import React from 'react';
import "./sass/Map.scss";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";

export default function Maps(props) {


  return <div id="map">
    <Map view={{ center: [59.334591, 18.063240], zoom: 4 }}>
      <Layers>
        <layer.Tile />
      </Layers>
      <Overlays>
      </Overlays>
      <Controls attribution={false} zoom={true}>
        <control.Rotate />
        <control.Zoom />
      </Controls>

    </Map>
  </div>
}

//<interaction.Select style={selectedMarkerStyle} />
//const coordinatesArray = [
//  {
//    longitude: 59.334591,
//    latitude: 18.063240
//  },
//  {
//    longitude: 59.334591,
//    latitude: 18.063240
//  },
//  {
//    longitude: 59.334591,
//    latitude: 18.063240
//  }]
//  ;
//
//const geoMarkerArray = coordinatesArray.map(coordinates => {
//  return new Feature({
//    type: "geoMarker",
//    geometry: new Point(ol.proj.fromLonLat([coordinates.longitude, coordinates.latitude]))
//  })
//});
//
//let styles = {
//  "geoMarker": new Style({
//    image: new Icon({
//      src: markerIcon
//    })
//  })
//};