import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";

export default function createFeature(car, style){
    car.latitude = typeof car.latitude === "string" ? car.latitude.toFixed(4) : car.latitude;
    car.longitude = typeof car.longitude === "string" ? car.longitude.toFixed(4) : car.longitude;

    const feature = new Feature({
        geometry: new Point(fromLonLat([car.longitude, car.latitude])),
        car: car
    });
    feature.setStyle(style);
    return feature;
}