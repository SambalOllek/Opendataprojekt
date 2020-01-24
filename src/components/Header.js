import React from "react"
import Login from "./Login";
import Logout from "./Logout";

export default function Header({ setIsLoggedIn, isLoggedIn }) {
    return (
        <header>
            <div id="Hero"> 
            {/* Pingar logout för att kolla om individen är inloggad eller inte */}
                {isLoggedIn ? <Logout setIsLoggedIn={setIsLoggedIn} /> : <Login setIsLoggedIn={setIsLoggedIn} />}
                <h2 id="maintext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat sapien eu
                    libero
                    vestibulum dignissim. Ut lacinia aliquam fermentum. Nunc metus nunc</h2>
            </div>
        </header>
    )
}