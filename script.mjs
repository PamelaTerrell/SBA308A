fetchData();

async function fetchData(){

    try{

        
        const response = await fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json");

        response = await response.json();

        if(!response.ok){
            throw new Error("could not fetch");
        }
            
        
        fetchData();

        response.json();
        


    }

    catch(error){
        console.error(error);
    }

}