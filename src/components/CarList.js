import React from "react";

export default function CarList({carList}){

    function printCarsInfo(cars){
        let list = [];
        for(const car of cars){
            list.push(<li>{car.brand} {car.model}</li>);
        }
    }

    return (
        <div id="carList">
            <ul>
                {printCarsInfo(carList)}
            </ul>
        </div>
    )
}