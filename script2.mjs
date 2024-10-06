// Proxy url is needed to circumvent the cors issue.
const proxyUrl = "https://cors-anywhere.herokuapp.com/"; const targetUrl =
  "https://evilinsult.com/generate_insult.php?lang=en&type=json";
document.addEventListener("DOMContentLoaded", () => { fetchInsults();
});
async function fetchInsults() { 
    try {
        const response = await fetch(proxyUrl + targetUrl,
{ cache: "no-store" }); // this part allows you to get a different insult with each clic
const insultData = await response.json();
    renderInsult(insultData);
  } catch (error) {
console.log(error); }
}
function renderInsult(insult) {
let insultMe = document.getElementById("insult-text");
  // Since `insult` is a single object, you don't need to map over it
const p = document.createElement("p");
p.setAttribute("id", "actual-insult");
p.innerHTML = insult.insult; // Directly access `insult.insult` insultMe.appendChild(p);
}