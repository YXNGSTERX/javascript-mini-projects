
const quotes = [
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "The planet is fine. The people are fucked. — George Carlin",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "Everything is funny, as long as it's happening to somebody else. — Will Rogers",
  "Do one thing every day that scares you. — Eleanor Roosevelt",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
  "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
  "In the end, it's not the years in your life that count. It's the life in your years. — Abraham Lincoln"
];

const usedQuotes = new Set();
const quoteElement = document.getElementById('quote');

function getRandomQuote() {
    while (true) {
    const randomIndex = Math.floor(Math.random()*quotes.length);

    if (usedQuotes.has(randomIndex)) continue

    const quote = quotes[randomIndex];
    quoteElement.innerHTML = quote;
    usedQuotes.add(randomIndex);

    if (usedQuotes.size === quotes.length) {
        usedQuotes.clear();
    }

    break;
}
}
