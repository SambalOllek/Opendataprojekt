import {GeoCode} from "geo-coder"

export default class Car {

    constructor({id, link, address, year, fuel, gearbox, brand, model, price, mileage, drivewheel, regnum}) {
        this.id = id;
        this.link = link;
        this.address = address;
        this.year = year;
        this.fuel = fuel;
        this.gearbox = gearbox;
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.mileage = mileage;
        this.drivewheel = drivewheel;
        this.regnum = regnum;
    }

    async setLongLat() {
        const geoCoder = new GeoCode();
        const res = await geoCoder.geolookup(this.address);
        this.latitude = res[0].lat;
        this.longitude = res[0].lng;
        console.log("Latitude: " + this.latitude);
        console.log("Longitude: " + this.longitude);
    }

}