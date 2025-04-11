"use client";
import Link from "next/link";

const VolunteerPage = () => {
  return (
    <div className="min-h-screen bg-sky-100 px-4 py-8 md:px-20">
      {/* Top Right Back Button */}
      <div className="w-full flex justify-end">
        <Link href="/#Header">
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg text-sm md:text-base transition-all duration-200">
            ⬅ Back to Homepage
          </button>
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-orange-600 mt-4 mb-8">Volunteer With Us</h1>

      {/* Info Section */}
      <div className="mb-8 text-black text-center max-w-3xl mx-auto">
        <p>
          Join our team of dedicated volunteers and help us make a difference in the world. Whether you're skilled in teaching, organizing events, or just want to lend a helping hand — we welcome you!
        </p>
      </div>

      {/* Form Section */}
      <form className="bg-gray-50 shadow-md rounded px-8 pt-6 pb-8 max-w-2xl mx-auto space-y-4">
        <input type="text" placeholder="Full Name" className="w-full border p-2 rounded text-black" required />
        <input type="email" placeholder="Email Address" className="w-full border p-2 rounded text-black" required />
        <input type="tel" placeholder="Phone Number" className="w-full border p-2 rounded text-black" required />
        <textarea placeholder="Why do you want to volunteer?" className="w-full border p-2 rounded text-black" rows={4} />
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-full transition-all duration-200">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default VolunteerPage;
