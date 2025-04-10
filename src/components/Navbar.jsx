'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-yellow-500 text-white px-4 py-3 shadow-md">
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
            <li className="hover:text-orange-400 cursor-pointer text-black">Home</li>
            <li className="hover:text-orange-400 cursor-pointer text-black">About Us</li>
            <li className="hover:text-orange-400 cursor-pointer text-black">Projects</li>
            <li className="hover:text-orange-400 cursor-pointer text-black">Media</li>
            <li className="hover:text-orange-400 cursor-pointer text-black">Get Involved</li>
            <li className="hover:text-orange-400 cursor-pointer text-black">Download</li>
            <li className="hover:text-orange-400 cursor-pointer text-black">Centers</li>
            <li className="hover:text-orange-400 cursor-pointer text-black">Contact</li>
          </ul>

          {/* Donate Button */}
          <div className="mt-4 md:mt-0 md:ml-4 flex justify-center space-x-4">
            <Link href="/donation">
              {/*  <button className="bg-orange-500 hover:bg-orange-600 transition-colors duration-200 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md">  
                Donate
              </button>*/}

                <button className="border border-black px-4 py-2 rounded-lg mt-2 md:mt-0 text-black  transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white">Donate</button>

            </Link>
            
            <Link href="/signin">
           <button className="border border-black px-4 py-2 rounded-lg mt-2 md:mt-0 text-black  transition duration-300 ease-in-out hover:bg-orange-400 hover:text-white">Sign In</button>
        </Link>
           
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
