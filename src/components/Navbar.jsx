'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap">
        {/* Logo / Brand */}
      { /*<div className="text-lg font-bold text-sky-400">The World Saver</div>*/}

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:justify-end md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 text-sm text-center md:text-left mt-4 md:mt-0">
            <li className="hover:text-orange-400 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 cursor-pointer">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer">Projects</li>
            <li className="hover:text-orange-400 cursor-pointer">Media</li>
            <li className="hover:text-orange-400 cursor-pointer">Get Involved</li>
            <li className="hover:text-orange-400 cursor-pointer">Download</li>
            <li className="hover:text-orange-400 cursor-pointer">Centers</li>
            <li className="hover:text-orange-400 cursor-pointer">Contact</li>
          </ul>

          {/* Donate Button */}
          <div className="mt-4 md:mt-0 md:ml-4 flex justify-center space-x-4">
            <Link href="/donation">
              {/*  <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">  
                Donate
              </button>*/}

                <button className="border border-white px-4 py-2 rounded-lg mt-2 md:mt-0 text-white  transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white">Donate</button>

            </Link>
           
            <button className="border border-white px-4 py-2 rounded-lg mt-2 md:mt-0 text-white  transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white">Sign In</button>
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
