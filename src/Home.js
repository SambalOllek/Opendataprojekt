import React from 'react';
import './sass/Home.scss';
import { Login } from './Login';



export default function Home() {

    return (
        <div>
            <header>
                <div id="Hero">
                    <div>
                    </div>
                    <Login />
                    <h2 id="maintext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat sapien eu libero vestibulum dignissim. Ut lacinia aliquam fermentum. Nunc metus nunc</h2>
                </div>
            </header>


            <footer>
                <div id="container">
                    <h1 id="Searchhead">Hitta bilar i ditt område</h1>
                </div>
            </footer>
        </div >

    )
}