const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const quoteButton = document.getElementById("quoteButton");
const xButton = document.getElementById("xButton");


quoteButton.addEventListener("click", generateQuote);

async function generateQuote() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
}

xButton.addEventListener("click", tweet);

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + " --- by " + author.innerHTML, "Tweet Window", "width= 600, height= 300");
}


