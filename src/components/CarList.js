import React from "react";
import { deleteCarFromList } from "../logic/userCarList";

export default function CarList({ carList }) {

    let markedCars = [];

    function printCarsInfo(cars) {
        let list = [];
        for (const car of cars) {
            list.push(<li><input type="checkbox" onClick={() => mark(car.id)} />{car.brand} {car.model}</li>);
        }
        return list;
    }

    function mark(id) {
        const index = markedCars.find((carId) => id === carId);
        if (!index) {
            markedCars.push(id);
        } else {
            markedCars.splice(index, 1);
        }
    }
 //tar bort markerade bilar
    function removeMarkedCars() {
        for (const id of markedCars) {
            deleteCarFromList(id);
        }
    }

    return (
        <div id="carList">
            <ul>
                {printCarsInfo(carList)}
            </ul>
            <input type="button" className="button" value="Ta bort markerade bilar" onClick={() => removeMarkedCars()} />
        </div>
    )
}