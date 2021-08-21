var quotes = [
  "Spread love everywhere you go. Let no one ever come to you without leaving happier",
  "When you reach the end of your rope, tie a knot in it and hang on.",
  "Always remember that you are absolutely unique. Just like everyone else.",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
  "It is during our darkest moments that we must focus to see the light.",
  "Whoever is happy will make others happy too.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail."
];

var authors = [
  "-Mother Teresa",
  "-Franklin D. Roosevelt",
  "-Margaret Mead",
  "-Robert Louis Stevenson",
  "-Eleanor Roosevelt",
  "-Benjamin Franklin",
  "-Helen Keller",
  "-Aristotle",
  "-Anne Frank",
  "-Ralph Waldo Emerson"
];

var colors = [
  "#800000",
  "#FF0000",
  "#800080",
  "#FF00FF",
  "#008000",
  "#00FF00",
  "#808000",
  "#ff9900",
  "#000080",
  "#0000FF",
  "#008080",
  "#00FFFF"
];

function getRandom() {
  let index = Math.floor(Math.random() * quotes.length);
  let randomQuote = quotes[index];
  let author = authors[index];
  return [index, randomQuote, author];
}

var quote = getRandom();
var randomQuote = quote[1],
  author = quote[2];

function newQuote() {
  let quote = getRandom();
  let author = quote[2];
  let randomQuote = quote[1];

  document.getElementById("text").innerHTML = randomQuote;
  document.getElementById("author").innerHTML = author;

  var color = colors[Math.floor(Math.random() * colors.length)];
  console.log(color);
  document.body.style.backgroundColor = color;
  document.getElementById("quote-box").style.color = color;

  document.getElementById("new-quote").style.backgroundColor = color;
  document.getElementById("tweet-button").style.backgroundColor = color;
  document.getElementById("tweet-quote").href = "https://twitter.com/intent/tweet?text="+randomQuote+author;
}

window.addEventListener('DOMContentLoaded', (event) => {
    newQuote();
});
