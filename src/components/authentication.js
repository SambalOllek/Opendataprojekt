export async function CheckUser(username, password) {
    if(username === "user"){
        return true;
    }else{
        return false;
    }
    /*const res = await fetch("http://localhost:8080/Opendata-Backend/api/" , {
        method: "GET",
        headers: {
            'Authorization': authString
        }
    })
    const success = res.status === 200;
    return success;*/
}

export async function NewUser(username, password) {
    
    /*const res = await fetch("http://localhost:8080/Opendata-Backend/api/" , {
        method: "GET",
        headers: {
            'Authorization': authString
        }
    })
    const success = res.status === 200;
    return success;*/
}
