"use client";
import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    async function fetchQuote() {
    const response = await fetch('/api/quotes');
    console.log("This is the response:" + response);
    const data = await response.json();
        if (data && data.length > 0) {
          setQuote(data[0].q + " — " + data[0].a);
        }
    }

    fetchQuote();
  }, []); 

  return (
    <blockquote>
      {quote}
    </blockquote>
  );
}

export default Quote;
