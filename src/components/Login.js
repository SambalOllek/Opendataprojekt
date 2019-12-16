import React from "react";

import "../sass/Login.scss";
import {CheckUser} from "./Service.js";


//När man klickar på knappen så öppnas en modal
export function Login(props) {
    async function onLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const isLoggedIn = await CheckUser(`Basic ${btoa(username + ":" + password)}`)
        if(isLoggedIn === true) {
            props.Verified();
        } else {
            console.log("Access Denied")
            return <p id="incorrect">Fel inloggningsinformation</p>
        }
    }
    const [ShowModal, setShowModal] = React.useState(false);
    let modal = "modal";
    if (ShowModal === true) {
        modal = "modal is-active";
    }


    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }


    return <div className="Login">
        <button id="Login" onClick={openModal}>Login</button>
        <div className={modal}>
            <div className="modal-background">
                <div className="modal-content">
                    <input className="input" id="usn" type="text" placeholder="Username" />
                    <input className="input" id="psw" type="text" placeholder="Password" />
                    <button type="button" id="ClickLogin">Login</button> <button type="button" id="ClickLogin">Register</button>
                </div>
                <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
            </div>
        </div>
    </div>
}
