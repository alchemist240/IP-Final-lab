// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS for all requests
app.use(bodyParser.json()); // Parse JSON request bodies

// Sample data to simulate a database
let contacts = [
    { id: 1, name: 'Sahil Motiramani', phone: '962518354' },
    { id: 2, name: 'Advik Hegde', phone: '9867653932' },
];

// GET request to retrieve all contacts
app.get('/api/contacts', (req, res) => {
    res.json(contacts);
});

// POST request to add a new contact
app.post('/api/contacts', (req, res) => {
    const { name, phone } = req.body;

    // Validate the input
    if (!name || !phone) {
        return res.status(400).json({ message: 'Name and phone number are required.' });
    }

    // Create a new contact
    const newContact = {
        id: contacts.length + 1, // Simple ID generation
        name,
        phone,
    };

    contacts.push(newContact); // Add to the contacts array
    res.status(201).json(newContact); // Respond with the created contact
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
