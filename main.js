
async function getQuote() {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const data = await response.json();
  return data;
}

async function userClicked() {
  const data = await getQuote();
  const quote = data[0].quote;
  const character = data[0].character;
  const quoteText = document.getElementById("quote-text");
  const characterSpan = document.getElementById("character");

  quoteText.textContent = `"${quote}"`
  characterSpan.textContent = `- ${character}`
}

document.getElementById("quote").addEventListener("click", userClicked, false)
