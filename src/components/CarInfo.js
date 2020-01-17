import React from "react"
import "../sass/CarInfo.scss";

export default function CarInfo({car }){
    console.log(car);
    return (
        <div id="CarInfo">
            <p>Bil Info:</p>
            <p>{car.brand}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.fuel}</p>
            <p>{car.gearbox}</p>
            <p>{car.mileage}</p>
            <p>{car.price}</p>
            <input type="button" className="button" value="Spara i intresse listan"/>
        </div>
    );
}