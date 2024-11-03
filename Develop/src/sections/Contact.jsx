import React, { useState } from 'react';
import { validateEmail } from '../utils/validateEmail';
import '../styles/contact.css'; 

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      setErrors({ ...errors, email: validateEmail(value) ? '' : 'Please put a valid email address 😅' });
    } else {
      setErrors({ ...errors, [name]: value ? '' : 'This field is required 😅' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'This field is required 😅';
    }
    if (!formData.email) {
      newErrors.email = 'This field is required 😅';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please put a valid email address 😅';
    }
    if (!formData.message) {
      newErrors.message = 'This field is required 😅';
    }

    // If there are errors, set them to state
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return; // Stop submission if there are errors
    }

    console.log('Form submitted', formData);
    // Here you would typically handle form submission (e.g., sending data to an API)
  };

  return (
    <section className='contact'>
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
