import React, { useEffect, useState } from 'react';
import './App.css';
import bgImage from './assets/background.jpg';

const App = () => {
  const [courses, setCourses] = useState([]);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Fetch courses from the backend
  useEffect(() => {
    fetch('http://localhost:5000/api/courses')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  // Handle contact form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .then(data => {
        alert('Inquiry sent!');
        setContact({ name: '', email: '', message: '' });
      })
      .catch(error => console.error('Error sending inquiry:', error));
  };

  // Handle form input changes
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="course-catalog">
        {/* <h1>Online Course Catalog</h1>
        <p>Explore our wide range of courses and take your skills to the next level.</p> */}
        <h2>Our Courses</h2>
        <ul className="course-list">
          {courses.map(course => (
            <li key={course.id} className="course-item">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={contact.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
