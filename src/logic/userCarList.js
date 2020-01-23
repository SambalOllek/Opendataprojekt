import UserCarList from "../entities/UserCarList";

/**
 * Fetches all cars in users list
 * @param {Function} setUserCarList function to set a UserCarList
 * @returns {Promise<void>}
 */
export async function getUsersCarList(setUserCarList) {
    const res = await fetch(`http://localhost:8080/Opendata-Backend/api/userCars/`, {
        method: "GET",
        headers: {
            'Authorization': window.localStorage.getItem("token")
        }
    });
    const data = await res.json();
    setUserCarList(new UserCarList(...data));
}

/**
 * Adds a car to users list
 * @param {Car} car Car to add to list
 * @param {int} update current update number
 * @param {Function} setUpdate if successfully added car to list increase update by 1
 * @returns {Promise<void>}
 */
export async function addCarToList(car, update ,setUpdate){
    const res = await fetch(`http://localhost:8080/Opendata-Backend/api/userCars/`, {
        method: "POST",
        headers: {
            'Authorization': window.localStorage.getItem("token")
        },
        body: JSON.stringify(car)
    });
    if(res.ok){
        setUpdate(update+1);
    }
}

/**
 * Removes a car from users list
 * @param {int} carId ID of car to remove from list
 * @param {int} update current update number
 * @param {Function} setUpdate if successfully removed car from list increase update by 1
 * @returns {Promise<void>}
 */
export async function deleteCarFromList(carId, update ,setUpdate){
    const res = await fetch(`http://localhost:8080/Opendata-Backend/api/userCars/${carId}`, {
        method: "DELETE",
        headers: {
            'Authorization': window.localStorage.getItem("token")
        }
    });
    if(res.ok){
        setUpdate(update+1);
    }
}