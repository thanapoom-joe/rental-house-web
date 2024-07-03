// src/pages/ContactPage.jsx
import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full p-2 border rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
