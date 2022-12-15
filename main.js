
async function getQuote() {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const data = await response.json();
  return data;
}

async function userClicked() {
  const data = await getQuote();
  return console.log(data);
}

document.getElementById("quote").addEventListener("click", userClicked, false)
