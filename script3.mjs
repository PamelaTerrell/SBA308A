const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const targetUrl = "https://evilinsult.com/generate_insult.php?lang=en&type=json";

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("generate-insult").addEventListener("click", fetchInsults);
});

async function fetchInsults() {
    try {
        const response = await fetch(proxyUrl + targetUrl, { cache: "no-store" });
        const contentType = response.headers.get("content-type");

        if (!contentType || !contentType.includes("application/json")) {
            const text = await response.text(); // Read as text if not JSON
            console.error("Expected JSON but received:", text);
            return; // Exit the function if not JSON
        }

        const insultData = await response.json();
        renderInsult(insultData);
    } catch (error) {
        console.error(error);
    }
}


function renderInsult(insult) {
    const insultMe = document.getElementById("insult-text");
    insultMe.innerHTML = ''; // Clear previous insults

    const p = document.createElement("p");
    p.setAttribute("id", "actual-insult");
    p.innerHTML = insult.insult; // Access the insult property
    insultMe.appendChild(p);
}