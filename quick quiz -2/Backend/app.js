// server/app.js
const express = require('express');
const app = express();
const cors = require('cors');

// Enable CORS
app.use(cors());

// Import quiz routes
const quizRoutes = require('./routes/quiz');
app.use('/api/quiz', quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
