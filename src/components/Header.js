import React from "react"
import Login from "./Login";

export default function Header(props) {
    return (
        <header>
            <div id="Hero">
                <div>
                </div>
                <Login/>
                <h2 id="maintext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat sapien eu
                    libero
                    vestibulum dignissim. Ut lacinia aliquam fermentum. Nunc metus nunc</h2>
            </div>
        </header>
    )
}