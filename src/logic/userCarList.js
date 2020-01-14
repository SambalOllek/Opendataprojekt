import UserCarList from "../entities/UserCarList";

//FIX path
export default async function getUsersCarList(userId, authToken, setUserCarList) {
    const res = await fetch(`http://localhost:8080/Opendata-Backend/api/userCars/${userId}`, {
        method: "GET",
        headers: {
            'Authorization': authToken
        }
    });
    const data = await res.json();
    setUserCarList(new UserCarList(...data));
}