import React from "react";

import "../sass/Login.scss";
import {CheckUser} from "./authentication.js";
import {NewUser} from "./authentication.js"


export default function Login(props) {
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
    async function register(){
        const rusername = document.getElementById("username").value;
        const rpassword = document.getElementById("password").value;
        const newRegiser = await NewUser(rusername, rpassword);
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
                    <button type="button" className="ClickLogin" onClick={onLogin}>Login</button> <button type="button" className="ClickLogin"onClick={register}>Register</button> <a href="https://github.com/login/oauth/authorize?client_id=0b4be5c42fd4aad65f85">Log in github</a>
                </div>
                <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
            </div>
    </div>
}
