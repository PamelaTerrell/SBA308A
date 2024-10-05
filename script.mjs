fetchData();

async function fetchData(){

    try{
        const response = await fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json");

        if(!response.ok){
            throw new Error("could not fetch");
        }

        const data = await response.json();
        console.log(data);


    }

    catch(error){
        console.error(error);
    }

}