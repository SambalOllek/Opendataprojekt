import React from "react";

import "../sass/Login.scss";
import { getToken, registerUser, verifyToken } from "./authentication.js";

//Kollar om de inmatade värden matchar med det i databasen
export default function Login({ setIsLoggedIn }) {
    async function onLogin() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        if (await getToken(username, password)) {
            closeModal();
            alert("User Logged In!");
            setIsLoggedIn(true);
        } else {
            setShowError("Incorrect username or password!");
            alert("Incorrect username or password!")
        }
    }

    //If username/password does not exist, modal close, else = message show up
    async function register() {
        const rusername = document.getElementById("username").value;
        const rpassword = document.getElementById("password").value;
        if (await registerUser(rusername, rpassword)) {
            alert("New User Registered!");
        } else {
            setShowError("Username entered already exists");
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
                <p className="Error" >{ShowError}</p>
                <button type="button" className="ClickLogin" onClick={onLogin}>Login</button>
                <button type="button" className="ClickLogin" onClick={register}>Register</button>
                <a href="https://github.com/login/oauth/authorize?client_id=0b4be5c42fd4aad65f85">Log in github</a>
            </div>
            <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
        </div>
    </div>
}
