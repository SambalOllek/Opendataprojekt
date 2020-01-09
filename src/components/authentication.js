export async function GetData(){
    let result = await fetch("")

    if(result.ok){
        const data = await result.json();

        return data;
    }
}

export async function postData(data){
    fetch("",{
        method: "POST",
        headers:{

        },
        body: JSON.stringify(data)
    })
}

export async function deleteItem(){
    fetch("",{
        method: "DELETE",
        headers:{
            
        }
    })
}