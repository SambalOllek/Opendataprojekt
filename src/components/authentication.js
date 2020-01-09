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