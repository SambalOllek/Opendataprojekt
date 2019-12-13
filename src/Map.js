//Kartan som används
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';


var map = new Map({
    view: new View({
      center: [-20000, 3500000],
      zoom: 5
    }),
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    target: 'map'
  });