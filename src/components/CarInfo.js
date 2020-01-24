import React from "react"
import "../sass/CarInfo.scss";
import { addCarToList } from "../logic/userCarList";

/**
 * Displays info about selected car and if logged in shows button to add car to users list
 * @param {Car} car car obj to display info about
 * @param {boolean} isLoggedIn boolean if user is logged in or not
 * @param {Function} setUpdate increase update by 1 if changes to users car list was made
 * @param {int} update current update number
 * @returns {JSX.Element} {*}
 * @constructor
 */
export default function CarInfo({ car, isLoggedIn, update, setUpdate }) {
    //lägger till en bil på kartan med hjälp av skrapning med attributerna som visas nedan
    function addCar(car) {
        addCarToList(car, update, setUpdate);
    }

    console.log(car);
    return (
        <div id="CarInfo">
            <p>Bil Info:</p>
            <br/>
            <h4>Märke</h4>
            <p>{car.brand}</p>
            <br/>
            <h4>Modell</h4>
            <p>{car.model}</p>
            <br/>
            <h4>ÅrsModell</h4>
            <p>{car.year}</p>
            <br/>
            <h4>Bränsle</h4>
            <p>{car.fuel}</p>
            <br/>
            <h4>Växellåda</h4>
            <p>{car.gearbox}</p>
            <br/>
            <h4>Antal mil</h4>
            <p>{car.mileage}</p>
            <br/>
            <h4>Pris</h4>
            <p>{car.price}</p>
            <br/>
            <h4>Länk</h4>
            <p><a target="_blank" rel="noopener noreferrer" href={car.link}>Gå till sidan</a></p>
            <br/>
            {isLoggedIn &&
                <input type="button" className="button" value="Spara i intresse listan" onClick={() => addCar(car)} />}
        </div>
    )
}

