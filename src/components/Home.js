import React from 'react';
import '../sass/Home.scss';
import Login from './Login';
import Maps from './Map';
import getCars from "../logic/car";
import Header from "./Header";
import Footer from "./Footer";

export default function Home() {

    const [cars, setCars] = React.useState([]);
    React.useEffect(() => {
        getCars(setCars)
    }, []);

    console.log(cars);

    return (
        <div>
            <Header></Header>
            <div id="container">
                <h1 id="Searchhead">Hitta bilar i ditt område</h1>
                <div className="inputs">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="text" placeholder="Sök efter en plats"/>
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
                                <select name="country">
                                    <option value="Borås">Borås</option>
                                    <option value="Eskilstuna">Eskilstuna</option>
                                    <option value="Gävle">Gävle</option>
                                    <option value="Göteborg">Göteborg</option>
                                    <option value="Halmstad">Halmstad</option>
                                    <option value="Helsingborg">Helsingborg</option>
                                    <option value="Jönköping">Jönköping</option>
                                    <option value="Karlstad">Karlstad</option>
                                    <option value="Linköpinf">Linköping</option>
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
                <Maps/>
            </div>
            <Footer></Footer>
        </div>

    )
}