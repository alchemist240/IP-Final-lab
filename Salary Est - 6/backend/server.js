// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Salary calculation endpoint
app.post('/api/salary', (req, res) => {
  const { basicSalary } = req.body;

  if (!basicSalary || isNaN(basicSalary)) {
    return res.status(400).json({ error: 'Invalid salary input' });
  }

  // Example calculation for net salary (assuming a fixed deduction rate of 20%)
  const deductionRate = 0.20; // 20% deductions
  const netSalary = basicSalary * (1 - deductionRate);
  console.log(`Your net salary is ${netSalary}`);
  
  res.json({ netSalary });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
