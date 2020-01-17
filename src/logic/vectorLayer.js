import {Vector as VectorLayer} from "ol/layer";
import {Vector as VectorSource} from "ol/source";

export default function vectorLayer(features){
    let source = new VectorSource({
        features: [...features]
    });

    return new VectorLayer({
        source: source
    });
}