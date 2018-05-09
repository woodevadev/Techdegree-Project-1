// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Initializes quotes array
var quotes = [
    {
        quote: "Don't cry because it's over, smile because it happened.",
        source: "Dr. Seuss"
    },
    {
        quote: "If you want to know what a man's like, take a doog look at how he treats his inferiors, not his equals.",
        source: "J.K. Rowling",
        citation: "Harry Potter and the Goblet of Fire"
    },
    {
        quote: "If you want to know what a man's like, take a doog look at how he treats his inferiors, not his equals.",
        source: "J.K. Rowling",
        citation: "Harry Potter and the Goblet of Fire"
    },
    {
        quote: "We welcome change and openness; for we believe that freedom and security go together",
        source: "Ronald Reagan",
        citation: "Tear down this wall speech",
        year: "1987"
    },
    {
        quote: "Two things are infinite: the univers and human stupidity; and im not sure about the universe.",
        source: "Albert Einstein",
    },
    {
        quote: "So many books, so little time",
        source: "Frank Zappa",
    },
    {
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        source: "Dr. Seuss",
    },
    {
        quote: "You only live once, but if you it right, once is enough.",
        source: "Mae West",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        source: "Mahatma Ghandi",
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        source: "Robert Frost",
    },
];

function getRandomQuote(){
    //Makes a random number used to select the quote to be shown 
    //The number is between 0 and 9 
    var quoteNumber = Math.floor((Math.random() * 10));

    //Log quoteNumber to the console
    console.log(quoteNumber);

    //Return a given quote object based on the random number generated
    return quotes[quoteNumber];
}

function printQuote(){
    //Gets the random quote object and stores it in aQuote
    var aQuote = getRandomQuote();
    
    //Logs the quote to the console
    console.log(aQuote.quote);

    //Creates a blank html string
    var htmlString = "";

    //Constructs a string of html to pass to index.html
    htmlString += "<p class='quote'>" + aQuote.quote + "</p>";
    htmlString += "<p class='source'>" + aQuote.source;

    //Checks the aQuote object for citation
    //If citation exists then it is included
    if(aQuote.citation){
        htmlString += "<span class='citation'>" + aQuote.citation + "</span>";
    }

    //Checks the aQuote object for year
    //If year exists then it is included
    if(aQuote.year){
        htmlString += "<span class='year'>" + aQuote.year + "</span>";
    }

    //Finishes htmlString
    htmlString += "</p>";
    
    document.getElementById('quote-box').innerHTML = htmlString;
}