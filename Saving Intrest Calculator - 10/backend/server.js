const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const calculateInterest = (principal, investmentPeriod) => {
    const rateOfInterest = 5; // Example fixed interest rate
    const interest = (principal * rateOfInterest * investmentPeriod) / 100;
    return interest;
};

// Endpoint to handle interest calculation
app.post('/calculate-interest', (req, res) => {
    const { principal, age, investmentPeriod } = req.body;
    
    // Validate input
    if (!principal || !age || !investmentPeriod) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const interest = calculateInterest(parseFloat(principal), parseInt(investmentPeriod));
    res.json({ interest });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
