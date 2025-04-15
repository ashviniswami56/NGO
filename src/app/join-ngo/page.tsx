"use client";

import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const JoinNgoPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whyJoin: "",
  });

  const fields = useMemo(() => [
    { name: "fullName", placeholder: "Full Name", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
    { name: "phone", placeholder: "Phone Number", type: "tel" },
  ], []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-orange-50 min-h-screen flex flex-col">
      <Navbar />

      {/* Space between Navbar and form */}
      <main className="flex-grow relative bg-[url('/images/hero3.jpg')] bg-cover bg-center py-20 px-4">
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-t-4 border-orange-400">
          <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-8 drop-shadow-sm">
            Join Our NGO
          </h2>

          <form onSubmit={handleSubmit} className="grid gap-6">
            {fields.map(({ name, placeholder, type }) => (
              <input
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={formData[name as keyof typeof formData]}
                onChange={handleChange}
                required
                className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 text-black"
              />
            ))}

            <textarea
              name="whyJoin"
              placeholder="Why do you want to join?"
              value={formData.whyJoin}
              onChange={handleChange}
              rows={4}
              required
              className="p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-orange-400 text-black"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl shadow-md hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinNgoPage;
