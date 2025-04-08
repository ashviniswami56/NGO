'use client'; // Required if you're using App Router

import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-black text-white px-4 py-3">
    <div className="flex flex-wrap justify-between items-center">
      {/* Nav Links */}
      <ul className="flex flex-wrap space-x-4 text-sm w-full md:w-auto justify-center md:justify-start mb-2 md:mb-0">
        <li className="hover:text-orange-400">Home</li>
        <li className="hover:text-orange-400">About Us</li>
        <li className="hover:text-orange-400">Projects</li>
        <li className="hover:text-orange-400">Media</li>
        <li className="hover:text-orange-400">Get Involved</li>
        <li className="hover:text-orange-400">Download</li>
        <li className="hover:text-orange-400">Centers</li>
        <li className="hover:text-orange-400">Contact</li>
      </ul>

      {/* Donate Button */}
      <div className="w-full md:w-auto flex justify-center md:justify-end">
      <Link href="/donation">
        <button className="bg-orange-500 text-white px-4 py-1 rounded" >
          Donate
        </button></Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
