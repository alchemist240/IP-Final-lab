// client/src/components/Quiz.js
import React, { useState } from 'react';

function Quiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      onComplete(score + 1);
    }
  };

  return (
    <div className="quiz-container">
      {questions.length > 0 ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option === questions[currentQuestion].answer)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <h2>Loading questions...</h2>
      )}
    </div>
  );
}

export default Quiz;
