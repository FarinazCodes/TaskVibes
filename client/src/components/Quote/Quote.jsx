import React, { useState, useEffect } from "react";
import "./Quote.scss";

const Quote = ({ quote, author }) => {
  return (
    <div className="quote">
      <h2 className="quote__title">One day at a time:</h2>
      {quote && <p className="quote__quote">- {quote}</p>}
      {author && <p className="quote__author">- {author}</p>}
    </div>
  );
};

export default Quote;
