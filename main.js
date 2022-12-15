
async function getQuote() {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const data = await response.json();
  return data;
}

async function userClicked() {
  const data = await getQuote();
  const quote = data[0].quote;
  const quoteText = document.getElementById("quote-text")
  quoteText.textContent = quote
}

document.getElementById("quote").addEventListener("click", userClicked, false)
