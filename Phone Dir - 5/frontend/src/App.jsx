// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; // Import CSS for styling

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Fetch contacts from the backend
  const fetchContacts = async () => {
    const response = await axios.get('http://localhost:5000/api/contacts');
    setContacts(response.data);
  };

  // Handle form submission to add a new contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    const newContact = { name, phone };
    await axios.post('http://localhost:5000/api/contacts', newContact);
    setName('');
    setPhone('');
    fetchContacts(); // Refresh the contact list
  };

  // Fetch contacts when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="directory">
      <h1>Personal Phone Directory</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Add Contact</button>
      </form>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <h3>{contact.name}</h3>
            <p>{contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

