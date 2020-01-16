import React from 'react';
import '../sass/Home.scss';
import map from './Map';
import getCars from "../logic/car";
import Header from "./Header";
import Footer from "./Footer";
import "ol/ol.css";
import { fromLonLat } from "ol/proj";
import { setLocation } from "./Map.js";

export default function Home() {

    const [cars, setCars] = React.useState([]);
    React.useEffect(() => {
        //getCars(setCars)
    }, []);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        map();
    }, []);

    function changeLocation(ev) {
        const city = ev.currentTarget.value;
        switch (city) {
            case 'Borås':
                setLocation([12.9401, 57.72101]);
                break;
            case 'Eskilstuna':
                setLocation([16.5077, 59.36661]);
                break;
            case 'Gävle':
                setLocation([17.14174, 60.67452]);
                break;
            case 'Göteborg':
                setLocation([11.96679, 57.70716]);
                break;
            case 'Halmstad':
                setLocation([12.85676, 56.67446]);
                break;
            case 'Helsingborg':
                setLocation([12.69437, 56.04673]);
                break;
            case 'Karlstad':
                setLocation([13.50357, 59.3793]);
                break;
            case 'Linköping':
                setLocation([15.62157, 58.41086]);
                break;
            case 'Lund':
                setLocation([13.19321, 55.70584]);
                break;
            case 'Malmö':
                setLocation([13.00073, 55.60587]);
                break;
            case 'Jönköping':
                setLocation([14.15618, 57.78145]);
                break;
            case 'Norrköping':
                setLocation([16.1826, 58.59419]);
                break;
            case 'Stockholm':
                setLocation([18.0649, 59.33258]);
                break;
            case 'Södertälje':
                setLocation([17.62525, 59.19554]);
                break;
            case 'Täby':
                setLocation([18.06872, 59.4439]);
                break;
            case 'Umeå':
                setLocation([20.25972, 63.82842]);
                break;
            case 'Uppsala':
                setLocation([17.63889, 59.85882]);
                break;
            case 'Västerås':
                setLocation([16.55276, 59.61617]);
                break;
            case 'Växjö':
                setLocation([14.80906, 56.87767]);
                break;
            case 'Örebro':
                setLocation([15.2066, 59.27412]);
                break;
        }


    }

    return (
        <div>
            <Header setIsLoggedIn={setIsLoggedIn}></Header>
            <script src="https://unpkg.com/geo-coder"></script>

            <div id="container">
                <h1 id="Searchhead">Hitta bilar i ditt område</h1>
                <div className="inputs">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="text" placeholder="Sök efter en plats" />
                        </div>
                        <div className="control">
                            <a className="button is-info">
                                Search
                            </a>
                        </div>
                    </div>

                    <div className="field has-addons">
                        <div className="control">
                            <div className="select is-halfwidth">
                                <select name="country" onChange={changeLocation}>
                                    <option value="Borås">Borås</option>
                                    <option value="Eskilstuna">Eskilstuna</option>
                                    <option value="Gävle">Gävle</option>
                                    <option value="Göteborg">Göteborg</option>
                                    <option value="Halmstad">Halmstad</option>
                                    <option value="Helsingborg">Helsingborg</option>
                                    <option value="Jönköping" >Jönköping</option>
                                    <option value="Karlstad" >Karlstad</option>
                                    <option value="Linköping">Linköping</option>
                                    <option value="Lund">Lund</option>
                                    <option value="Malmö">Malmö</option>
                                    <option value="Norrköping">Norrköping</option>
                                    <option value="Stockholm">Stockholm</option>
                                    <option value="Södertälje">Södertälje</option>
                                    <option value="Täby">Täby</option>
                                    <option value="Umeå">Umeå</option>
                                    <option value="Uppsala">Uppsala</option>
                                    <option value="Västerås">Västerås</option>
                                    <option value="Växjö">Växjö</option>
                                    <option value="Örebro">Örebro</option>
                                </select>
                            </div>
                        </div>
                        <div className="control">
                            <button type="submit" className="button is-primary">Stad</button>
                        </div>
                    </div>
                    <div className="field has-addons">
                        <div className="control">
                            <div className="select is-halfwidth">
                                <select name="country">
                                    <option value="Norrbotten">Norrbotten</option>
                                    <option value="Västerbotten">Västerbotten</option>
                                    <option value="Västernorrland">Västernorrland</option>
                                    <option value="Jämtland">Jämtland</option>
                                    <option value="Gävleborg">Gävleborg</option>
                                    <option value="Dalarna">Dalarna</option>
                                    <option value="Värmland">Värmland</option>
                                    <option value="Örebro">Örebro</option>
                                    <option value="Västmanland">Västmanland</option>
                                    <option value="Uppsala">Uppsala</option>
                                    <option value="Stockholm">Stockholm</option>
                                    <option value="Södermanland">Södermanland</option>
                                    <option value="Västra Götaland">Västra Götaland</option>
                                    <option value="Östergötland">Östergötland</option>
                                    <option value="Jönköping">Jönköping</option>
                                    <option value="Kalmar">Kalmar</option>
                                    <option value="Gotland">Gotland</option>
                                    <option value="Kronoberg">Kronoberg</option>
                                    <option value="Halland">Halland</option>
                                    <option value="Skåne">Skåne</option>
                                    <option value="Blekinge">Blekinge</option>
                                </select>
                            </div>
                        </div>
                        <div className="control">
                            <button type="submit" className="button is-primary">Län</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}