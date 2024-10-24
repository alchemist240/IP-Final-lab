import React, { useState } from 'react';
import './App.css'; // Ensure you have the CSS imported

const BMICalculator = ({ backgroundImage }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/calculate-bmi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ weight, height }),
    });

    const data = await response.json();
    setBmi(data.bmi);
    setCategory(data.category);
  };

  // Sample health tips
  const healthTips = [
    "Maintain a balanced diet rich in fruits, vegetables, and whole grains.",
    "Stay hydrated by drinking plenty of water throughout the day.",
    "Engage in regular physical activity, aiming for at least 30 minutes a day.",
    "Get enough sleep each night to support your overall health.",
    "Avoid excessive sugar and saturated fat intake.",
    "Regularly monitor your BMI and consult with a healthcare provider for personalized advice."
  ];

  return (
    <div className="bmi-calculator" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <div>
          <label htmlFor="weight">Weight (kg): </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="height">Height (m): </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi.toFixed(2)}</h3>
          <p className={category.toLowerCase()}>Health Category: {category}</p>
        </div>
      )}

      {/* Health Tips Section */}
      <div className="health-tips-container">
        <h3>General Health Tips</h3>
        <div className="health-tips">
          <ul>
            {healthTips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
