const quotes = [
    {quote: "Whatever you wish for, you keep"},
    {quote: "Have faith in your dreams and some day Your rainbow will come smiling through"},
    {quote: "Just for fun!"},
    {quote: "We are all of us stars and we deserve to twinkle"},
    {quote: "You can choose to be happy"},
    {quote: "Don't rush; do it step by step"},
    {quote: "From zero to hero"},
    {quote: "Desperate triumphs over luck"},
    {quote: "Believe you can and You're halfway there"},
    {quote: "A day without laughter is a day wasted"},
];

const quote = document.querySelector("#quote span:first-child")

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length )]);

quote.innerText = todaysQuote.quote;