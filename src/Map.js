//Kartan som används
/*import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';*/

import {
    interaction, layer, custom, control, //name spaces
    Interactions, Overlays, Controls,     //group
    Map, Layers, Overlay, Util    //objects
  } from "react-openlayers";
  import React from 'react';

export default function Maps(){
 

    return <div>
  <Map view={{center: [0, 0], zoom: 2}}>
  <Layers>
    <layer.Tile/>
  </Layers>
  <Overlays>
  </Overlays>
  <Controls attribution={false} zoom={true}>
    <control.Rotate />
    <control.ScaleLine />
    <control.OverviewMap />
    <control.ZoomSlider />
    <control.ZoomToExtent />
    <control.Zoom />
  </Controls>

</Map>
</div>
}

//<interaction.Select style={selectedMarkerStyle} />
  