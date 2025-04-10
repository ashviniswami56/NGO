"use client";

const RegisterPage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('register.jpg')"  }}
    >
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6 bg-opacity-90">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <input type="password" placeholder="Confirm Password" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black" />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Register</button>
        </form>
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/signin" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;



