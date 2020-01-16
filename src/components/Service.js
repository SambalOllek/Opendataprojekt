
export async function FetchBilinfo() {
    let result = await fetch("10.16.58.160:8080/Opendata-Backend/api/cars")

    if (result.ok) {
        const data = await result.json();
        console.log(data);

        return data;
    }
    throw new Error ("Kunde inte hämta data!");
}

 export async function  GetToken(Code){
     let result = await fetch("http://localhost:8080/Opendata-Backend/api/token?code=" +Code)

     if(result.ok) {
         const data = await result.text();

         return data;
     }
}

 export async function  LoginToken(token){
    let result = await fetch("http://localhost:8080/Opendata-Backend/api/login?token=" +token)

    if(result.ok) {
        const userinfo = await result.json();

        return userinfo;
    }
}


