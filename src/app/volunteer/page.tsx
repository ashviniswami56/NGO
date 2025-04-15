"use client";

import Navbar from "@/components/Navbar"; // adjust the path if needed
import Footer from "@/components/Footer"; // adjust the path if needed

const VolunteerPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen px-4 py-8 md:px-20 md:py-12"
        style={{ backgroundImage: "url('/images/hero3.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-orange-600 mt-15 mb-8 sm:text-4xl md:text-5xl">
          Volunteer With Us
        </h1>

        {/* Info Section */}
        <div className="mb-8 text-white text-center max-w-3xl mx-auto sm:text-base md:text-lg">
          <p>
            Join our team of dedicated volunteers and help us make a difference in the world. Whether you are skilled in teaching, organizing events, or just want to lend a helping hand we welcome you!
          </p>
        </div>

        {/* Form Section */}
        <form className="bg-white shadow-md rounded px-8 pt-10 pb-8 max-w-2xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Why do you want to volunteer?"
            className="w-full border p-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full transition-all duration-200"
          >
            Submit Application
          </button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default VolunteerPage;
