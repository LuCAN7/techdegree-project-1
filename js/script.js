/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

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


/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/


function getRandomQuote(){
  // generate a random number between 0 and the last index in the array parameter
  var randomNumber = Math.floor( Math.random() * quotes.length);
  var randomQuote = quotes[randomNumber];
  return randomQuote;
}

function printQuote(){
   // create a variable that calls the getRandomQuote() function
  var randomQuote = getRandomQuote()
  var displayQuote = "";
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
  

// set the innnerHTML of the .quote-box to the complete HTML string
  var gotQuote = document.getElementById('quote-box');
  gotQuote.innerHTML = displayQuote;
 
}

window.setInterval(printQuote, 20000);


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.

   - Create a variable for the HTML string and set it equal to an empty string.

   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.

   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.