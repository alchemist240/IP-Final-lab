const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample data: list of courses
const courses = [
  { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming with Python.' },
  { id: 2, title: 'Advanced JavaScript', description: 'Master JavaScript, from ES6 to modern frameworks.' },
  { id: 3, title: 'Web Development Bootcamp', description: 'A complete course to learn web development using HTML, CSS, and JavaScript.' },
  { id: 4, title: 'Data Science with Python', description: 'Become a data scientist by mastering data analysis, visualization, and machine learning with Python.' }
];

// Route to get all courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Route to handle contact form inquiries
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Inquiry received from ${name} (${email}): ${message}`);
  res.status(200).json({ message: 'Inquiry received successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
