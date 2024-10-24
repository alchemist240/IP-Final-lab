// src/App.jsx
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [netSalary, setNetSalary] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const salaryData = { basicSalary: parseFloat(basicSalary) };

    fetch('http://localhost:5000/api/salary', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(salaryData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to calculate salary');
        }
        return response.json();
      })
      .then((data) => {
        setNetSalary(data.netSalary);
      })
      .catch((error) => {
        setError(error.message);
        setNetSalary(null);
      });
  };

  return (
    <div className="app-container">
      <div className="salary-estimator">
        <h1>Quick Salary Estimator</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            placeholder="Enter Basic Salary"
            value={basicSalary}
            onChange={(e) => setBasicSalary(e.target.value)}
            required
          />
          <button type="submit">Calculate Net Salary</button>
        </form>
        {netSalary !== null && (
          <div className="result">
            <h3>Estimated Net Salary: ${netSalary.toFixed(2)}</h3>
          </div>
        )}
        {error && <p className="error">{error}</p>}
      </div>

      {/* Investment Tips Section */}
      <div className="investment-tips">
        <h2>Investment Tips</h2>
        <ul>
          <li><strong>Emergency Fund:</strong> Set aside at least 3-6 months of living expenses.</li>
          <li><strong>Retirement Savings:</strong> Contribute to a 401(k) or IRA to secure your future.</li>
          <li><strong>Stocks and Bonds:</strong> Consider investing in a diversified portfolio for long-term growth.</li>
          <li><strong>Real Estate:</strong> Real estate can provide both rental income and property appreciation.</li>
          <li><strong>Mutual Funds:</strong> Pooled investments that give access to a broader market.</li>
          <li><strong>Side Business:</strong> Use your savings to start a small side hustle or business.</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
