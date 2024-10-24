// server/routes/quiz.js
const express = require('express');
const router = express.Router();

const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Rome", "Berlin"],
    answer: "Paris"
  },
  {
    question: "What is 5 + 3?",
    options: ["5", "8", "10", "12"],
    answer: "8"
  },
  {
    question: "What did lamborghini made initially?",
    options: ["Pen", "Cars", "Tractors", "LifeBoat"],
    answer: "Tractors"
  },
  {
    question: "What is financial capital of India",
    options: ["MUM", "DEL", "AHM", "CHE"],
    answer: "MUM"
  },
  {
    question: "Who won 2024 Mens Cricket t20 wc?",
    options: ["IND", "AUS", "BAN", "NZ"],
    answer: "IND"
  }
];

router.get('/questions', (req, res) => {
  res.json(quizQuestions);
});

module.exports = router;
