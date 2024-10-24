const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;

let articles = [
  { id: 1, title: "Building a Successful Career Path in AI/ML", content: "Insightful steps to grow your career and achieve new heights FT Kshitij" },
  { id: 2, title: "Skills You Need to Succeed in Industry 3.0", content: "Discover the must-have skills for 2024 to ace at job" },
  { id: 3, title: "Networking for Growth - LinkedIN Special", content: "The power of professional networks and people" }
];

// GET articles
app.get('/api/articles', (req, res) => {
  res.json(articles);
});

// POST contact form data
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Received inquiry from ${name} (${email}): ${message}`);
  res.status(200).json({ success: true, message: 'Thank you for reaching out!' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
