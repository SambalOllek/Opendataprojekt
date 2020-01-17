import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import {fromLonLat} from "ol/proj";

export default function createFeature(car, style){
    console.log("Feature car latitude: " + car.latitude.toFixed(4));
    console.log("Feature car longitude: " + car.longitude.toFixed(4));
    const feature = new Feature({
        geometry: new Point(fromLonLat([car.longitude, car.latitude])),
        name: `${car.brand} ${car.model}`,
        population: 4000,
        rainfall: 500
    });
    feature.setStyle(style);
    return feature;
}