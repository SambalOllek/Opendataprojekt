import React from "react";


//När man klickar på knappen så öppnas en modal
export function Login(props){
    const[ShowModal, setShowModal] = React.useState(false);
    let modal = "modal";
    if(ShowModal === true){
        modal = "modal is-active";
    }


    function openModal(){
        setShowModal(true);
    }

    function closeModal(){
        setShowModal(false);
    }


return <div className= "Login">
    <button id="Login" onClick={openModal}>Login</button>
        <div className={modal}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <input className="input" id="usn" type="text" placeholder="Username"/>
                <input className="input" id="psw" type="text" placeholder="Password"/>
                <button type="button" id="ClickLogin">Login</button>
            </div>
                <button className="modal-close is-large" onClick={closeModal} aria-label="close">modal</button>
        </div>
    </div>
}