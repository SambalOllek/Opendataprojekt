import React from "react";
import { getToken } from "./authentication";


export default function Logout({setIsLoggedIn}) {
        function logout() {
         setIsLoggedIn(false)
         window.localStorage.removeItem("token") 
            
        }
        
        return <div className="Login">
        <button id="Login" onClick={logout}>Log Out</button>
        </div>
        }
    