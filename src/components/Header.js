import React from "react"
import Login from "./Login";
import Logout from "./Logout";

export default function Header({ setIsLoggedIn, isLoggedIn }) {
    return (
        <header>
            <div id="Hero"> 
            {/* Pingar logout för att kolla om individen är inloggad eller inte */}
                {isLoggedIn ? <Logout setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
            </div>
        </header>
    )
}