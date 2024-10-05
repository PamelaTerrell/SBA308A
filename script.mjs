fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
.then(response => {

    if(!response.ok){
        throw new Error("could not fetch");
    }

    return response.json();

}
)

.then(data => console.log(data))
.catch(error => console.error(error));