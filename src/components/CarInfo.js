import React from "react"
import "../sass/CarInfo.scss";

export default function CarInfo({feature}){
    const car = feature.values_.car
    console.log(feature.values_.car)

    
    return <div className="grid">
    <div id="CarInfo">
        <p>Bil Info:</p>
        <input type="button" className="button" value="Spara i intresse listan"/>
        </div>
    </div>

}