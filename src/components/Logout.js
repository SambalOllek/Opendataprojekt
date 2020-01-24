import React from "react";
import { getToken } from "../logic/authentication";

//Loggar ut och tar bort ens inloggningstoken
export default function Logout({ setIsLoggedIn }) {
    function logout() {
        setIsLoggedIn(false)
        window.localStorage.removeItem("token")
    }

    return <div className="Login">
        <button id="Login" onClick={logout}>Log Out</button>
    </div>
}
