import React from "react"
import Login from "./Login";
import Logout from "./Logout";

export default function Header({setIsLoggedIn, isLoggedIn}) {
    return (
        <header>
            <div id="Hero">
                {isLoggedIn ? <Logout setIsLoggedIn={setIsLoggedIn}/> : <Login setIsLoggedIn={setIsLoggedIn}/> }
            </div>
        </header>
    )
}