import Overlay from "ol/Overlay";

export default function addOverlay(map, selectCar){
    let element = document.getElementById('popup');

    let popup = new Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
    });
    map.addOverlay(popup);

    // display popup on click
    map.on('click', function (evt) {
        let feature = map.forEachFeatureAtPixel(evt.pixel,
            function (feature) {
                return feature;
            });
        if (feature) {
            selectCar(feature);
        }
    });
}