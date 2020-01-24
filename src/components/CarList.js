import React from "react";
import { deleteCarFromList } from "../logic/userCarList";

export default function CarList({ carList, update, setUpdate, selectCar}) {

    let markedCars = [];
 //Visar information om bilarna om man trycker på markören på kartan
    function printCarsInfo(cars) {
        let list = [];
        for (const car of cars) {
            list.push(<li key={car.id} onClick={()=>selectCar(car)}><input id={car.id} type="checkbox" />{car.brand} {car.model} {car.year}</li>);
        }
        return list;
    }
    //markerar bilarna på kartan efter koordinater och lägger till dem i listan med favoriter
    function mark(id) {
        const index = markedCars.find((carId) => id === carId);
        if (!index) {
            markedCars.push(id);
        } else {
            markedCars.splice(index, 1);
        }
    }
 //tar bort markerade bilar från listan med favoriter
    function removeMarkedCars() {
        for (const id of markedCars) {
            deleteCarFromList(id, update, setUpdate);
        }
    }

    return (
        <div id="carList">
            <ul>
                {printCarsInfo(carList.cars)}
            </ul>
            <input type="button" className="button" value="Ta bort markerade bilar" onClick={() => removeMarkedCars()} />
        </div>
    )
}