import Overlay from "ol/Overlay";

export default function initOverlay(map) {
    let element = document.getElementById('popup');

    let popup = new Overlay({
        element: element,
        positioning: 'bottom-center',
        stopEvent: false,
        offset: [0, -50]
    });

}