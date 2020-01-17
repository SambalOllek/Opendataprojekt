import React from "react"
import "../sass/CarInfo.scss";

export default function CarInfo({car}){
    console.log(car);
    return (
        <div id="CarInfo">
            <p>HEJ</p>
            <p>Knapp till att spara bilen om man är inloggad</p>
            <p>{car.brand}</p>
            <p>{car.price}</p>
        </div>
    );
}