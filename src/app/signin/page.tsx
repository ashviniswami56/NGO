"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center relative" style={{ backgroundImage: "url('/images/hero3.jpg')" }}>
      {/* Navbar */}
      <Navbar />

      {/* SignIn Form */}
      <div className="flex-grow flex items-center justify-center px-4 py-25">
        <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 bg-opacity-90">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
            />
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SignInPage;
