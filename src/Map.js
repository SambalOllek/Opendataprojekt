//Kartan som används
//import Map from 'ol/Map';
import View from 'ol/View';
import {
  interaction, layer, custom, control, //name spaces
  Interactions, Overlays, Controls,     //group
  Map, Layers, Overlay, Util,    //objects
  geocoder
} from "react-openlayers";
import React from 'react';
import "./sass/Map.scss";
import "ol/ol.css";
import markerIcon from "./sass/Addons/markerIcon.png";
import Feature from "ol/Feature";
import Fill from "ol/style/Fill";
import TileLayer from "ol/layer/Tile";
import Icon from "ol/style/Icon";
import Point from "ol/geom/Point";
import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import CircleStyle from "ol/style/Circle";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";

export default function Maps(props) {

declare var ol;
  
const coordinatesArray = [
  {
    longitude: 59.334591,
    latitude: 18.063240
  },
  {
    longitude: 59.334591,
    latitude: 18.063240
  },
  {
    longitude: 59.334591,
    latitude: 18.063240
  }]
  ;

const geoMarkerArray = coordinatesArray.map(coordinates => {
  return new Feature({
    type: "geoMarker",
    geometry: new Point(ol.proj.fromLonLat([coordinates.longitude, coordinates.latitude])),
    coordinates: coordinates
  })
});

let styles = {
  "geoMarker": new Style({
    image: new Icon({
      src: markerIcon
    })
  })
};

return <> <div id="map">
    <Map view={{ center: [56.87767, 14.80906], zoom: 5 }}>
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
{/* <interaction.Select style={selectedMarkerStyle} /> */}
</>
}
