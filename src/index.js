import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bulma/css/bulma.css";
import Home from './components/Home';
import {GetToken} from './components/Service';
import {LoginToken} from './components/Service';

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

async function OauthLogin(){
if(code){
    let token = await GetToken(code);
    let userinfo = await LoginToken(token);
    console.log(userinfo);
}
}

OauthLogin();

ReactDOM.render(<Home/>, document.getElementById('root'));
