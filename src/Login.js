import React from "react";


//När man klickar på knappen så öppnas en modal
export default function Login(props){
    const[ShowModal, setShowModal] = React.useState(false);
    let modal = "modal";
    if(ShowModal === true){
        modal = "modal is-activate";
    }
    return <div className= "Login">
    <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-content">
      <input className="input" id="usn" type="text" placeholder="Username"/>
      <input className="input" id="psw" type="text" placeholder="Password"/>
  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>
</div>
}
