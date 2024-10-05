document.addEventListener ("DOMContentLoaded", () => {
    fetchInsults();})


    function fetchInsults (){
        fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json' , {mode: 'no-cors'})
        .then(resp => resp.json())
        .then(json =>
        renderInsult(json.data)
        )}

    

    function renderInsult (insults) {
        let insultMe = document.getElementById("insult-text")
        facts.map(insult =>{
        const p = document.createElement ('p')
        p.setAttribute("id", "actual-insult")
        p.innerHTML = insult.insult
        insultMe.appendChild(p)})
    }