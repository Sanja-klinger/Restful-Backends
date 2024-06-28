const apiUrl = "https://dummy-apis.netlify.app/api/quote/";

function getQuote() {
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  // the "loading" text or appearance
  quoteTextElement.innerText = "Loading quote...";
  quoteAuthorElement.innerText = "";

  //fetch data from the API
  fetch(apiUrl)
    .then(function (response) {
      return response.json(); //turn response to JSON
    })
    .then(function (data) {
      // use Data from the response
      quoteTextElement.innerText = '"' + data.quote + '"';
      quoteAuthorElement.innerText = "- " + data.author;
    });
}

document.querySelector(".btn").addEventListener("click", getQuote);
