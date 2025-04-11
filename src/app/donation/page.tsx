// app/donation/page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";

const DonatePage = () => {
  return (
    <div className="min-h-screen bg-sky-100 flex flex-col md:flex-row items-center justify-center px-4 py-12">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-2 max-w-xl">
        <Image
          src="/donations.jpg"
          alt="Donation"
          width={500}
          height={300}
          className="rounded shadow"
        />
        <p className="text-gray-600 text-sm">
          The World Saver Foundation was established on 25th of April 2020 under Societies Registration Act 1960. The World Saver Foundation is a National level society having 80G & 12A. It was founded with the passion of “Devotion to the Nation“ and the vision of a “prosperous Nation”.
        
        </p>
        <div>
          <p className="font-bold text-black">Contact Us:</p>
          <p className="text-black">📧 info@theworldsaverngo.org</p>
          <p className="text-black">📞 +91 1234567890</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg max-w-lg mt-10 md:mt-0">
        <h2 className="text-xl font-semibold text-blue-900 mb-4">Payment Details</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-2 rounded text-black" />
          <input type="email" placeholder="Email" className="w-full border p-2 rounded text-black" />
          <input type="tel" placeholder="Phone" className="w-full border p-2 rounded text-black" />
          <textarea placeholder="Address (Optional)" className="w-full border p-2 rounded text-black"></textarea>
          <textarea placeholder="Message (Optional)" className="w-full border p-2 rounded text-black"></textarea>
          <input type="number" placeholder="₹ Enter Amount" className="w-full border p-2 rounded text-black" />
          <button type="submit" className="bg-orange-500 text-white py-2 px-4 rounded w-full text-black">
            Pay ₹ 0.00
          </button>
        </form>
      </div>

      <div className="absolute top-4 right-4 z-50">
      <Link href="/#Header">
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md text-sm md:text-base transition-all duration-200 shadow-lg">
           ⬅ Back to Homepage
        </button>
      </Link>
      </div>

  </div>
  );
};

export default DonatePage;
