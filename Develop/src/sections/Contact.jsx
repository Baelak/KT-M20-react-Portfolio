import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) ? '' : 'Invalid email address' });
    } else {
      setErrors({ ...errors, [name]: value ? '' : 'This field is required' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span>{errors.message}</span>}
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
