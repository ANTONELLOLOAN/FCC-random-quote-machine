import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);
  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };    

  return (
    <div className="background" style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor, transition}}>
          <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
          <h2 id="text">
            {quote.quote}</h2>
          <h4 id="author">- {quote.author}</h4>
          <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
        </div>
        <div className="button-container">
          <button id="new-quote" onClick={changeQuote} style={{  backgroundColor: randomColor, transition }}>
            Get New Quote
          </button>
          <a href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`} id="tweet-quote" target="_blank" style={{ backgroundColor: randomColor, transition }}><FaTwitter size="30" color="white" /></a>
          </div>
      </div>
    </div>
  );
}

export default App;
