/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// Create an array of quote objects named `quotes`.
var quotes = [
  { 
     quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
     source: 'Maya Angelou',
     citation: 'Speech',
  },
  { 
     quote: '"I will not let anyone walk through my mind with their dirty feet."',
     source: 'Mahatma Gandhi',
     citation: 'Speech',
     year: 1962
  },
  { 
     quote: 'Life is 10% what happens to you and 90% how you react to it.',
     source: 'Charles R. Swindoll',
     citation: 'Speech',
  },
  { 
     quote: '“Whenever you find yourself on the side of the majority, it is time to pause and reflect.”',
     source: 'Mark Twain',
     citation: 'Speech',
  },
  { 
     quote: 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.',
     source: 'J.K. Rowling',
     citation: 'Harry Potter and the Goblet of Fire',
  },
  { 
     quote: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.',
     source: 'Martin Luther King Jr.',
     citation: 'A Testament of Hope: The Essential Writings and Speeches',
  },
  { 
     quote: 'Happiness is not something you postpone for the future; it is something you design for the present.',
     source: 'Jim Rohn',
     citation: 'Book',
  },
  { 
    quote: 'You wouldn’t worry so much about what others think of you if you realized how seldom they do.',
    source: 'Eleanor Roosevelt',
    citation: 'Speech',
 }
];


function getRandomQuote(){
  // generate a random number between 0 and the last index in the array parameter
  var randomNumber = Math.floor( Math.random() * quotes.length);
  // Used the randomNumber to `return` a random quote object from the `quotes` array.
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

function printQuote(){
  // create a variable that calls the getRandomQuote() function
  var randomQuote = getRandomQuote()
  var displayQuote = "";
  // build string by concatenating quote and source into HTML string
  displayQuote += '<p class="quote">' + randomQuote.quote +'</p>';
  displayQuote += '<p class="source">' +  randomQuote.source;
  // if there is a quote.citation property, add it the string
  if (randomQuote.citation){
      displayQuote += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  // if there is a quote.year property, add it the string
  if ( randomQuote.year){
      displayQuote += '<span class="year">' + randomQuote.year + '</span>';
  }
  displayQuote += '</p>';
  // set the innerHTML of the #quote-box to the complete HTML string
  var gotQuote = document.getElementById('quote-box');
  // Set the `innerHTML` of the `quote-box` div to the HTML string. 
  gotQuote.innerHTML = displayQuote;
 
}
// After 20 seconds print new quote to page
window.setInterval(printQuote, 20000);

// addEventListener to loadQuote button and invoke printQuote() once clicked
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
