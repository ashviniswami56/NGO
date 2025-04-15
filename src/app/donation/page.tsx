"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer

const DonatePage = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-sky-100 flex flex-col md:flex-row items-center justify-center px-4 py-12">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4 max-w-xl text-sm text-gray-600">
          <Image
            src="/images/donations.jpg"
            alt="Donation"
            width={500}
            height={300}
            className="rounded shadow"
          />
          <p>
            The World Saver Foundation was established on 25th of April 2020 under Societies Registration Act 1960. The World Saver Foundation is a National level society having 80G & 12A.
            <br />
            Founded with the passion of “Devotion to the Nation” and the vision of a “prosperous Nation”.
          </p>
          <div>
            <p className="font-bold text-black">Contact Us:</p>
            <p>📧 info@theworldsaverngo.org</p>
            <p>📞 +91 1234567890</p>
          </div>
        </div>

        {/* Right Section: Payment Form */}
        <div className="md:w-1/2 bg-white p-8 shadow-lg rounded-lg max-w-lg mt-10 md:mt-0">
          <h2 className="text-xl font-semibold text-blue-900 mb-4">Payment Details</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded text-black" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded text-black" />
            <input type="tel" placeholder="Phone" className="w-full p-2 border rounded text-black" />
            <textarea placeholder="Address (Optional)" className="w-full p-2 border rounded text-black"></textarea>
            <textarea placeholder="Message (Optional)" className="w-full p-2 border rounded text-black"></textarea>
            <input type="number" placeholder="₹ Enter Amount" className="w-full p-2 border rounded text-black" />
            <button type="submit" className="w-full py-2 px-4 bg-orange-500 text-white rounded">
              Pay ₹ 0.00
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DonatePage;
