// server.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const { items } = req.body;
    let total = 0;

    items.forEach(item => {
        // Assuming a fixed price for demonstration; adjust this logic as needed
        const pricePerItem = 10; // Example price per item
        total += pricePerItem * item.quantity;
    });

    res.json({ total });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
