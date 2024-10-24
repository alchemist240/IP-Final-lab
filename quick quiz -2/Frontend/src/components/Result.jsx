// client/src/components/Result.js
import React from 'react';

function Result({ score }) {
  return (
    <div className="result-container">
      <h2>Your Score: {score}</h2>
      <p>Thank you for participating in the quiz!</p>
      <p>All copyrights reserved by Kshitij</p>
    </div>
  );
}

export default Result;
