"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close mobile dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white text-black shadow-md px-4 py-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full shadow-lg object-cover" />
          <h1 className="text-lg md:text-2xl font-extrabold text-orange-600 tracking-wide">
            The World Saver
          </h1>
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 font-semibold">
          <NavLinks />
          <ActionButtons />
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
  <div
    ref={dropdownRef}
    className="absolute top-full right-0 w-2/3 max-w-xs bg-white/40 backdrop-blur-md border border-white/30 rounded-xl shadow-lg px-4 py-6 space-y-4 font-semibold text-center z-50 animate-slide-in"
  >
          <MobileLink href="/#Navbar" onClick={() => setIsOpen(false)}>Home</MobileLink>
          <MobileLink href="/about" onClick={() => setIsOpen(false)}>About Us</MobileLink>
          <MobileLink href="/projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
          <MobileLink href="/mission" onClick={() => setIsOpen(false)}>Mission</MobileLink>
          <MobileLink href="/get-involved" onClick={() => setIsOpen(false)}>Get Involved</MobileLink>
          <MobileLink href="/volunteer" onClick={() => setIsOpen(false)}>Volunteer</MobileLink>
          <div className="flex flex-col gap-3 mt-4 border-t border-white/20">
    
    
    <MobileButton
    href="/donation"
    onClick={() => setIsOpen(false)}
    className="bg-orange-500 hover:bg-green-600 text-white"
  >
    Donate
  </MobileButton>
  <MobileButton
    href="/signin"
    onClick={() => setIsOpen(false)}
    className="bg-orange-500 text-white border border-gray-300 hover:bg-green-600"
  >
    Sign In
  </MobileButton>
</div>

        </div>
      )}
    </nav>
  );
};

const NavLinks = () => (
  <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
    <NavItem href="/#Navbar">Home</NavItem>
    <NavItem href="/about">About Us</NavItem>
    <NavItem href="/projects">Projects</NavItem>
    <NavItem href="/mission">Mission</NavItem>
    <NavItem href="/get-involved">Get Involved</NavItem>
    <NavItem href="/volunteer">Volunteer</NavItem>
  </ul>
);

const NavItem = ({ href, children }) => (
  <li>
    <Link href={href} className="hover:text-orange-500 transition">
      {children}
    </Link>
  </li>
);

const ActionButtons = () => (
  <div className="flex gap-3">
    <ActionButton href="/donation">Donate</ActionButton>
    <ActionButton href="/signin">Sign In</ActionButton>
  </div>
);

const ActionButton = ({ href, children }) => (
  <Link href={href}>
    <button className="border border-black px-4 py-1.5 rounded-lg text-sm text-black hover:bg-orange-400 hover:text-white transition">
      {children}
    </button>
  </Link>
);

const MobileLink = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick} className="block text-black hover:text-orange-500 transition">
    {children}
  </Link>
);
const MobileButton = ({ href, children, onClick, className }) => (
  <Link href={href} onClick={onClick}>
    <button
      className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${className}`}
    >
      {children}
    </button>
  </Link>
);


export default Navbar;
