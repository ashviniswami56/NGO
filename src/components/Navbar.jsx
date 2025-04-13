"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md px-4 py-3 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <h1 className="text-2xl font-extrabold text-orange-500 tracking-wide">
            The World Saver
          </h1>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <NavLinks showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
          <ActionButtons />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg px-6 py-4 space-y-4 font-semibold text-center animate-slideDown">
          <MobileLink href="/#Header">Home</MobileLink>
          <MobileLink href="/#about">About Us</MobileLink>
          <MobileLink href="/#projects">Projects</MobileLink>
          <MobileLink href="/#mission">Mission</MobileLink>

          {/* Dropdown */}
          <div>
            <p className="text-black font-bold mb-2">Get Involved</p>
            <div className="space-y-2">
              {[
                { label: "Volunteer", href: "/volunteer" },
                { label: "NGO", href: "/join-ngo" },
                { label: "Corporate", href: "/corporate" },
                { label: "Individual Member", href: "/member" },
                { label: "Career", href: "/career" },
                { label: "NGO-Internship", href: "/internship" },
              ].map((item, idx) => (
                <MobileLink key={idx} href={item.href}>
                  {item.label}
                </MobileLink>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Link href="/donation">
              <button className="border border-black px-4 py-2 rounded-lg text-black hover:bg-orange-400 hover:text-white">
                Donate
              </button>
            </Link>
            <Link href="/signin">
              <button className="border border-black px-4 py-2 rounded-lg text-black hover:bg-orange-400 hover:text-white">
                Sign In
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Reusable Desktop Links
const NavLinks = ({ showDropdown, setShowDropdown }) => (
  <ul className="flex space-x-6 text-sm">
    <li>
      <Link href="/#Header" className="hover:text-orange-400">
        Home
      </Link>
    </li>
    <li>
      <Link href="/#about" className="hover:text-orange-400">
        About Us
      </Link>
    </li>
    <li>
      <Link href="/#projects" className="hover:text-orange-400">
        Projects
      </Link>
    </li>
    <li>
      <Link href="/#mission" className="hover:text-orange-400">
        Mission
      </Link>
    </li>
    <li
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button className="flex items-center gap-1 hover:text-orange-400">
        Get Involved <ChevronDown size={14} />
      </button>
      {showDropdown && (
        <ul className="absolute top-8 left-0 bg-white text-black shadow-lg rounded-md w-48 z-20">
          {[
            { label: "Volunteer", href: "/volunteer" },
            { label: "NGO", href: "/join-ngo" },
            { label: "Corporate", href: "/corporate" },
            { label: "Individual Member", href: "/member" },
            { label: "Career", href: "/career" },
            { label: "NGO-Internship", href: "/internship" },
          ].map((item, idx) => (
            <li key={idx}>
              <Link
                href={item.href}
                className="block px-4 py-2 text-sm hover:bg-orange-100"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
    <li>
      <Link href="/volunteer" className="hover:text-orange-400">
        Volunteer
      </Link>
    </li>
  </ul>
);

// Reusable Buttons
const ActionButtons = () => (
  <div className="flex gap-4">
    <Link href="/donation">
      <button className="border border-black px-4 py-2 rounded-lg text-black hover:bg-orange-400 hover:text-white">
        Donate
      </button>
    </Link>
    <Link href="/signin">
      <button className="border border-black px-4 py-2 rounded-lg text-black hover:bg-orange-400 hover:text-white">
        Sign In
      </button>
    </Link>
  </div>
);

// Reusable mobile link
const MobileLink = ({ href, children }) => (
  <Link
    href={href}
    className="block text-black hover:text-orange-500 transition"
  >
    {children}
  </Link>
);

export default Navbar;
