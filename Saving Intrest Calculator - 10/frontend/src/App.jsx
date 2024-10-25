// src/App.jsx

import React, { useState } from 'react';
import './App.css';
import investmentImage from './assets/investment.jpg';

const App = () => {
    const [principal, setPrincipal] = useState('');
    const [age, setAge] = useState('');
    const [investmentPeriod, setInvestmentPeriod] = useState('');
    const [interestEarned, setInterestEarned] = useState(0);

    const calculateInterest = async () => {
        const response = await fetch('http://localhost:5000/calculate-interest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ principal, age, investmentPeriod }),
        });
        const data = await response.json();
        setInterestEarned(data.interest);
    };

    return (
        <div className="calculator">
            <div className="image-container">
                <img src={investmentImage} alt="Investment Tips" />
            </div>
            <div className="form-container">
                <h1>Savings Interest Calculator</h1>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Principal Amount ($)"
                        value={principal}
                        onChange={(e) => setPrincipal(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        placeholder="Investment Period (Years)"
                        value={investmentPeriod}
                        onChange={(e) => setInvestmentPeriod(e.target.value)}
                        required
                    />
                </div>
                <button onClick={calculateInterest}>Calculate Interest</button>
                <div className="total">
                    <h2>Interest Earned: ${interestEarned.toFixed(2)}</h2>
                </div>
            </div>
            <div className="tips-container">
                <h2>Investment Tips</h2>
                <ul>
                    <li>Start investing early to maximize compound interest.</li>
                    <li>Diversify your investments to manage risk.</li>
                    <li>Regularly review and adjust your investment portfolio.</li>
                    <li>Stay informed about market trends and economic conditions.</li>
                    <li>Consider consulting a financial advisor for personalized advice.</li>
                </ul>
            </div>
        </div>
    );
};

export default App;
