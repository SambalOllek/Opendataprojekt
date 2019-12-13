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



            <div id="container">
                <h1 id="Searchhead">Hitta bilar i ditt område</h1>

                <div class="field has-addons">
                    <div class="control">
                        <input class="input" type="text" placeholder="Sök efter en plats"/>
                    </div>
                        <div class="control">
                            <a class="button is-info">
                                Search
                            </a>
                        </div>
                    </div>

                    <div class="field has-addons">
  <div class="control">
    <div class="select is-halfwidth">
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
  <div class="control">
    <button type="submit" class="button is-primary">Stad</button>
  </div>
</div>
                    <div class="field has-addons">
  <div class="control">
    <div class="select is-halfwidth">
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
  <div class="control">
    <button type="submit" class="button is-primary">Län</button>
  </div>
</div>

                </div>
                <footer>
                </footer>
            </div >

            )
}