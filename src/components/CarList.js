import React from "react";
import { deleteCarFromList } from "../logic/userCarList";

export default function CarList({ carList, update, setUpdate, selectCar}) {

 //Visar information om bilarna om man trycker på markören på kartan
    function printCarsInfo(cars) {
        let list = [];
        for (const car of cars) {
            list.push(<li key={car.id} onClick={()=>selectCar(car)}><input id={car.id} type="checkbox" />{car.brand} {car.model} {car.year}</li>);
        }
        return list;
    }

 //tar bort markerade bilar från listan med favoriter
    function removeMarkedCars(cars) {
        for (const car of cars) {
            if(document.getElementById(car.id).checked){
                deleteCarFromList(car.id, update, setUpdate);
            }
        }
    }

    return (
        <div id="carList">
            <ul>
                {printCarsInfo(carList.cars)}
            </ul>
            <input type="button" className="button" value="Ta bort markerade bilar" onClick={() => removeMarkedCars(carList.cars)} />
        </div>
    )
}