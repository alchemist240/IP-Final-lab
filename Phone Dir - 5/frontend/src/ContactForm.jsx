// frontend/src/ContactForm.js
import React, { useState } from 'react';

const ContactForm = ({ setContacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = { name, phone };

    fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newContact),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add contact');
        }
        return response.json();
      })
      .then((data) => {
        setContacts((prevContacts) => [...prevContacts, data]);
        setName('');
        setPhone('');
      })
      .catch((error) => console.error('Error adding contact:', error));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
