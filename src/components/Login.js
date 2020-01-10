import React from "react";

import "../sass/Login.scss";
import {CheckUser} from "./authentication.js";
import {NewUser} from "./authentication.js"


export function Login(props) {
    async function onLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const isLoggedIn = await CheckUser(username, password);
        if(isLoggedIn === true) {
            closeModal();
        } else {
            setShowError("incorrect");
            return <p id="incorrect">Fel inloggningsinformation</p>
        }
    }
//If username/password not exist, modal close, else = message show up
    function register(){
        const rusername = document.getElementById("username").value;
        const rpassword = document.getElementById("password").value;
        const newRegiser = NewUser(rusername, rpassword);
        if(newRegiser === true){
            closeModal();
        }else{
            setShowError("username or password exist")
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

    const [ShowError, setShowError] = React.useState("");
    

    return <div className="Login">
        <button id="Login" onClick={openModal}>Login</button>
        <div className={modal}>
            <div className="modal-background" />
                <div className="modal-content">
                    <input className="input" id="username" type="text" placeholder="Username" />
                    <input className="input" id="password" type="password" placeholder="Password" />
                    <p>{ShowError}</p>
                    <button type="button" id="ClickLogin" onClick={onLogin}>Login</button> <button type="button" id="ClickLogin"onClick={register}>Register</button>
                    <button type="button" id="ClickLogin" onClick={""}>Log in with github</button>
                </div>
                <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
            </div>
    </div>
}
