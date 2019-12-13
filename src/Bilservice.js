
export async function FetchBilinfo() {
    let result = await fetch("/")

    if (result.ok) {
        const data = await result.json();
        console.log(data);

        return data;
    }
    throw new Error ("Kunde inte hämta data!");
}
