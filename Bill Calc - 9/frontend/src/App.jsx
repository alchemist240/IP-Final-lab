// src/App.jsx

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; // Import your CSS file

const App = () => {
    const [items, setItems] = useState([{ name: '', quantity: 1 }]);
    const [total, setTotal] = useState(0);

    const handleInputChange = (index, e) => {
        const newItems = [...items];
        newItems[index][e.target.name] = e.target.value;
        setItems(newItems);
    };

    const addItem = () => {
        setItems([...items, { name: '', quantity: 1 }]);
    };

    const calculateTotal = async () => {
        const response = await fetch('http://localhost:5000/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ items }),
        });
        const data = await response.json();
        setTotal(data.total);
    };

    return (
        <Router>
            <div className="calculator">
                <h1>Bill Calculator Tool</h1>
                <h5>SPECIAL DISCOUNT !! All our items only for 10$ each</h5>
                <div className="form-container">
                    {items.map((item, index) => (
                        <div className="form-group" key={index}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Item Name"
                                value={item.name}
                                onChange={(e) => handleInputChange(index, e)}
                                required
                            />
                            <input
                                type="number"
                                name="quantity"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => handleInputChange(index, e)}
                                required
                            />
                        </div>
                    ))}
                    <button onClick={addItem}>Add Item</button>
                    <button onClick={calculateTotal}>Calculate Total</button>
                </div>
                <div className="total">
                    <h2>Total Cost: ${total.toFixed(2)}</h2>
                </div>
            </div>
        </Router>
    );
};

export default App;
