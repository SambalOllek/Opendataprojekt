import React from "react"
import "../sass/CarInfo.scss";
import {addCarToList} from "../logic/userCarList";

/**
 * Displays info about selected car and if logged in shows button to add car to users list
 * @param {Car} car car obj to display info about
 * @param {boolean} isLoggedIn boolean if user is logged in or not
 * @param {Function} setUpdate increase update by 1 if changes to users car list was made
 * @param {int} update current update number
 * @returns {JSX.Element} {*}
 * @constructor
 */
export default function CarInfo({car, isLoggedIn, update ,setUpdate}){

    function addCar(car){
        addCarToList(car, update ,setUpdate);
    }

    console.log(car);
    return <div id="CarInfo">
        <p>Bil Info:</p>
            <p>{car.brand}</p>
            <p>{car.model}</p>
            <p>{car.year}</p>
            <p>{car.fuel}</p>
            <p>{car.gearbox}</p>
            <p>{car.mileage}</p>
            <p>{car.price}</p>
            {isLoggedIn && <input type="button" className="button" value="Spara i intresse listan" onClick={()=>addCar(car)}/>}
        </div>
}

