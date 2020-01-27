//FIX path
import Car from "../entities/Car";
import { GeoCode } from "geo-coder";

export default async function getCars(setCars) {
    const res = await fetch(`/Opendata-Backend/api/cars`, {
        method: "GET"
    });

    if (res.status !== 204) {
        const data = await res.json();
        let cars = data.map((car) => new Car(car));

        let completed = [];
        for (const car of cars) {
            const success = await setCoordinates(car);

            if(success) {
                completed = [...completed, car];
                setCars(completed);
            }
        }
    }

    async function setCoordinates(car) {
        const geoCoder = new GeoCode();
        await new Promise(r => setTimeout(r, 1000));//FÖR DEMO
        const res = await geoCoder.geolookup(car.address);
        try {
            car.latitude = res[0].lat;
            car.longitude = res[0].lng;
            return true;
        } catch {
            console.log("Car-" + car.id + " address is invalid");
            return false;
        }
    }
}