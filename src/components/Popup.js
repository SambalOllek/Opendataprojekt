import React from "react"
import initOverlay from "../logic/popup";



export default function Popup({map, selectCar}){
    React.useEffect(()=>{
        initOverlay();
    })
    return <div id="popup"></div>
}