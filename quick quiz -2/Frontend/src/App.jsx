// client/src/App.js
import React, { useState, useEffect } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Fetch questions from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/quiz/questions')
      .then(response => response.json())
      .then(data => setQuestions(data));
  }, []);

  const handleQuizCompletion = (score) => {
    setScore(score);
    setQuizComplete(true);
  };

  return (
    <div className="App">
      <h1>Welcome to the ultimate quiz</h1>
      <h4>Lets chek your knowledge</h4>
      {!quizComplete ? (
        <Quiz questions={questions} onComplete={handleQuizCompletion} />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
}

export default App;

