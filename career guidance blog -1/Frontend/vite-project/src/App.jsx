import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import backgroundImage from './assets/career1.jpg'; 


const App = () => {
  const [articles, setArticles] = useState([]);
  const [contactData, setContactData] = useState({ name: '', email: '', message: '' });
  const [formResponse, setFormResponse] = useState('');

  // Fetch articles
  useEffect(() => {
    axios.get('http://localhost:5000/api/articles')
      .then(res => setArticles(res.data))
      .catch(err => console.error('Error fetching articles:', err));
  }, []);

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/contact', contactData)
      .then(res => setFormResponse(res.data.message))
      .catch(err => console.error('Error submitting form:', err));
  };

  // Handle form data change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className="App-header">
        <h1>Career Guidance Blog FT Kshitij </h1>
        <p>Insightful articles to help you grow your career!</p>
      </header>

      <section className="articles">
        <h2>Featured Articles</h2>
        {articles.map(article => (
          <div key={article.id} className="article">
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </div>
        ))}
      </section>

      <section className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={contactData.name}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={contactData.email}
            onChange={handleInputChange}
            required 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={contactData.message}
            onChange={handleInputChange}
            required 
          />
          <button type="submit">Send</button>
        </form>
        {formResponse && <p className="response-message">{formResponse}</p>}
      </section>
    </div>
  );
};

export default App;

