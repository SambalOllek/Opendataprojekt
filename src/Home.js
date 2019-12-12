import React from 'react';
import './Home.css';
import Login from './Login';


export default function Home() {

    return (
        <div>
            <header>
                <div id="Hero">
                    
                    <div>
        <button id="Login" onClick={Login}>LOGIN</button>
      </div>
                </div>
            </header>
            <h2 id="maintext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat sapien eu libero vestibulum dignissim. Ut lacinia aliquam fermentum. Nunc metus nunc</h2>
                <footer>
                
            </footer>
        </div>
        
    )}