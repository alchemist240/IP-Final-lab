const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const calculateBMI = (weight, height) => {
  const bmi = weight / (height * height);
  let category = '';

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi < 24.9) {
    category = 'Normal weight';
  } else if (bmi < 29.9) {
    category = 'Overweight';
  } else {
    category = 'Obesity';
  }

  return { bmi, category };
};

app.post('/calculate-bmi', (req, res) => {
  const { weight, height } = req.body;
  const result = calculateBMI(weight, height);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
