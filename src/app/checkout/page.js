'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function CheckoutPage() {
  const params = useSearchParams();
  const productName = params.get('product');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can send this data to an API or show a success message
    console.log('Inquiry Submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen flex text-gray-800 items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-xl w-full bg-white shadow-lg p-8 rounded-2xl">
        <h1 className="text-3xl font-bold text-center mb-4">Product Inquiry</h1>
        <p className="text-center text-sm text-gray-600 mb-8">
          You’re interested in: <strong>{productName?.toUpperCase() || 'Product'}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message (Optional)"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}



