//FIX path
import Car from "../entities/Car";
import { GeoCode } from "geo-coder";

export default async function getCars(addToCars) {
    const res = await fetch(`/Opendata-Backend/api/cars`, {
        method: "GET"
    });

    if (res.status !== 204) {
        const data = await res.json();
        let cars = [];
        data.map((car) => cars.push(new Car(car)));
        for (const car of cars) {
            await setCoordinates(car);
            if (car.latitude != undefined && car.longitude != undefined) {
                addToCars(car);
            }
        }
    }



    async function setCoordinates(car) {
        const geoCoder = new GeoCode();
        const res = await geoCoder.geolookup(car.address);
        try {
            car.latitude = res[0].lat;
            car.longitude = res[0].lng;
        } catch {
            console.log("Car-" + car.id + " address is invalid");
        }
    }
}