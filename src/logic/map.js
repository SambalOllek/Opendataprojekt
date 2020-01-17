import {Tile as TileLayer} from "ol/layer";
import OSM from "ol/source/OSM";
import {Icon, Style} from "ol/style";
import createFeature from "./feature";
import Map from "ol/Map";
import vectorLayer from "./vectorLayer";
import View from "ol/View";
import {fromLonLat} from "ol/proj";

let map;

export function initMap(selectCar){

    let rasterLayer = new TileLayer({
        source: new OSM()
    });

    map = new Map({
        layers: [rasterLayer],
        target: document.getElementById('map'),
        view: new View({
            center: fromLonLat([14.8121, 56.8774]),
            zoom: 8
        })
    });

    map.on('click', function (evt) {
        let feature = map.forEachFeatureAtPixel(evt.pixel,
            function (feature) {
                return feature;
            });
        if (feature) {
            selectCar(feature);
        }
    });

    return map;
}

export function addLayer(map, cars){
    let iconStyle = new Style({
        image: new Icon({
            anchor: [0.5, 0.96],
            src: './markerIcon.png'
        })
    });

    const features = cars.map(car => {
        return createFeature(car, iconStyle);
    });

    map.addLayer(vectorLayer(features));
}