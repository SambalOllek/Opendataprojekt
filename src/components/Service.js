
 export async function  GetToken(Code){
     let result = await fetch("http://localhost:8080/Opendata-Backend/api/token?code=" +Code)
     if(result.ok) {
         const data = await result.text();
         return data;
     }
}

 export async function  LoginToken(token, setIsLoggedIn){
    let result = await fetch("http://localhost:8080/Opendata-Backend/api/login?token=" +token)

    if(result.ok) {
        const userinfo = await result.json();
        console.log(userinfo);
        window.localStorage.setItem("token", token);
        setIsLoggedIn(true);
        return userinfo;
    }
}


