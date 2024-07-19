/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_ruuijr5', 
      'template_c70fezr',
      formData,
      'd_XebPKRbCnRFibLQ'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message, please try again later.');
    });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  return (
    <section id="contact" className="bg-gradient-to-r from-zinc-800 to-neutral-950">
      <h1 className="pt-10 text-3xl text-center sm:text-4xl text-white font-extrabold tracking-tight">Get in touch</h1>
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-white">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-sm font-medium text-white">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          rows="5"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  </section>
  )
}
