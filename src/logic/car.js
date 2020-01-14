//FIX path
import Car from "../entities/Car";

export default async function getCars(setCars) {
    const res = await fetch(`http://localhost:8080/Opendata-Backend/api/cars`, {
        method: "GET"
    });
    const data = await res.json();
    let cars = [];
    data.map((car) => cars.push(new Car(car)));
    setCars(cars);
}