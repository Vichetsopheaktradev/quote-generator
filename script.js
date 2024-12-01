const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newquoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

// let apiQuotes = [];

//show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

//show new quotes
function newQuote() {
  loading();
  // pick a random quotes from apiQuotes array
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  //check if author field is blank and place it with ''unknown''
  if (!quote.author) {
    authorText.textContent = "unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //check quote to determine styling
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  // set quote, hide loader
  quoteText.textContent = quote.text;
  complete();
}

// Get Quotes From API
// async function getQuotes() {
//   const apiUrl = "https://type.fit/api/quotes";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuotes();
//     console.log(apiQuotes[12]);
//   } catch (error) {
//     // Catch Error Here
//   }
// }

// On load
// getQuotes();

//tweet quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}
// event listeners
newquoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);
newQuote();

//on load
getQuotes();
