
export async function FetchBilinfo() {
    let result = await fetch("10.16.58.160:8080/Opendata-Backend/api/items")

    if (result.ok) {
        const data = await result.json();
        console.log(data);

        return data;
    }
    throw new Error ("Kunde inte hämta data!");
}


export async function CheckUser(authString) {
    const res = await fetch("" , {
        method: "GET",
        headers: {
            'Authorization': authString
        }
    })
    const success = res.status === 200;
    return success;
}