import React from "react";
import LogCSS from "./CSS/Login.css"


//När man klickar på knappen så öppnas en modal
export default function Login(props) {
    async function onLogin() {
        const username = 
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
