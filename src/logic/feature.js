import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import {fromLonLat} from "ol/proj";

export default function createFeature(car, marker){
    car.latitude = car.latitude.toFixed(4)
    car.longitude = car.longitude.toFixed(4)
    console.log("Feature car latitude: " + car.latitude);
    console.log("Feature car longitude: " + car.longitude);
    const feature = new Feature({
        geometry: new Point(fromLonLat([car.longitude, car.latitude])),
        name: `${car.brand} ${car.model}`,
        price: car.price,
        brand: car.brand
    });
    feature.setStyle(marker);
    return feature;
}