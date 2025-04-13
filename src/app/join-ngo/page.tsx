'use client';
import { useState } from 'react';
import Link from 'next/link';

const JoinNgoPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    whyJoin: '',
  });

  const handleChange = (event : any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (event : any) => {
    event.preventDefault();
    console.log('Submitted Data:', formData);
    alert('Form submitted successfully!');
  };
  
  return (
    <section className="min-h-screen bg-orange-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-6">
          Join Our NGO
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 text-black"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 text-black"
          />

          <textarea
            name="whyJoin"
            placeholder="Why do you want to join?"
            value={formData.whyJoin}
            onChange={handleChange}
            rows={4}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 text-black"
          ></textarea>

          <button
            type="submit"
            className="bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Submit
          </button>
        </form>

        <div className="absolute top-4 right-4 z-50">
      <Link href="/#Header">
        <button className="bg-orange-600 hover:bg-Orange-700 text-white px-4 py-2 rounded-md text-sm md:text-base transition-all duration-200 shadow-lg">
           ⬅ Back to Homepage
        </button>
      </Link>
      </div>
      </div>
    </section>
  );
};

export default JoinNgoPage;
