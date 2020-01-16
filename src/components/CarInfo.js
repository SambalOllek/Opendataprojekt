import React from "react"

export default function CarInfo({car}){
    return (
        <div id="CarInfo">
            <p>HEJ</p>
            <p>{car.brand}</p>
            <p>{car.price}</p>
        </div>
    );
}