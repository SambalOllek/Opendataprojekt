export async function getToken(username, password) {
    const authString = btoa(username + ":" + password);
    const res = await fetch("/Opendata-Backend/api/auth", {
        method: "GET",
        headers: {
            'authorization': "Basic " + authString
        }
    });
    if (res.status === 200) {
        const token = await res.text();
        window.localStorage.setItem("token", token);
        return true
    }
    return false;
}
//verifierar användaren med hjälp av en token och databas
export async function verifyToken() {
    const res = await fetch("/Opendata-Backend/api/auth/token", {
        method: "GET",
        headers: {
            'authorization': window.localStorage.getItem("token")
        }
    });
    return res.status === 200;
}

export async function registerUser(username, password) {
    const authString = btoa(username + ":" + password);
    const res = await fetch("/Opendata-Backend/api/auth/create", {
        method: "GET",
        headers: {
            'authorization': "Basic " + authString
        }
    });
    return res.status === 201;
}
