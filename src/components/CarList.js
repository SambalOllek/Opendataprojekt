import React from "react";

export default function CarList({carList}){

    function printCarsInfo(cars){
        let list = [];
        for(const car of cars){
            list.push(<li><input id={car.id} type="checkbox"/>{car.brand} {car.model}</li>);
        }
    }

    function removeMarkedCars(){

    }

    return (
        <div id="carList">
            <ul>
                {printCarsInfo(carList)}
            </ul>
            <input type="button" className="button" value="Ta bort markerade bilar" onClick={()=>removeMarkedCars()}/>
        </div>
    )
}