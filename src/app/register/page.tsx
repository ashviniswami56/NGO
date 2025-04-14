"use client";

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('hero3.jpg')"  }}
    >
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">Register</button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
      <div className="absolute top-4 right-4 z-50">
      <Link href="/#Navbar">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm md:text-base transition-all duration-200 shadow-lg">
           ⬅ Back to Homepage
        </button>
      </Link>
      </div>
    </div>
  );
};

export default RegisterPage;



